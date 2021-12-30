let invoices = [
  {
    name: "Trinity",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Lexi Gray",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Neo",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Sarah Lance",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Blink",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
  {
    name: "Jubileu",
    number: 2022,
    amount: "$4,900",
    due: "01/27/2020",
  },
];

let expenses = [
  {
    id: 1,
    service: "Breakfast",
    price: "$10,00",
  },
  {
    id: 2,
    service: "Lunch",
    price: "$13,00",
  },
  {
    id: 3,
    service: "Dinner",
    price: "$15,00",
  },
  {
    id: 4,
    service: "Coffee",
    price: "$3,00",
  },
  {
    id: 5,
    service: "Tea",
    price: "$2,00",
  },
  {
    id: 6,
    service: "Room cleaning",
    price: "$40,00",
  },
  {
    id: 7,
    service: "Room service",
    price: "$80,00",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}

export function getExpenses() {
  return expenses;
}

// export function getExpense(id) {
//   return invoices.find((invoice) => invoice.number === number);
// }

// export function deleteInvoice(number) {
//   invoices = invoices.filter((invoice) => invoice.number !== number);
// }
