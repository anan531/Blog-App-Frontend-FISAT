import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Create = () => {
  const [message, setMessage] = useState("");

  const sendPost = () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    const input = {
      Message: message,
      userId: userId,
    };

    axios
      .post("http://localhost:3030/create", input, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "Post Created Successfully") {
          alert("Post Created Successfully");
          setMessage("");
        } else {
          alert(response.data.status);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create post");
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="card shadow p-4">

              <h3 className="text-center mb-4">Create Post</h3>

              <div className="mb-3">
                <label className="form-label">
                  Enter Your Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                className="btn btn-primary"
                onClick={sendPost}
              >
                Create Post
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;