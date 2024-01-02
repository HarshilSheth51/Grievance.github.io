import React from 'react';
//import Sidebar from './component/sidebar';
import './component/dashboard.css';
import './App.css';
import Info from './component/info';
import Loginpage from './component/loginpage';
import Dashboard from './component/dashboard';
import Register from './component/registerpage';
import Adminpage from './component/adminlogin';
import Forgot from './component/forgot';
import Home from './component/home';
import Rectorlogin from './component/rectorlogin';
import Complain from './component/complain';

import { BrowserRouter , Route , Routes } from 'react-router-dom';



function App() {
  return (
        
       
<>


      <div className="home">
        
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Info/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/user" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/compalin" element={<Complain/>}/>
        <Route path="/complain" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/adminpage" element={<Adminpage/>}/>
        <Route path="/forgotpage" element={<Forgot/>}/>
        <Route path="/rectorpage" element={<Rectorlogin/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </div>



    
    
     
   </>       
    
   
   
  );
}

export default App;
