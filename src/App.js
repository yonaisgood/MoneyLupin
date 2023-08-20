import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Detail from './pages/DetailPage/DetailPage';
import Payment from './pages/PaymentPage/PaymentPage';
import Ranking from './pages/RankingPage/RankingPage';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/detail" Component={Detail}></Route>
          <Route path="/payment" Component={Payment}></Route>
          <Route path="/ranking" Component={Ranking}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
