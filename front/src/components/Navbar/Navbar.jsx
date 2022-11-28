import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import {
  // BsTwitter,
  // BsFacebook,
  // BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

import SocialMedia from "../SocialMedia";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__social--navbar">
        <a href="https://linkedin.com/in/frank-vukeli%C4%87-660918225">
          <BsLinkedin />
        </a>
        <a href="https://github.com/basedhound">
          <BsGithub />
        </a>
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
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
              {["home", "about", "work", "skills", "contact"].map((item) => (
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
