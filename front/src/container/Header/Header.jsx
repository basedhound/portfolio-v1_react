import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2.5,
      delay:0,
      ease: "easeInOut",
    },
  },
};

const Header = () => {

  const [text, count] = useTypewriter({
    words: [
      `Hello there`, 
      `I'm Frank ;)`, 
    ],
    loop: true,
    typeSpeed: 150,
  });


  return (
    <div id="accueil" className="app__header app__flex">
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">            
            <div>
              <h1 className="head-text">{text} <Cursor cursorColor="light-gray"/></h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Full Stack</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x:[-260, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeInOut"}}
        className="app__header-img">
        <img className="app__header-imgProfile" src={images.profile} alt="profile" />
        <img className="app__header-imgBg" src={images.cloud} alt="profile-bg"  />      
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[images.mongo, images.react, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
