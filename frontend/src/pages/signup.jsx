import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';
import P2 from "../Assets/P2.jpg";


import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  return <>
    <Navbar />
<section class="vh-100 bg-secondary" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius:"1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={P2}
                alt="login form"
                class="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}
              />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span class="h1 fw-bold mb-0">RESTRAUNT</span>
                  </div>

                  <h5 class="fw-normal mb-2 pb-3" style={{letterSpacing: "1px"}}>Create account</h5>

                  <div class="form-outline mb-2">
                    <input type="text" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Name</label>
                  </div>

                  <div class="form-outline mb-2">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-2">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>
                  <div class="form-outline mb-2">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Confirm Password</label>
                  </div>

                  <div class="pt-1 mb-2">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Signup</button>
                  </div>

            
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
  </>

}