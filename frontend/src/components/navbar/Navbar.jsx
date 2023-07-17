import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import womenImg from "../../assets/woman.jpg";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">WeBlog</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Categories</li>
          <li className={classes.listItem}>Contacts</li>
        </ul>
        <div className={classes.right}>
          <img
            src={womenImg}
            alt="logo"
            className={classes.img}
            onClick={() => setShowModal((prev) => !prev)}
          />
          {showModal && (
            <div className={classes.modal}>
              <Link to="/create">Create</Link>
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
