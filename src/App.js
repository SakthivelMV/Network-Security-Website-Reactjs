import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Price from "./Components/Price/Price";
import Faq from './Components/Faq/Faq';
import Contact from './Components/Contact/Contact'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Price />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
