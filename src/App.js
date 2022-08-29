import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import Homepage from "./components/pages/Homepage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import AddBlog from "./components/AddBlog/AddBlog";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<BlogList />} />
          <Route path="/posts/:id" element={<Blog />} />
          <Route path ="/addBlog" element={<AddBlog />} />
        </Routes>
      <ToastContainer />
      </Router>
    </>
  );
};

export default App;
