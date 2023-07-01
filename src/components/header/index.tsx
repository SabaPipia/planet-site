import React, { useState } from "react";
import "./style.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerMenu } from "../../assets/icon/icon-hamburger-menu.svg";

const Header = () => {
  const [navHidden, setNavHidden] = useState(true);
  const handleClick = () => {
    setNavHidden(!navHidden);
  };
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="nav-icons">
            <div className="logo">The Planets</div>
            <div className="burger-div" onClick={handleClick}>
              <BurgerMenu />
            </div>
          </div>
          <ul
            className={classNames("nav-bar-items", {
              "nav-bar-hidden": navHidden,
            })}
          >
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#419EBB" }}
                to="/mercury"
                onClick={handleClick}
              >
                Mercury
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#EDA249" }}
                to="/venus"
                onClick={handleClick}
              >
                venus
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#6D2ED5" }}
                to="/earth"
                onClick={handleClick}
              >
                earth
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#D14C32" }}
                to="/mars"
                onClick={handleClick}
              >
                mars
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#D83A34" }}
                to="/jupiter"
                onClick={handleClick}
              >
                jupiter
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#CD5120" }}
                to="/saturn"
                onClick={handleClick}
              >
                saturn
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#1EC1A2" }}
                to="/uranus"
                onClick={handleClick}
              >
                uranus
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                style={{ borderColor: "#2D68F0" }}
                to="/neptune"
                onClick={handleClick}
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
