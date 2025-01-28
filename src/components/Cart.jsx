import Button from './Button';
import React from 'react';

function Cart({ cartItems, setCartItems, modalRef }) {
  let usDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let numOfItems = 0;
  let orderTotal = 0;

  cartItems.forEach((item) => {
    numOfItems += item.quantity;
    orderTotal += item.quantity * item.price;
  });

  function handleRemoveItem(name) {
    const updatedCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCartItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    modalRef.current.showModal();
  }

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col gap-300 rounded-xl bg-white p-300 lg:self-start">
        <h2 className="text-red text-600 font-bold">{`Your Cart (${numOfItems})`}</h2>
        <div className="flex flex-col gap-200 py-200">
          <img
            className="mx-auto"
            src="./assets/images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="text-300 text-center font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-300 rounded-xl bg-white p-300 lg:self-start"
    >
      <h2 className="text-red text-600 font-bold">{`Your Cart (${numOfItems})`}</h2>
      <ul>
        {cartItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <li className="flex items-center justify-between gap-100">
              <div className="text-300 flex flex-col gap-100">
                <h3 className="font-semibold text-rose-900">{item.name}</h3>
                <div className="flex items-center gap-100">
                  <p className="text-red font-semibold">{`${item.quantity}x`}</p>
                  <p className="text-rose-500">{`@ ${usDollar.format(item.price)}`}</p>
                  <p className="font-semibold text-rose-500">
                    {usDollar.format(item.price * item.quantity)}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => handleRemoveItem(item.name)}
                type="remove"
              />
            </li>
            {cartItems.length - 1 !== index && (
              <hr className="my-200 border-t-rose-100" />
            )}
          </React.Fragment>
        ))}
      </ul>
      <hr className="border-t-rose-100" />
      <div className="flex items-center justify-between gap-50">
        <p className="text-300 text-rose-900">Order Total</p>
        <output className="text-600 font-bold text-rose-900">
          {usDollar.format(orderTotal)}
        </output>
      </div>
      <div className="flex items-center justify-center gap-100 rounded-lg bg-rose-50 py-200">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <Button type="primary">Confirm Order</Button>
    </form>
  );
}

export default Cart;
