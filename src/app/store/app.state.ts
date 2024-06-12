export interface Customer {
    id: string;
    name: string;
    company_name: string;
    type: string;
  }
  
  export interface Transaction {
    id: string;
    customer_id: string;
    office_id: number;
    category_id: number;
    date_of_transaction: string;
    amount: number;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  
  export interface AppState {
    customers: Customer[];
    transactions: Transaction[];
    categories: Category[];
    loading: boolean;
    error: string | null;
    customersByCategoryInQ2: any[];
  }
  