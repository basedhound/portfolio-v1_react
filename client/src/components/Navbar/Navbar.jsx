import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import {
  // BsTwitter,
  // BsFacebook,
  // BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-flag-social">
          <a className="app__navbar-flag disabled" href={null} title="En cours de développement">
            <img src={images.england} alt="" />{" "}
          </a>
        <div className="app__social--navbar">
          <a href="https://github.com/basedhound">
            <BsGithub />
          </a>
          <a href="https://linkedin.com/in/frankvukelic">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <ul className="app__navbar-links">
        {["accueil", "services", "portfolio", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["accueil", "services", "portfolio", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
