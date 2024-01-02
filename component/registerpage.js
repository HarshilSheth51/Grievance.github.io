import React from "react";

export default function Register(){

    return(
    <>
    <section class="h-100 bg-light">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
                  <img src="./images/gateimg.jpg"
                alt="Sample photo" class="gate-p  img-responsive" />
            </div> 
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Student registration form</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" placeholder="Last name" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="email" id="form3Example1m1" class="form-control form-control-lg" placeholder="Email"/>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="phone" id="form3Example1n1" class="form-control form-control-lg" placeholder="Phone num" />
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                <textarea class="form-control" id="address" rows="2" placeholder="Enter your address" required></textarea>
                  
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 class="mb-0 me-4">Gender: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Female</label>
                  </div>

                  
                  <h6 class="mb-0 me-4">DOB: </h6>

                  <input type="date" id="form3Example9" class="form-control form-control-lg" placeholder="DOB" />
                  
                 
                
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">
                  <input type="password" id="form3Example1n1" class="form-control form-control-lg" placeholder="Password"/>

                   
                  </div>
                  <div class="col-md-6 mb-4">
                  <input type="phone" id="form3Example1n1" class="form-control form-control-lg" placeholder="state " required/>
                    
                  </div>
                </div>


               
                <div className="row">
                <div class="col-md-6 mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" placeholder="Enrollment no / Roll no" />
                 </div>
                 <div class="col-md-6 mb-4">
                 <input type="text" id="form3Example90" class="form-control form-control-lg" placeholder="Institute" /> 
                 </div>
                </div>

                <div class="row">
                    <div className="col-md-6 mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Course"/>
                  </div> 
                  <div className="col-md-6 mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Year"/>
                  </div>
                </div>

                <div class="row">
                    <div className="col-md-6 mb-4">
                    <select class="form-select form-select-lg mb-3" aria-label="Default select example">
                      <option selected>Living in Hostel</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                            
                    </select>

                  </div> 
                  <div className="col-md-6 mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Hostel Name"/>
                  </div>
                </div>
               
                <div class="row">
                    <div className="col-md-6 mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Room no "/>
                  </div> 
                  <div className="col-md-6 mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg" placeholder="Hostel ID"/>
                  </div>
                </div>
               
               

                
                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-outline-warning btn-lg">Reset all</button>
                  <button type="button" class="btn btn-outline-success btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
    </>
    )
}