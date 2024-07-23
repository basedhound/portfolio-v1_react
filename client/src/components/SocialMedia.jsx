import React from "react";
import {
  // BsTwitter,
  // BsFacebook,
  // BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://linkedin.com/in/frankvukelic">
        <BsLinkedin />
      </a>
      <a href="https://github.com/basedhound">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
