import Footer from './components/Footer';
import Main from './components/Main';

import CartItemsProvider from './components/CartItemsProvider';
import ModalRefProvider from './components/ModalRefProvider';

function App() {
  return (
    <CartItemsProvider>
      <ModalRefProvider>
        <div className="text-300 flex min-h-screen flex-col bg-rose-50 font-serif font-normal">
          <Main />
          <Footer />
        </div>
      </ModalRefProvider>
    </CartItemsProvider>
  );
}

export default App;
