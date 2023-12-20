import React from 'react'

import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  let navigate = useNavigate()
  function click() {
    navigate("/")
  }
  return (
    <div id="head">
      <span id="logo">
        <img
          onClick={click}
          id="logoPic"
          src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-modern-car-line-art-logo-png-image_9026701.png"
          alt="logo"
        />
      </span>
      <ul id="menu">
        <li className="list">
          <a href="/">support</a>
        </li>
        <li className="list">
          <a href="/">profile</a>
        </li>
        <li className="list">
          <a href="/cars">
            cars
          </a>
        </li>
        <li className="list">
          <a href="/">home</a>
        </li>
      </ul>
    </div>
  );
}
