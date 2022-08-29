import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getPosts } from "../../redux/features/postSlice";
import Posts from "./Posts";
import Pagination from "../Pagination/Pagination";
import Spinner from "../../shared/Spinner";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const { posts, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const indexOfLast = postPerPage * currentPage; // 10
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPostPerPage = posts.slice(indexOfFirst, indexOfLast);

  const paginate = (num) => {
    setCurrentPage(num);
  };

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <Posts posts={currentPostPerPage} />
        <Pagination
          totalLength={posts.length}
          postsPerPage={postPerPage}
          paginate={paginate}
        />
      </>
    );
};

export default BlogList;
