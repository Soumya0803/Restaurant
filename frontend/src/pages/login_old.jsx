import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';

import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  return <>
    <Navbar />
    
    <div class="container">
    <div class="card  border-secondary mx-5 my-5 ">
      <form class="px-4 py-3">
        <div class="mb-3">
        <h1>Login</h1>

          <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck" />
            <label class="form-check-label" for="dropdownCheck">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">New around here? Sign up</a>
      <a class="dropdown-item" href="#">Forgot password?</a>
    </div>
    </div>
    <Footer />
  </>

}