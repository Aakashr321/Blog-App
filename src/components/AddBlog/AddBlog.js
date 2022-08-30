import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from  './AddBlog.module.css'

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentEventHandler = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
     
    } catch (error) {
      toast.error("Oops something went wrong, Try again");
    }
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className={styles.addPostContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Enter the title</label>
          <input
            id="title"
            type="text"
            className="textInput"
            onChange={titleEventHandler}
            value={title}
          />
          <label htmlFor="body">Enter the blog content</label>
          <textarea
            id="body"
            className="form-control"
            cols="10"
            rows="8"
            onChange={contentEventHandler}
            value={body}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
