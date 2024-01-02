import React from "react"
import { Link } from "react-router-dom"
export default function Forgot(){
    return(
     
    
        <>
        <div class="card text-center">
    <div class="card-header h5 text-white bg-primary">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div class="form-outline">


        <select class="form-select  "  aria-label="Default select example">
                      
                            <option value="1">Student</option>
                            <option value="2">Admin</option>
                            
                    </select>
            <input type="email" id="typeEmail" class="form-control my-3" placeholder="Enter Email"/><button class="btn btn-primary b1">Cheak</button>
            <input type="email" id="typeEmail" class="form-control my-3" placeholder="Enter New Password"/>
        </div>
        
        <button class="btn btn-primary ">Reset Password</button>
        <p>Go to <Link to="/login" className="regi">LoginPage</Link></p>

    </div>
</div>
        </>
 
    
      
    )
}