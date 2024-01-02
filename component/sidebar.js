import React  from "react";
import { Link } from "react-router-dom";
import './dashboard.css';





export default function Sidebar(){

  return(
<div className="sidebar">
        <div className="sidebar-p">
      <img src="./images/Grievance-pu1.webp" alt="Logo"  class="dlogo"/>
      </div>
        <div className="items ">
          <ul className="list-group ">
            <li className="list-group-item "><Link to="/user" class="nav-link">Dashboard</Link></li>
            <li className="list-group-item"><Link to="/user/complain" class="nav-link">Complain</Link></li>
              
            <li className="list-group-item"><Link to="" class="nav-link">Activity</Link></li>
            <li className="list-group-item"><Link to="/" class="nav-link">Logout</Link></li>
          </ul>
          </div>  
      </div>
  )
}
