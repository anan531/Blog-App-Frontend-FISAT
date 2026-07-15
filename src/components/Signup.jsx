import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
       const[input,changeInput] = useState(

    {

        "name" :"",
        "phone":"",
        "email":"",
        "password":"",
        "conf_password":""

    }
       )


            const inputHandler = (event) =>{


                    changeInput({...input,[event.target.name]:event.target.value})
            }


            const readValue = () => {

    if (input.password !== input.conf_password) {
        alert("Password and Confirm Password do not match");
        return;
    }

    axios.post("http://localhost:3030/signup", input)
        .then((response) => {

            console.log(response.data);

            if (response.data.Status === "Success") {
                alert("Registered successfully");
            } else {
                alert("Email ID already exists");
            }

        })
        .catch((error) => {

            console.error("Error signing up:", error);
            alert("Failed to sign up");

        });
};


  return (
    <div>
        <h1 align="center">SIGN UP PAGE</h1>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Phone no</label>
<input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Email</label>
<input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Password</label>
<input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}/>

                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Confirm Password</label>
<input type="password" className="form-control" name="conf_password" value={input.conf_password} onChange={inputHandler}/>

                    </div>


                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary" onClick={readValue}>REGISTER</button>     
                    </div>

                    <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <a href="/" className="btn-btn-info">Back to Login</a>
</div>

                </div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Signup