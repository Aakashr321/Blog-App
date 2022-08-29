import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getBlogs } from "../../redux/features/blogSlice";
import Spinner from "../../shared/Spinner";
import styles from "./Blog.module.css";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const Blog = () => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const { blogs, loading } = useSelector((state) => state.blogs);

  const { id } = useParams();
  const dispatch = useDispatch();

  const getComments = async ({ id }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      const data = await response.json();
      console.log(data);
      setComments(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    dispatch(getBlogs({ id }));
    getComments({ id });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.singlePostPage}>
      <Box textAlign="center" sx={{ border: 1, width: 1 / 6 }}>
        <p>{blogs.id}</p>
        <h3>{blogs.title}</h3>
        <p>{blogs.body}</p>
        <Button
          onClick={() => {
            setShowComments((prevState) => !prevState);
          }}
        >
          Toggle Comments
        </Button>
      </Box>

      {showComments && (
        <ul className={styles.mainlist}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.list}>
              <p>{comment.email}</p>
              <h3>{comment.name}</h3>
              <p>{comment.body.substring(0, 50)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
