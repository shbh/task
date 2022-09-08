// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import HeadTails from './component/HeadTails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="headtail" element={<HeadTails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
