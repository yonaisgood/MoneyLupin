import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp/SignUp';
import Detail from './pages/DetailPage/DetailPage';
import Payment from './pages/PaymentPage/PaymentPage';
import Ranking from './pages/RankingPage/RankingPage';
import GlobalStyle from './GlobalStyle';
import PayProvider from './context/PayContext';
import { useAuthContext } from './hooks/useAuthContext';

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
                    user ? <Ranking /> : <Navigate to="/" replace={true} />
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
