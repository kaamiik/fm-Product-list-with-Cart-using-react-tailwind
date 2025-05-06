import React from 'react';

export const ModalRefContext = React.createContext();

function ModalRefProvider({ children }) {
  const modalRef = React.useRef(null);

  return (
    <ModalRefContext.Provider value={{ modalRef }}>
      {children}
    </ModalRefContext.Provider>
  );
}

export default ModalRefProvider;
