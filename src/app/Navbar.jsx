"use client"
import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./asserts/Logo.png"
import Image from "next/image"
import Link from 'next/link';
const Navbar = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      });
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
        <Image src={Logo} style={{height:"auto",width:"100px"}} className='image'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" style={{color:'blue',fontWeight:"700"}} id="offcanvasNavbarLabel">Syntax Arts</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link active" aria-current="page"   href="/">Home</Link>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link"  href="/about">About Us</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link  active"  href="/service">Service</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Projects</a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <Link className="nav-link active" href="/contact">Contact Us</Link>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <button className='btns'>Contact Us</button>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
