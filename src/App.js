import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BlogList from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import Blog from "./components/SingleBlog/Blog";
import Homepage from "./components/pages/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddBlog from "./components/AddBlog/AddBlog";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<BlogList />} />
          <Route path="/posts/:id" element={<Blog />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to={"/404"} />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
