import React, { createContext, useState, ReactNode } from 'react';

interface PayContextProps {
  openTime: string | null;
  setOpenTime: React.Dispatch<React.SetStateAction<string | null>>;
}

export const PayContext = createContext<PayContextProps>({
  openTime: localStorage.getItem('openTime') || null,
  setOpenTime: () => {},
});

interface PayProviderProps {
  children: ReactNode;
}

const PayProvider: React.FC<PayProviderProps> = ({ children }) => {
  const [openTime, setOpenTime] = useState<string | null>(
    localStorage.getItem('openTime') || null
  );

  return (
    <PayContext.Provider value={{ openTime, setOpenTime }}>
      {children}
    </PayContext.Provider>
  );
};

export default PayProvider;