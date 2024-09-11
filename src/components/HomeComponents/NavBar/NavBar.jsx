import { useState } from "react";
import "./NavBar.css";
import Schedule from "./Schedule/Schedule";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
function NavBar() {
  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle("active");
  }
  const [count, setCount] = useState(1);
  return (
    <div className="mainNav">
      <div className="NavBar">
        <h2>VILLA</h2>
        <ul className="ulNavBar">
          <li onClick={() => setCount(1)}>
            <Link style={{ color: count == 1 ? "orangered" : "black" }} to="/">
              Home
            </Link>
          </li>
          <li onClick={() => setCount(2)}>
            <Link
              style={{ color: count == 2 ? "orangered" : "black" }}
              to="/Properties"
            >
              Properties
            </Link>
          </li>
          <li onClick={() => setCount(3)}>
            <Link
              style={{ color: count == 3 ? "orangered" : "black" }}
              to="/Property"
            >
              Property Details
            </Link>
          </li>
          <li onClick={() => setCount(4)}>
            <Link
              style={{ color: count == 4 ? "orangered" : "black" }}
              to="/Contact"
            >
              Contact Us{" "}
            </Link>
          </li>
          <li>
            <Schedule />
          </li>
        </ul>
        <div className="menu" onClick={showMenu}>
          <FaBarsStaggered size={22} />
        </div>
      </div>
      <ul className="ulmenu">
        <li onClick={() => setCount(1)}>
          <Link style={{ color: count == 1 ? "orangered" : "black" }} to="/">
            Home
          </Link>
        </li>
        <li onClick={() => setCount(2)}>
          <Link
            style={{ color: count == 2 ? "orangered" : "black" }}
            to="/Properties"
          >
            Properties
          </Link>
        </li>
        <li onClick={() => setCount(3)}>
          <Link
            style={{ color: count == 3 ? "orangered" : "black" }}
            to="/Property"
          >
            Property Details
          </Link>
        </li>
        <li onClick={() => setCount(4)}>
          <Link
            style={{ color: count == 4 ? "orangered" : "black" }}
            to="/Contact"
          >
            Contact Us{" "}
          </Link>
        </li>
        <div>
          <Schedule />
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
