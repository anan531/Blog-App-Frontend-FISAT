import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewMyPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    console.log("Token:", token);
    console.log("UserId:", userId);

    axios
      .post(
        "http://localhost:3030/viewmypost",
        { userId: userId },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          alert(response.data.status);
          setPosts([]);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Unable to fetch posts");
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">My Posts</h2>

        <div className="row">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="col-12 mb-3" key={index}>
                <div className="card shadow">
                  <div className="card-body">
                    <h5>{post.Message}</h5>
                    <p>
                      Posted On:{" "}
                      {post.postedDate
                        ? new Date(post.postedDate).toLocaleString()
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="text-center">No Posts Found</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMyPost;