import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Домашняя</Link>
        </li>
        <li>
          <Link to="/gallery">Галерея</Link>
        </li>
        <li>
          <Link to="/about-me">Обо мне</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
