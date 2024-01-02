import React from 'react';
import Sidebar from './sidebar';
import Loginpage from './loginpage';
import './dashboard.css';
import Dashboard from './dashboard';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Complain from './complain';


export default function Home(){
  return (

    <>



<div className="sidebar">
        <div className="sidebar-p">
      <img src="./images/Grievance-pu1.webp" alt="Logo"  class="dlogo"/>
      </div>
        <div className="items ">
          <ul className="list-group ">
            <li className="list-group-item "><a href="/dashboard">Dashboard</a></li>
            <li className="list-group-item"><a href="/compalin">Complain</a></li>
              
            {/*<li className="list-group-item"><Link to="" class="nav-link">Activity</Link></li>
            <li className="list-group-item"><Link to="/" class="nav-link">Logout</Link></li>*/}
          </ul>
          </div>  
      </div>



      




      <div>
 <h1>Dashboard</h1>
 <div className="navigation">
 <a href="/dashboard">Dashboard</a>
 
 <a href="/type">Type</a>
 {/* Add more links for other pages */}
 </div>
 <p>Dashboard content goes here.</p>
 </div>

        
   </>       
    
   
   
  );
}

