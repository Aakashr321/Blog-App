import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ()=> {
  return (
    <>
    <header className={styles.mainHeader}>
      <nav className={styles.headerNav}>
        <Link to="/">
          <h2>Blog App</h2>
        </Link>
        <ul>
          <li>
            <Link to="/posts">BlogList</Link>
          </li>
          <li>
            <Link to="/addBlog">Add Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
