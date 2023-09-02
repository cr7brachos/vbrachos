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
import Leadership from './pages/Leadership';
import Management from './pages/Management';
import Team from './pages/Team';
import Time from './pages/Time';
import Effectiveness from './pages/Effectiveness';
import Principles from './pages/Principles';


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
          <Route path="/leadership" element={<Leadership />}></Route>
          <Route path="/management" element={<Management />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/time" element={<Time />}></Route>
          <Route path="/effectiveness" element={<Effectiveness />}></Route>
          <Route path="/principles" element={<Principles />}></Route>

      </Routes>


      <Footer />

    </BrowserRouter>
  
    

  )
}

export default App;
