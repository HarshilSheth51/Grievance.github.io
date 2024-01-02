
import React from "react"
import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
export default function Loginpage(){
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   



  return(
     <>
    <div class="container-admin">
    <div class="row">
      <div class="col-md-6">
        <div class="i
        mage-container">
          <img src="./images/pu_logo.webp"  className="logo-img" alt=""/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="login-container">
          <div class="logo">
            <img src="./images/naac.jpg" alt="Logo" className="nacc-img"/>
          </div>
          <h2>Student Login</h2>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input {...register("username")} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input {...register("Password")} />
            </div><br />
            <p>Don't have any Account Please <Link to="/register" className="regi">Register</Link></p>
            
            
            <Link to="/user" type="submit"  class="nav-link btn btn-success"  >Login</Link>
            <Link to="/forgotpage" className="regi1">Forgot Password?</Link>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
 
    
      
    )
}