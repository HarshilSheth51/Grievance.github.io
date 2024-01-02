import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <
        >
        <
        nav className = "navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded" >
        <
        div className = "container" >
        <
        a className = "navbar-brand"
        href = "#" >
        <
        img src = "./images/Grievance-pu1.webp"
        alt = "Logo"
        width = "175"
        height = "70"
        className = "glogo" /
        >
        <
        /a> <
        button className = "navbar-toggler"
        type = "button"
        data - bs - toggle = "collapse"
        data - bs - target = "#navbarNav"
        aria - controls = "navbarNav"
        aria - expanded = "false"
        aria - label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> <
        /button> <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        li className = "nav-item" >
        <
        Link to = "/login"
        className = "nav-link" >
        Login <
        /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link to = "/adminpage"
        className = "nav-link" >
        Admin Login <
        /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link to = "/rectorpage"
        className = "nav-link" >
        Rector Login <
        /Link> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "#" >
        Services <
        /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "#" >
        Contact <
        /a> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /nav>

        <
        script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" > < /script> <
        />
    );
};

export default Navbar;