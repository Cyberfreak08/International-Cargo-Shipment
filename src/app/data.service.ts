import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  loadData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  getCustomerDetailsById(data: any, customerId: string): any {
    return data.customers.find((customer: any) => customer.id === customerId);
  }

  getCustomersByCategoryInQ2(data: any): any {
    const result: any = [];

    // Filter transactions for Q2 (April to June)
    const filteredData = data.transactions.filter((transaction: any) => {
      const date = new Date(transaction.date_of_transaction);
      const month = date.getMonth() + 1; // getMonth() is zero-based
      return month >= 4 && month <= 6; // Q2 is April, May, June
    });

    data.categories.forEach((category: any) => {
      const categoryData = filteredData.filter(
        (transaction: any) => transaction.category_id === category.id
      );

      const branches = Array.from(
        new Set(categoryData.map((item: any) => item.office_id))
      );

      branches.forEach((branch) => {
        const branchData = categoryData.filter(
          (transaction: any) => transaction.office_id === branch
        );

        // Calculate total revenue for each customer in the branch and category
        const customerRevenue: { [key: string]: number } = {};
        branchData.forEach((transaction: any) => {
          if (!customerRevenue[transaction.customer_id]) {
            customerRevenue[transaction.customer_id] = 0;
          }
          customerRevenue[transaction.customer_id] += transaction.amount;
        });

        // Find the customer(s) with the maximum revenue
        const maxRevenue = Math.max(...Object.values(customerRevenue));
        const maxRevenueCustomers = Object.keys(customerRevenue).filter(
          (customerId) => customerRevenue[customerId] === maxRevenue
        );

        maxRevenueCustomers.forEach((customerId) => {
          const customer = this.getCustomerDetailsById(data, customerId);
          result.push({
            branch: branch,
            category: category.name,
            customer: {
              id: customer.id,
              name: customer.name,
              company_name: customer.company_name,
              totalRevenue: customerRevenue[customerId],
            },
          });
        });
      });
    });

    return result;
  }
  getCustomersByCategory(data: any, categoryId: number, quarter: number): any {
    const startMonth = (quarter - 1) * 3 + 1;
    const endMonth = startMonth + 2;
    const startDate = new Date(`2024-${startMonth}-01`);
    const endDate = new Date(`2024-${endMonth}-01`);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(endDate.getDate() - 1);

    const customers = data.transactions
      .filter((transaction: any) => {
        const date = new Date(transaction.date_of_transaction);
        return (
          date >= startDate &&
          date <= endDate &&
          transaction.category_id === categoryId
        );
      })
      .map((transaction: any) => transaction.customer_id);

    return Array.from(new Set(customers)).length;
  }

  getQuarterlyTransactions(data: any, officeId: number): any {
    const result = { count: 0, volume: 0 };
    data.transactions.forEach((transaction: any) => {
      if (transaction.office_id === officeId) {
        result.count++;
        result.volume += transaction.amount;
      }
    });
    return result;
  }

  getNationalVsInternational(data: any): any {
    const result = { national: 0, international: 0 };
    data.customers.forEach((customer: any) => {
      const transactions = data.transactions.filter(
        (transaction: any) => transaction.customer_id === customer.id
      );
      transactions.forEach((transaction: any) => {
        if (customer.type === 'national') {
          result.national += transaction.amount;
        } else {
          result.international += transaction.amount;
        }
      });
    });
    return result;
  }

  getMaxMonthlyTransactionsByCategory(
    data: any,
    startMonth: number,
    endMonth: number
  ): any {
    const maxTransactionsByCategoryArray: any[] = [];

    for (let categoryId = 1; categoryId <= 4; categoryId++) {
      const customers: any = {};

      for (let month = startMonth; month <= endMonth; month++) {
        const startDate = new Date(`2024-${month}-01`);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(endDate.getDate() - 1);

        const transactions = data.transactions.filter((transaction: any) => {
          const date = new Date(transaction.date_of_transaction);
          return (
            date >= startDate &&
            date <= endDate &&
            transaction.category_id === categoryId
          );
        });

        transactions.forEach((transaction: any) => {
          if (!customers[transaction.customer_id]) {
            customers[transaction.customer_id] = {
              count: 0,
              totalAmount: 0,
            };
          }
          customers[transaction.customer_id].count++;
          customers[transaction.customer_id].totalAmount += transaction.amount;
        });
      }

      const maxTransactions = Math.max(
        ...Object.values(customers).map((customer: any) => customer.count)
      );

      const customerIds = Object.keys(customers).filter(
        (id) => customers[id].count === maxTransactions
      );

      const customerDetails = customerIds.map((id) => {
        const customer = this.getCustomerDetailsById(data, id);
        return {
          id: customer.id,
          name: customer.name,
          company_name: customer.company_name,
          totalTransactions: customers[id].count,
          totalRevenue: customers[id].totalAmount,
        };
      });

      maxTransactionsByCategoryArray.push({
        categoryId: categoryId,
        maxTransactions: maxTransactions,
        customers: customerDetails,
      });
    }

    return maxTransactionsByCategoryArray;
  }
}
