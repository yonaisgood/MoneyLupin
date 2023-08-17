import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
