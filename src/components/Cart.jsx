import React from 'react';
import Button from './Button';
import { formatCurrency } from '../utils';

import { CartItemsContext } from './CartItemsProvider';
import { ModalRefContext } from './ModalRefProvider';

function Cart() {
  const { cartItems, numOfItems, orderTotal, handleRemoveItem } =
    React.useContext(CartItemsContext);
  const { modalRef } = React.useContext(ModalRefContext);
  return (
    <div className="text-300">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {numOfItems > 0
          ? cartItems.map((item) => (
              <span key={item.name}>
                {`${item.quantity} ${item.name} ${formatCurrency(item.price)}, Total: ${formatCurrency(item.price * item.quantity)} `}
              </span>
            ))
          : 'Your cart is empty. Order Total: $0.00'}
        {`Order Total: ${formatCurrency(orderTotal)}`}
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col gap-300 rounded-xl bg-white p-300 lg:self-start">
          <h2 className="text-red text-600 font-bold">{`Your Cart (${numOfItems})`}</h2>
          <div className="flex flex-col gap-200 py-200">
            <img
              className="mx-auto"
              src="./assets/images/illustration-empty-cart.svg"
              alt=""
            />
            <p className="text-center font-semibold text-rose-500">
              Your added items will appear here
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            modalRef.current.showModal();
          }}
          className="flex flex-col gap-300 rounded-xl bg-white p-300 lg:self-start"
        >
          <h2 className="text-red text-600 font-bold">{`Your Cart (${numOfItems})`}</h2>
          <ul>
            {cartItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li className="flex items-center justify-between gap-100">
                  <div className="flex flex-col gap-100">
                    <h3 className="font-semibold text-rose-900">{item.name}</h3>
                    <div className="flex items-center gap-100">
                      <p className="text-red font-semibold">{`${item.quantity}x`}</p>
                      <p className="text-rose-500">{`@ ${formatCurrency(item.price)}`}</p>
                      <p className="font-semibold text-rose-500">
                        {formatCurrency(item.price * item.quantity)}
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
              {formatCurrency(orderTotal)}
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
      )}
    </div>
  );
}

export default Cart;
