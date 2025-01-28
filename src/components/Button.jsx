import React from 'react';

function Button({ type, onClick, children }) {
  if (type === 'remove')
    return (
      <button
        onClick={onClick}
        type="button"
        className="group focus-visible:outline-green aspect-square w-fit cursor-pointer rounded-full border border-rose-400 p-2 transition-colors duration-300 ease-in-out hover:border-black focus-visible:border-black focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            className="transition-colors duration-300 ease-in-out group-hover:fill-black group-focus-visible:fill-black"
          />
        </svg>
        <span className="sr-only">{`${type} icon`}</span>
      </button>
    );

  if (type === 'primary')
    return (
      <button className="bg-red before:bg-semi-black focus-visible:outline-green relative cursor-pointer rounded-full px-300 py-200 font-semibold text-white before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:before:opacity-100">
        <span className="relative z-10">{children}</span>
      </button>
    );
}

export default Button;
