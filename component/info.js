import React from "react"
import { Link } from "react-router-dom"
export default function Info(){
    return(
        <>


        {/*navbar*/}

        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
    <div class="container">
    
     
      <a class="navbar-brand" href="#"><img src="./images/Grievance-pu1.webp" alt="Logo" width="175" height="70" class="glogo"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> 
          <li class="nav-item">
           <Link to="/login" class="nav-link">Login</Link>
          </li>
          <li class="nav-item">
             <Link to="/adminpage" class="nav-link">Admin Login</Link>
          </li>
          <li class="nav-item">
             <Link to="/rectorpage" class="nav-link">Rector Login</Link>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/info/contact">Contact</a>
          </li>
        </ul>
      </div>
</div>
</nav>





 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>











           <section id="hero">
              <div class="container">
                  <div class="row">
                      <div class="col">
                          <h1>Hello ,Students</h1>
                          <p>The online grievance system for college students is a digital platform that makes it easier for students to report and resolve problems they face at their college as well as for hostel students. It helps students express their concerns, report incidents, and find solutions quickly. </p>
                           <button  class="btn btn-dark btn-lg"><Link to="/login" class="nav-link "> Go To Login</Link></button>
                       </div>
                       <div class="col">
                           <img src="./images/Grievance-pu1.webp" alt="..."/>
                       </div>
                  </div>
                  <div class="row cards">
                      <div class="col-md-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                
                                <img src="./icon/iconlogo1.jpg" alt="..." class="icon"/>
                                <h5 class="card-title">Streamlined Grievance Handling</h5>
                                <p class="card-text">Efficient Resolution,Prompt Action ensures that grievances are promptly assigned to the appropriate authorities,  faster response times and resolution of student concerns.</p>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                
                                <img src="./icon/icon2.jpg"alt="..." class="icon"/>
                                <h5 class="card-title">Transparent Communication</h5>
                                <p class="card-text">Students can track the progress of their grievances through the system, providing transparency and keeping them informed about the status and actions taken.   </p>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                
                                <img  src="./icon/icon3.png" alt="..." class="icon"/>
                                <h5 class="card-title">Empowering Student Experience</h5>
                                <p class="card-text">By analyzing the data collected through the system, colleges and hostels can identify  issues and improve overall campus conditions, contributing to a better student experience.</p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          
          <section id="about-us">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col">
                          
                          <img src="/images/gateimg.jpg" alt="Logo"  class="img-fluid"/>
                      </div>
                      <div class="col">
                          <h1>About Me</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur reiciendis in quae, rem corporis id sequi debitis aliquam laudantium illum vel unde? Praesentium laboriosam neque eaque architecto maxime nihil?</p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur reiciendis in quae, rem corporis id sequi debitis aliquam laudantium illum vel unde? Praesentium laboriosam neque eaque architecto maxime nihil?</p>
                      </div>
                  </div>
              </div>
          </section>
          





          
          <section id="contact">
            <div class="container">
                <div class="row align-items-center projects">
                    <div class="col"> 
                      <h1>Contact me</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod aliquam corporis tempore nostrum. Animi rem quisquam deleniti qui ad ipsa quod! Animi corrupti, ex blanditiis dolor error nulla consectetur.</p>
                    </div>
                </div>
            </div>
          </section>
          
          

  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



       </>
    )
}
