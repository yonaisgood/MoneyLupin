import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export const useAuthContext = () => {
  // useContext를 통해 전역 context에 접근합니다.
  const context = useContext(AuthContext);

  return context;
};
