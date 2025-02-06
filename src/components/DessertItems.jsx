import React from 'react';
import AddToCart from './AddToCart';
import data from '../data/data.json';
import { formatCurrency } from '../utils';

function DessertItems({ cartItems, onQuantityChange }) {
  return (
    <ul className="grid gap-y-200 md:grid-cols-3 md:gap-x-300">
      {data.map((item, index) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem.name === item.name
        );
        const currentQuantity = cartItem?.quantity || 0;
        const isInCart = currentQuantity > 0;
        return (
          <li key={index} className="flex flex-col gap-200">
            <div className="grid grid-rows-(--image-grid-rows)">
              <picture className="col-start-1 row-span-2 row-start-1">
                <source srcSet={item.image.tablet} media="(min-width: 44em)" />
                <source srcSet={item.image.desktop} media="(min-width: 67em)" />
                <img
                  className={`rounded-lg ${isInCart ? 'border-red border-2' : ''}`}
                  src={item.image.mobile}
                  alt={item.alt}
                />
              </picture>
              <div className="col-start-1 row-span-2 row-start-2 self-center justify-self-center">
                <AddToCart
                  currentQuantity={currentQuantity}
                  onQuantityChange={(newQuantity) =>
                    onQuantityChange(item, newQuantity)
                  }
                />
                <span className="sr-only">{item.name}</span>
              </div>
            </div>
            <div className="text-400 flex flex-col gap-50">
              <p className="text-300 font-normal text-rose-500">
                {item.category}
              </p>
              <h2 className="font-semibold text-rose-900">{item.name}</h2>
              <p className="text-red font-semibold">{`${formatCurrency(item.price)}`}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DessertItems;
