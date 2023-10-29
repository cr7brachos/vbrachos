import React from 'react';
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
import MainCell from './pages/MainCell';
import AuthenticationComponent from './pages/authentication/authentication.component';
import BussinessDevelopmentPage from './pages/Bussiness Development/BussinesDev.page';


//101023 cloned from GitHub

function App() {
  return (

    <BrowserRouter>

      {/* <Header /> */}
      
      <Routes>

          {/* nested routes in the main cell. they come out from the Outlet inside the Maincell*/}
          <Route path='/' element={<MainCell/>}>; 
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
            <Route path='/auth' element={<AuthenticationComponent />}></Route>
            <Route path="/bussiness-development" element={<BussinessDevelopmentPage />}></Route>
          </Route>
          

      </Routes>


      {/* <Footer /> */}

    </BrowserRouter>
  
    

  )
}

export default App;
