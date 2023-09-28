import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp/SignUp';
import Detail from './pages/DetailPage/DetailPage.jsx';
import Payment from './pages/PaymentPage/PaymentPage';
import Ranking from './pages/RankingPage/RankingPage.jsx';
import GlobalStyle from './GlobalStyle';
import PayProvider from './context/PayContext';
import { useAuthContext } from './hooks/useAuthContext.js';
import React from 'react';

function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <>
      {isAuthReady ? (
        <>
          <GlobalStyle />
          <PayProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/login"
                  element={
                    !user ? <Login /> : <Navigate to="/" replace={true} />
                  }
                ></Route>
                <Route
                  path="/signup"
                  element={
                    !user ? <Signup /> : <Navigate to="/" replace={true} />
                  }
                ></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route
                  path="/payment"
                  element={
                    user ? <Payment /> : <Navigate to="/" replace={true} />
                  }
                ></Route>
                <Route
                  path="/ranking"
                  element={
                    user ? <Ranking /> : <Navigate to="/" replace={true} />
                  }
                ></Route>
              </Routes>
            </BrowserRouter>
          </PayProvider>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default App;
