// Define the 'customers' array
const customers = [
  { id: 1, name: 'Customer 1' },
  { id: 2, name: 'Customer 2' },
  // Add more customer data as needed
];

// Define the 'invoices' array using 'customers'
const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];

// The 'invoices' array is now defined using 'customers'
