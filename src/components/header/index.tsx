import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">The Planets</div>
          <ul className="nav-bar-items">
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#419EBB" }}
                to="/mercury"
              >
                Mercury
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#EDA249" }}
                to="/venus"
              >
                venus
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#6D2ED5" }}
                to="/earth"
              >
                earth
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#D14C32" }}
                to="/mars"
              >
                mars
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#D83A34" }}
                to="/jupiter"
              >
                jupiter
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#CD5120" }}
                to="/saturn"
              >
                saturn
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#1EC1A2" }}
                to="/uranus"
              >
                uranus
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#2D68F0" }}
                to="/neptune"
              >
                neptune
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
