import { createContext, useState } from 'react';

export const PayContext = createContext({
  openTime: localStorage.getItem('openTime') || null,
  setOpenTime: () => {},
});

const PayProvider = ({ children }) => {
  const [openTime, setOpenTime] = useState(
    localStorage.getItem('openTime') || null
  );
  return (
    <PayContext.Provider
      value={{
        openTime,
        setOpenTime,
      }}
    >
      {children}
    </PayContext.Provider>
  );
};

export default PayProvider;
