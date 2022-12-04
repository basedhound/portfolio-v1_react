import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    const skillsQuery = '*[_type == "skills"] | order(priority asc)';
    const certificationsQuery = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(certificationsQuery).then((data) => {
      setCertifications(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        {/* SKILLS */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp-wrap">
          {/* WORK EXPERIENCE */}
          <div className="app__skills-exp">
            <h3 className="app__skills-head">Work Experience</h3>
            {experiences.map((experience, index) => (
              <motion.div className="app__skills-exp-item" key={index}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.name}>
                      <h4 className="bold-text">{experience.name}</h4>
                      <p className="p-text">{experience.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={experience.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip">
                      {experience.desc}
                    </ReactTooltip>
                  </>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="app__skills-exp">
            <h3 className="app__skills-head">Certifications</h3>
            {certifications.map((certification, index) => (
              <motion.div className="app__skills-exp-item" key={index}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{certification.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={certification.name}>
                      <h4 className="bold-text">{certification.name}</h4>
                      <p className="p-text">{certification.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={certification.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip">
                      {certification.desc}
                    </ReactTooltip>
                  </>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
