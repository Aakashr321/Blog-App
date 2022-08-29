import React, { useState } from "react";
import style from "./Posts.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Posts({ posts }) {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deletePost = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const editPost = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <ul className={style.mainlist}>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`${post.id}`}>
            <li className={style.list}>
              <p>{post.id}</p>
              <h3>{post.title}</h3>
              <p>{post.body.substring(0, 100)}</p>
            </li>
          </Link>
          <div>
            <button
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </button>
            .
            <button
              onClick={() => {
                editPost(post.id);
              }}
            >
              Edit Post
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Posts;
