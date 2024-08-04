import React, { useState } from "react";
import styles from "./Skills.module.css";
import HTML_logo from "../assets/logos/HTML5_logo.png";
import CSS_logo from "../assets/logos/CSS_logo.png";
import React_logo from "../assets/logos/React_logo.png";
import Javascript_logo from "../assets/logos/Javascript_logo.png";
import Python_logo from "../assets/logos/Python_logo.png";
import R_logo from "../assets/logos/R_logo.png";
import computer from "../assets/computer.png";
import Pandas_logo from "../assets/logos/Pandas_logo.png";
import Numpy_logo from "../assets/logos/Numpy_logo.png";
import Blender_logo from "../assets/logos/Blender_logo.png";
import Guitar_logo from "../assets/logos/Guitar_logo.png";
import Piano_logo from "../assets/logos/Piano_logo.png";
import Art_logo from "../assets/logos/Art_logo.png";
import Badminton_logo from "../assets/logos/Badminton_logo.png";

function Skills() {
  const [skill, setSkill] = useState("Please select a skill");
  const [activeButton, setActiveButton] = useState("Web Development");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleMouseLeave = () => {
    setSkill("Please select a skill");
  };

  return (
    <>
      <div className={styles.skillsMain}>
        <div className={styles.title}>
          <h1>Skills</h1>
        </div>
        <div className={styles.skillsSection}>
          <div className={styles.imageSection}>
            <div className={styles.imageBackground}>
              <img src={computer} alt="computer" />
            </div>
          </div>

          <div className={styles.skillsContent}>
            <div className={styles.skills}>
              <div className={styles.skillsButton}>
                <button
                  className={activeButton === "Web Development" ? styles.active : undefined}
                  onClick={() => handleButtonClick("Web Development")}
                >
                  Web Development
                </button>
                <button
                  className={activeButton === "Data Science" ? styles.active : undefined}
                  onClick={() => handleButtonClick("Data Science")}
                >
                  Data Science
                </button>
                <button
                  className={activeButton === "Others" ? styles.active : undefined}
                  onClick={() => handleButtonClick("Others")}
                >
                  Others
                </button>
              </div>
              <div className={styles.description}>
                <p>{skill}</p>
                <div className={styles.descriptionSkills}></div>
                <div className={styles.logos}>
                  {activeButton === "Web Development" ? (
                    <div className={styles.wDevelopment}>
                      <div className={styles.fR}>
                        <img src={HTML_logo}
                          alt="HTML5"
                          onMouseEnter={() => setSkill("HTML 5")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={CSS_logo}
                          alt="CSS"
                          onMouseEnter={() => setSkill("CSS")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                      <div className={styles.sR}>
                        <img
                          src={Javascript_logo}
                          alt="JavaScript"
                          onMouseEnter={() => setSkill("JavaScript")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={React_logo}
                          alt="React"
                          onMouseEnter={() => setSkill("React")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  ) : activeButton === "Data Science" ? (
                    <div className={styles.wDevelopment}>
                      <div className={styles.fR}>
                        <img
                          src={Python_logo}
                          alt="Python"
                          onMouseEnter={() => setSkill("Python")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={R_logo}
                          alt="R"
                          onMouseEnter={() => setSkill("R")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                      <div className={styles.sR}>
                        <img
                          src={Pandas_logo}
                          alt="Pandas"
                          onMouseEnter={() => setSkill("Pandas")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={Numpy_logo}
                          alt="Numpy"
                          onMouseEnter={() => setSkill("Numpy")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={styles.wDevelopment}>
                      <div className={styles.fR}>
                        <img
                          src={Badminton_logo}
                          alt="Badminton"
                          onMouseEnter={() => setSkill("Badminton")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={Guitar_logo}
                          alt="Guitar"
                          onMouseEnter={() => setSkill("Guitar")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                      <div className={styles.sR}>
                        <img
                          src={Piano_logo}
                          alt="Piano"
                          onMouseEnter={() => setSkill("Piano")}
                          onMouseLeave={handleMouseLeave}
                        />
                        <img
                          src={Art_logo}
                          alt="Art"
                          onMouseEnter={() => setSkill("Art")}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
