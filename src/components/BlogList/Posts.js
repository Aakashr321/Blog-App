import React, { useState } from "react";
import "./Posts.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Posts({ posts }) {
  const deletePost = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      toast("The response status code is " + response.status);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const editPost = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Edited Post",
            body: "This post is edited",
            userId: Math.random().toString(36).slice(2),
          }),
        }
      );
      toast("The response status code is " + response.status);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <table className="tableBlog">
      <thead className="tbl-header">
        <tr>
          <th width="1%">ID</th>
          <th>Title</th>
          <th>Visit</th>
          <th>Blog</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="tbl-content">
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>

            <td>{post.title}</td>
            <td>
              <Link to={`${post.id}`}>More Details</Link>
            </td>

            <td>{post.body.substring(0, 100)}</td>

            <td className="actionButton">
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  editPost(post.id);
                }}
              >
                Edit Post
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;
