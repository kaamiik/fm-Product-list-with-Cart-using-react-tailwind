import React from 'react';
import Button from './Button';
import { formatCurrency, calculateCartTotals } from '../utils';

const Modal = React.forwardRef(({ cartItems, setCartItems }, ref) => {
  const { _, orderTotal } = calculateCartTotals(cartItems);

  function handleSubmit(e) {
    e.preventDefault();
    ref.current.close();
    setCartItems([]);
  }
  return (
    <dialog
      className="backdrop:bg-[hsl(0 0% 0% / 50%)] animate-slide-up lg:animate-slide-right top-auto mx-auto w-full max-w-[43rem] rounded-t-xl md:top-0 md:my-auto md:rounded-xl lg:max-w-[37rem]"
      ref={ref}
    >
      <form onSubmit={handleSubmit} method="dialog">
        <div className="flex flex-col gap-400 p-300 md:p-500">
          <div className="flex flex-col items-start gap-200">
            <img src="./assets/images/icon-order-confirmed.svg" alt="" />
            <div className="flex flex-col gap-100">
              <h2 className="text-800 font-bold text-rose-900">
                Order Confirmed
              </h2>
              <p className="text-400 text-rose-500">
                We hope you enjoy your food!
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-rose-50 p-300">
            <ul>
              {cartItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center justify-between gap-100">
                    <div className="flex items-center gap-200">
                      <img
                        className="h-[48px] w-[48px] rounded-sm"
                        src={item.image.thumbnail}
                        alt=""
                      />
                      <div className="text-300 flex flex-col gap-100">
                        <h3 className="font-semibold text-rose-900">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-100">
                          <p className="text-red font-semibold">{`${item.quantity}x`}</p>
                          <p>{`@ ${formatCurrency(item.price)}`}</p>
                        </div>
                      </div>
                    </div>
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                  </li>
                  {cartItems.length - 1 !== index && (
                    <hr className="my-200 border-t-rose-100" />
                  )}
                </React.Fragment>
              ))}
            </ul>
            <hr className="my-300 border-t-rose-100" />
            <div className="flex items-center justify-between gap-100">
              <p className="text-300 text-rose-900">Order Total</p>
              <output className="text-600 font-bold text-rose-900">
                {formatCurrency(orderTotal)}
              </output>
            </div>
          </div>
          <Button type="primary">Start New Order</Button>
        </div>
      </form>
    </dialog>
  );
});

export default Modal;
