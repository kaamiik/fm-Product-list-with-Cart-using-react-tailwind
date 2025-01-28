export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculateCartTotals(cartItems) {
  let numOfItems = 0;
  let orderTotal = 0;

  cartItems.forEach((item) => {
    numOfItems += item.quantity;
    orderTotal += item.quantity * item.price;
  });

  return { numOfItems, orderTotal };
}
