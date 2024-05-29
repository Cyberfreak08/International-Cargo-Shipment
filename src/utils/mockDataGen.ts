import { writeFile } from 'fs';
import { v4 as uuidv4 } from 'uuid';

// Provided data
const categories = [
  { id: 1, category_name: "Steel" },
  { id: 2, category_name: "Electronics" },
  { id: 3, category_name: "Consumer goods" },
  { id: 4, category_name: "Home Appliances" }
];

const customers = [
  { id: "44f1b1cb-6b53-4ab7-ba32-1a31e7b18ff4", name: "John Doe", type: "international", category_id: 1 },
  { id: "c47374cd-3037-43ad-bbf6-af05f880cf7a", name: "Jane Smith", type: "national", category_id: 2 },
  { id: "73c0e193-7d85-4c59-b02e-144f205b3a5c", name: "Alice Lee", type: "international", category_id: 3 },
  { id: "8f45849a-48e8-49ed-b8cd-9915898e74b9", name: "Bob Brown", type: "national", category_id: 4 },
  { id: "e752d3c5-c5b2-4694-9cf4-18b0c96f34ab", name: "Emma Davis", type: "international", category_id: 1 },
  { id: "95096e4d-20d2-4d48-bd13-431d0048e85b", name: "Liam Wilson", type: "national", category_id: 2 },
  { id: "158b6f32-80c7-4f78-9057-c07c1a0d9b18", name: "Olivia Garcia", type: "international", category_id: 3 },
  { id: "788be44c-934d-46a8-9eae-b0a2a89be4f7", name: "James Martinez", type: "national", category_id: 4 },
  { id: "0b1324f8-c876-45b2-8677-39220d7c02b8", name: "Sophia Rodriguez", type: "international", category_id: 1 },
  { id: "73c0e193-7d85-4c59-b02e-144f205b3a5c", name: "William Taylor", type: "national", category_id: 2 }
];

const offices = [
  { id: 1, country: "Singapore" }
];

// Helper function to generate random date in the given month
const randomDate = (month: number, year: number) => {
  const day = Math.floor(Math.random() * 28) + 1; // To ensure valid dates
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

// Generate transactions
const generateTransactions = (customers: any[], offices: any[], categories: any[], startMonth: number, endMonth: number, year: number) => {
  const transactions :any = [];
  customers.forEach(customer => {
    for (let month = startMonth; month <= endMonth; month++) {
      for (let i = 0; i < 10; i++) { // 10 transactions per month
        const transaction = {
          id: uuidv4(),
          customer_id: customer.id,
          office_id: offices[0].id, // Single office for now
          date_of_transaction: randomDate(month, year),
          category_id: categories[Math.floor(Math.random() * categories.length)].id, // Random category
          amount: Math.floor(Math.random() * 900) + 100, // Random amount between 100 and 1000
          destination: offices[0].country
        };
        transactions.push(transaction);
      }
    }
  });
  return transactions;
};

// Generate transactions for the given year
const transactions = generateTransactions(customers, offices, categories, 1, 12, 2024);

// Combine all data
const data = {
  categories,
  customers,
  offices,
  transactions
};

// Write to file
writeFile('src/assets/data.json', JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log('Mock data generated successfully!');
});
