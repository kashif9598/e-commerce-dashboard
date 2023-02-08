import React from "react";
import { Link } from "react-router-dom";
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <header>
            <ul className={classes.navLink}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li> <Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li >
                <li><Link to="/signup">Sign Up</Link></li >
            </ul >
        </header >
    )
}

export default Nav;