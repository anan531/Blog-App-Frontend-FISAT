import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewAll = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:3030/viewall",
        {},
        {
          headers: {
            token: token,
          },
        }
      );

      console.log(response.data);

      if (Array.isArray(response.data)) {
        setPosts(response.data);
      } else {
        alert(response.data.status);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Posts</h2>

      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Post</h5>

                <p className="card-text">
                  {post.Message}
                </p>

                <small className="text-muted">
                  {new Date(post.postedDate).toLocaleString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ViewAll;