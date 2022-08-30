import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getBlogs } from "../../redux/features/blogSlice";
import Spinner from "../../shared/Spinner";
import styles from "./Blog.module.css";
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>Toggle Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{blogs.id}</td>
            <td>{blogs.title}</td>
            <td>{blogs.body}</td>
            <td>
              <button
                onClick={() => {
                  setShowComments((prevState) => !prevState);
                }}
              >
                Toggle Comments
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.commentDiv}>
        {showComments && (
          <ol className={styles.mainlist}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.list}>
                <p> User Email : {comment.email}</p>
                <h3> {comment.name}</h3>
                <p>{comment.body.substring(0, 50)}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Blog;
