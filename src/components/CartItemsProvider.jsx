import React from 'react';

import { calculateCartTotals } from '../utils';

export const CartItemsContext = React.createContext();

function CartItemsProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const { numOfItems, orderTotal } = calculateCartTotals(cartItems);

  function handleRemoveItem(itemName) {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  function handleQuantityChange(item, newQuantity) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (cartItem) => cartItem.name !== item.name
      );

      if (newQuantity > 0) {
        updatedCartItems.push({ ...item, quantity: newQuantity });
      }

      return updatedCartItems;
    });
  }

  const value = {
    cartItems,
    numOfItems,
    orderTotal,
    handleRemoveItem,
    handleClearCart,
    handleQuantityChange,
  };

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export default CartItemsProvider;
