import React from "react";
import { Link } from "react-router-dom";


export default function Adminpage(){
    return(
      
  <>  

        <body>
            
       
  <div class="container-admin">
    <div class="row">
      <div class="col-md-6">
        <div class="image-container">
          <img src="./images/pu_logo.webp" className="logo-admin"alt=""/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="login-container">
          <div class="logo">
            <img src="./images/naac.jpg" alt="Logo"  className="nacc-admin"/>
          </div>
          <h2>Admin Login</h2>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
            </div><br />
            <button type="submit" class="btn btn-success">Submit</button>
            <Link to="/forgotpage" className="regi1">Forgot Password?</Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>


      
      </>
 
    
      
    )
}