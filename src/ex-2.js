// Using reduce, process the array of transactions and return an object with total deposits and withdrawals per currency.

const transactions = [
  { id: 1, category: 'deposit', amount: 100, currency: 'USD' },
  { id: 2, category: 'withdrawal', amount: 50, currency: 'USD' },
  { id: 3, category: 'deposit', amount: 200, currency: 'EUR' },
  { id: 4, category: 'withdrawal', amount: 30, currency: 'USD' },
  { id: 5, category: 'deposit', amount: 150, currency: 'EUR' },
];

// Expected output:
// {
//   USD: { deposits: 100, withdrawals: 80 },
//   EUR: { deposits: 350, withdrawals: 0 }
// }