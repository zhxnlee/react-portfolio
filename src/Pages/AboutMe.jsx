import React, {useState} from "react";
import {Element} from 'react-scroll';
import styles from "./AboutMe.module.css";
import hi from "../assets/hi.png";
import Monash_logo from "../assets/logos/Monash_logo.jpg";

function AboutMe(){

    const [activeButton, setActiveButton] = useState('Description');

    const handleButtonClick = (buttonName) =>{
        setActiveButton(buttonName);
    };

    return(
        
            <div className = {styles.aboutme}>
                <div className = {styles.title}>
                    <h1>About Me</h1> 
                </div>

                <div className = {styles.aboutmeContent}>
            
                    <div className = {styles.imageSection}>
                        <div className = {styles.imageBackground}>
                            <img src = {hi}></img>
                        </div>
                        
                    </div>

                    <div className = {styles.aboutSection}>
                        <div className = {styles.abouts}>
                            <div className = {styles.aboutsButton}>
                                <button className={activeButton === 'Description' ? styles.active : undefined}
                                    onClick={() => handleButtonClick('Description')}>
                                    Description
                                </button>
                                <button className={activeButton === 'Education' ? styles.active : undefined}
                                    onClick={() => handleButtonClick('Education')}>
                                    Education
                                </button>
                            </div>
                            <div className = {styles.description}>
                                {activeButton === 'Description' ? (<>
                                <p>Passionate and detail-oriented front-end developer with a strong foundation in web development, including HTML, CSS, JavaScript, and React. </p> 
                                <br />
                                <p>Acquired hands-on skills and practical knowledge through comprehensive Udemy courses, enabling the creation of dynamic and responsive web applications.</p>
                                <br />
                                <p> Committed to delivering high-quality user experiences and continuously learning and adapting to new technologies.</p></>) : <p></p>}
                            
                                {activeButton === 'Education' ? (
                                    <>
                                    <img src = {Monash_logo}/>
                                    <br />
                                    <p>Completed Bachelor’s degree in Computer Science with a specialization in Data Science from Monash University Malaysia.</p>
                                    <br />
                                    <p>
                                    Learned web development (HTML, CSS, JavaScript, React) through comprehensive Udemy courses.
                                    </p>
                                    </> 
                                ): <p></p>
                                    
                                }
                                </div>
                        </div>
                        
        
                    </div>
                </div>
              
        
                
            </div>
        )
}

export default AboutMe;