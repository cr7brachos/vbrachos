import React from 'react';
import Footer from './components/Footer';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog';
import HomePage from './pages/HomePage';
import Personalinfo from './pages/PersonalInfo';
import Studies from './pages/Studies';
import Experience from './pages/Experience';
import Download from './pages/Download';


function App() {
  return (

    <BrowserRouter>

      <Header />
      
      <Routes>

          <Route path="/" element={<HomePage />}></Route>; 
          <Route path="/blog" element={<Blog />}></Route>;
          <Route path="/personal-info" element={<Personalinfo />}></Route>
          <Route path='/studies' element={<Studies />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/download" element={<Download />}></Route>

      </Routes>


      <Footer />

    </BrowserRouter>
  
    

  )
}

export default App;
