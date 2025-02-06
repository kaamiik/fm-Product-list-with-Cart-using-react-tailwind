import React from 'react';
import Cart from './Cart';
import DessertItems from './DessertItems';
import Modal from './Modal';
import { calculateCartTotals } from '../utils';

function Main() {
  const [cartItems, setCartItems] = React.useState([]);
  const modalRef = React.useRef(null);

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
  return (
    <main className="flex-1 p-300 md:p-500 lg:py-1100">
      <div className="mx-auto grid max-w-[76rem] gap-400 lg:grid-cols-(--main-grid-cols)">
        <div className="flex flex-col gap-400">
          <h1 className="text-800 font-bold text-rose-900">Desserts</h1>
          <DessertItems
            cartItems={cartItems}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <Cart
          cartItems={cartItems}
          numOfItems={numOfItems}
          orderTotal={orderTotal}
          onRemoveItem={handleRemoveItem}
          onOpenModal={() => modalRef.current.showModal()}
        />
      </div>
      <Modal
        cartItems={cartItems}
        orderTotal={orderTotal}
        onClearCart={handleClearCart}
        ref={modalRef}
      />
    </main>
  );
}

export default Main;
