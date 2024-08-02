import React, {useState} from "react";
import styles from "./Skills.module.css";
import HTML_logo from "../assets/logos/HTML5_logo.png"
import CSS_logo from "../assets/logos/CSS_logo.png"
import React_logo from "../assets/logos/React_logo.png"
import Javascript_logo from "../assets/logos/Javascript_logo.png"
import Python_logo from "../assets/logos/Python_logo.png"
import R_logo from "../assets/logos/R_logo.png"
import computer from "../assets/computer.png";
import Pandas_logo from "../assets/logos/Pandas_logo.png"
import Numpy_logo from "../assets/logos/Numpy_logo.png"

function Skills(){

    const [skill, setSkill] = useState("Please select a skill");
    
    const [activeButton, setActiveButton] = useState('Web Development');
    
    const handleButtonClick = (buttonName) =>{
        setActiveButton(buttonName);
    };

    const handleMouseLeave = () =>{
        setSkill("Please select a skill")
    }
    

    return (

        
        <>
        <div className = {styles.skillsMain}>
            <div className = {styles.title}>
                <h1>Skills</h1>
            </div>
            <div className = {styles.skillsSection}>
                
                
                <div className = {styles.imageSection}>
                    <div className = {styles.imageBackground}>
                        <img src = {computer}></img>
                    </div>
                    
                </div>
                

            
                <div className ={styles.skillsContent}>
                    
                    <div className = {styles.skills}>
                            <div className = {styles.skillsButton}>
                                <button className={activeButton === 'Web Development' ? styles.active : undefined}
                                            onClick={() => handleButtonClick('Web Development')}>
                                    Web Development
                                </button>
                                <button className={activeButton === 'Data Science' ? styles.active : undefined}
                                            onClick={() => handleButtonClick('Data Science')}>
                                    Data Science
                                </button>
                            </div>
                            <div className = {styles.description}>
                                <div className = {styles.descriptionSkills}>
                                    <p>{skill}</p>
                                </div>
                                <div className = {styles.logos}>
                                    {activeButton === 'Web Development' ? 
                                    <>
                                        <img src = {HTML_logo} onMouseEnter={() => setSkill("HTML 5")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {CSS_logo} onMouseEnter={() => setSkill("CSS")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {Javascript_logo} onMouseEnter={() => setSkill("JavaScript")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {React_logo} onMouseEnter={() => setSkill("React")} onMouseLeave = {handleMouseLeave}/>
                                    </>: 
                                    <>
                                        <img src = {Python_logo} onMouseEnter={() => setSkill("Python")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {R_logo} onMouseEnter={() => setSkill("R")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {Pandas_logo} onMouseEnter={() => setSkill("Pandas")} onMouseLeave = {handleMouseLeave}/>
                                        <img src = {Numpy_logo} onMouseEnter={() => setSkill("Numpy")} onMouseLeave = {handleMouseLeave}/>
                                    </>}
                                
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
                
        </div>
        </>
    )
}

export default Skills;