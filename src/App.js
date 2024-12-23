import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import React, { Suspense } from 'react';
import ScrollTop from './components/Reusables/ScrollTop';

const Home = React.lazy(()=>import  ("./components/Home"));
const Price = React.lazy(()=>import  ("./components/Price"));
const About = React.lazy(()=>import  ("./components/About"));
const Contact = React.lazy(()=>import  ("./components/Contact"));
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollTop />
          <Nav/>
          <Suspense fallback={<div>loading....</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="price" element={<Price/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element= {<Contact />} />
          </Routes>  
          </Suspense> 
      </div>
    </Router>
  );
}

export default App;
