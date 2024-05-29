"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var uuid_1 = require("uuid");
// Provided data
var categories = [
  { id: 1, category_name: "Steel" },
  { id: 2, category_name: "Electronics" },
  { id: 3, category_name: "Consumer goods" },
  { id: 4, category_name: "Home Appliances" },
];
var customers = [
  {
    id: "44f1b1cb-6b53-4ab7-ba32-1a31e7b18ff4",
    name: "John Doe",
    type: "international",
    password: "password1",
    category_id: 1,
    company_name: "Global Steel Inc.",
  },
  {
    id: "c47374cd-3037-43ad-bbf6-af05f880cf7a",
    name: "Jane Smith",
    type: "national",
    password: "password2",
    category_id: 2,
    company_name: "ElectroMart",
  },
  {
    id: "73c0e193-7d85-4c59-b02e-144f205b3a5d",
    name: "Alice Lee",
    type: "international",
    password: "password3",
    category_id: 3,
    company_name: "Consumer Goods Corp.",
  },
  {
    id: "8f45849a-48e8-49ed-b8cd-9915898e74b9",
    name: "Bob Brown",
    type: "national",
    password: "password4",
    category_id: 4,
    company_name: "Home Appliance Solutions",
  },
  {
    id: "e752d3c5-c5b2-4694-9cf4-18b0c96f34ab",
    name: "Emma Davis",
    type: "international",
    password: "password5",
    category_id: 1,
    company_name: "Global Steel Inc.",
  },
  {
    id: "95096e4d-20d2-4d48-bd13-431d0048e85b",
    name: "Liam Wilson",
    type: "national",
    password: "password6",
    category_id: 2,
    company_name: "ElectroMart",
  },
  {
    id: "158b6f32-80c7-4f78-9057-c07c1a0d9b18",
    name: "Olivia Garcia",
    type: "international",
    password: "password7",
    category_id: 3,
    company_name: "Consumer Goods Corp.",
  },
  {
    id: "788be44c-934d-46a8-9eae-b0a2a89be4f7",
    name: "James Martinez",
    type: "national",
    password: "password8",
    category_id: 4,
    company_name: "Home Appliance Solutions",
  },
  {
    id: "0b1324f8-c876-45b2-8677-39220d7c02b8",
    name: "Sophia Rodriguez",
    type: "international",
    password: "password9",
    category_id: 1,
    company_name: "Global Steel Inc.",
  },
  {
    id: "73c0e193-7d85-4c59-b02e-144f205b3a5c",
    name: "William Taylor",
    type: "national",
    password: "password10",
    category_id: 2,
    company_name: "ElectroMart",
  },
];

var offices = [{ id: 1, country: "Singapore" }];
// Helper function to generate random date in the given month
var randomDate = function (month, year) {
  var day = Math.floor(Math.random() * 28) + 1; // To ensure valid dates
  return ""
    .concat(year, "-")
    .concat(month.toString().padStart(2, "0"), "-")
    .concat(day.toString().padStart(2, "0"));
};
// Generate transactions
var generateTransactions = function (
  customers,
  offices,
  categories,
  startMonth,
  endMonth,
  year
) {
  var transactions = [];
  customers.forEach(function (customer) {
    let transactionLimit = Math.floor(Math.random() * 10);
    for (var month = startMonth; month <= endMonth; month++) {
      for (var i = 0; i < 10 + transactionLimit; i++) {
        // 10 transactions per month
        // console.log("Limit",10+transactionLimit);
        var transaction = {
          id: (0, uuid_1.v4)(),
          customer_id: customer.id,
          office_id: offices[0].id, // Single office for now
          date_of_transaction: randomDate(month, year),
          category_id:
            categories[Math.floor(Math.random() * categories.length)].id, // Random category
          amount: Math.floor(Math.random() * 900) + 100, // Random amount between 100 and 1000
          destination: offices[0].country,
        };
        transactions.push(transaction);
      }
    }
  });
  return transactions;
};
// Generate transactions for the given year
var transactions = generateTransactions(
  customers,
  offices,
  categories,
  1,
  12,
  2024
);
// Combine all data
var data = {
  categories: categories,
  customers: customers,
  offices: offices,
  transactions: transactions,
};
// Write to file
(0, fs_1.writeFile)(
  "International-Cargo-Shipmentsrcassetsdata.json",
  JSON.stringify(data, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Mock data generated successfully!");
  }
);
