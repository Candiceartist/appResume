
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Price from './pages/Price';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
    </div>
  );
}

export default App;
