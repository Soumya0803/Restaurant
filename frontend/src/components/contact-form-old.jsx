import React from "react";
import { useForm } from "react-hook-form";


function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return <>
    <div class="container ">
      <div class="card border-secondary mx-3 my-5">
  <form class="mx-4 my-3" onSubmit={handleSubmit(onSubmit)}>
 <h1> Contact US</h1>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input   {...register("name", { required: true, maxLength: 20 })} class="form-control" id="name"  placeholder="Name"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input  {...register("email", { required: true })} type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="email@example.com" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <input   {...register("message", { required: true, maxLength: 1000 })} class="form-control" id="message"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </>

}
export default ContactForm;
