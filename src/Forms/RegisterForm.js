import React from "react";
import {useForm} from "react-hook-form";

import "./Forms.css";
// import loginImg from "../../login.jpg";



export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);

  };

  return (

    <div className="base-container">
          <div className="header">Register</div>
          {/* <img src ={loginImg} alt="construction"/> */}
          
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form">
    <div className="form-group">
         
            {/* Start of UserName field */}
      <label htmlFor="username">
       User Name
        <input type="text" 
        placeholder="username"
        name="userName" 
        ref={register({ required: true, minLength: 6, maxLength: 15 })} />
      </label>
   
      {errors.userName && errors.userName.type === "required" && (
          <span>Please enter a username</span>
        )}
        {errors.userName&& errors.userName.type === "minLength" && (
          <span>Username is too short</span>
        )}
         {errors.userName && errors.userName.type === "maxLength" && (
          <span>Username is too long</span>
        )}

        {/* End of UserName Field */}

        {/* Start of Full Name Field */}
      <label htmlFor="FullName"> Name
      <input
          type='text'
          placeholder='Name'
          name='FullName'
          ref={register({ required: true, minLength: 3})}
        />
      
        {errors.FullName && errors.FullName.type === "required" && (
          <span>Please enter your name</span>
        )}
        {errors.FullName && errors.FullName.type === "minLength" && (
          <span>Name is too short</span>
        )}
        {/* End of Full Name Field*/}
      </label>

      <label htmlFor="password">
        Password
        </label>
        <input type="password" 
        placeholder="Password"
        name="password" 
        ref={register({required: true, minLength: 5})} />
     
   
      {errors.password && errors.password.type === "required" && (
          <span>Password is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Password is too short - 5 characters</span>
        )}
      </div>
      
      <div className="footer">
      {/* <button type="button" className="btn" >Submit */}
      <button className="btn">Submit</button> 
     </div>
     </div>

    </form>
    </div>
  );
}