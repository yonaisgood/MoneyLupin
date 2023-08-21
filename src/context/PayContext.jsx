import { createContext, useState } from 'react';

export const PayContext = createContext({
  openTime: null,
  setOpenTime: () => {},
});

const PayProvider = ({ children }) => {
  const [openTime, setOpenTime] = useState(null);

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
