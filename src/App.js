import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
