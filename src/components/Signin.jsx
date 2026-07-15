import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("http://localhost:3030/signin", input)
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "Incorrect Password") {
          alert("Incorrect Password");
        } else if (response.data.status === "Invalid Email ID") {
          alert("Invalid Email ID");
        } else {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userId", response.data.userId);

          console.log(response.data.userId);
          console.log(response.data.token);

          navigate("/create");
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("Failed to sign in");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border rounded p-4 bg-light shadow-sm">
          <h2 className="mb-4 text-center">Login Portal</h2>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={input.email}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={input.password}
              onChange={inputHandler}
            />
          </div>

          <button
            className="btn btn-primary w-100 mb-3"
            onClick={readValue}
          >
            Sign In
          </button>

          <div className="text-center">
            <Link to="/signup" className="btn btn-info">
              New Users Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;