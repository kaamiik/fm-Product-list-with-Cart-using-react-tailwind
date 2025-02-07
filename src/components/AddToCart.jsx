import React from 'react';
import {
  NumberField,
  Label,
  Group,
  Input,
  Button as AriaButton,
} from 'react-aria-components';

function AddToCart({ currentQuantity, onQuantityChange }) {
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleQuantityChange(value) {
    const sanitizedValue = value || 0;

    if (sanitizedValue === 0) {
      timeoutRef.current = setTimeout(() => {
        onQuantityChange(0);
      }, 100);
    } else {
      onQuantityChange(sanitizedValue);
    }
  }

  if (currentQuantity === 0) {
    return (
      <button
        onClick={() => handleQuantityChange(1)}
        type="button"
        className="hover:border-red hover:text-red group focus-visible:border-red focus-visible:text-red focus-visible:outline-green flex w-fit cursor-pointer items-center gap-100 rounded-full border border-rose-400 bg-white px-[1.75em] py-[0.75em] text-rose-900 transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <g
            fill="#000"
            clipPath="url(#cart-icon-clip)"
            className="group-hover:fill-red group-focus:fill-red transition-colors duration-300 ease-in-out"
          >
            <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
            <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
          </g>
          <defs>
            <clipPath id="cart-icon-clip">
              <path fill="#fff" d="M.333 0h20v20h-20z" />
            </clipPath>
          </defs>
        </svg>
        <span className="font-semibold">Add to Cart</span>
      </button>
    );
  }

  return (
    <NumberField
      value={currentQuantity}
      onChange={handleQuantityChange}
      minValue={0}
    >
      <Label className="sr-only">Number of Items</Label>
      <Group className="data-focus-visible:outline-green bg-red flex w-fit items-center rounded-full p-150 data-focus-visible:outline-2 data-focus-visible:outline-offset-4">
        <AriaButton
          slot="decrement"
          className="group w-fit cursor-pointer rounded-full border border-white p-50 transition-colors duration-300 ease-in-out hover:bg-white focus-visible:bg-white"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path
              fill="#fff"
              d="M0 .375h10v1.25H0V.375Z"
              className="group-hover:fill-red group-focus-visible:fill-red transition-colors duration-300 ease-in-out"
            />
          </svg>
        </AriaButton>
        <Input className="text-300 max-w-[6.15rem] text-center font-bold text-white outline-none" />
        <AriaButton
          slot="increment"
          className="group w-fit cursor-pointer rounded-full border border-white p-50 transition-colors duration-300 ease-in-out hover:bg-white focus-visible:bg-white"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              className="group-hover:fill-red group-focus-visible:fill-red transition-colors duration-300 ease-in-out"
            />
          </svg>
        </AriaButton>
      </Group>
    </NumberField>
  );
}

export default AddToCart;
