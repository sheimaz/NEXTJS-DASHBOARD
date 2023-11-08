export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type CustomerField = {
  // Define the fields for the CustomerField type
};

export type CustomersTable = {
  total_pending: number;
  total_paid: number;
};

export type InvoiceForm = {
  amount: number;
};

export type InvoicesTable = {
  // Define the fields for the InvoiceForm type
};
export type LatestInvoiceRaw = {
  amount: number
};
export type User = {
  // Define the fields for the InvoiceForm type
};
export type Revenue = {
  revenue: number; // Add the 'revenue' property
};
