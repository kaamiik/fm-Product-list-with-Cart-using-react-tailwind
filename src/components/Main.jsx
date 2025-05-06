import React from 'react';
import Cart from './Cart';
import DessertItems from './DessertItems';
import Modal from './Modal';

function Main() {
  return (
    <main className="flex-1 p-300 md:p-500 lg:py-1100">
      <div className="mx-auto grid max-w-[76rem] gap-400 lg:grid-cols-(--main-grid-cols)">
        <div className="flex flex-col gap-400">
          <h1 className="text-800 font-bold text-rose-900">Desserts</h1>
          <DessertItems />
        </div>
        <Cart />
      </div>
      <Modal />
    </main>
  );
}

export default Main;
