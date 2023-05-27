import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from "./components/Home";
import Price from "./components/Price";
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="price" element={<Price/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element= {<Contact />} />
          </Routes>   
      </div>
    </Router>
  );
}

export default App;
