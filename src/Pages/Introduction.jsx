import React, {useState} from "react";
import {Element} from 'react-scroll';
import styles from "./Introduction.module.css";
import { ReactTyped } from "react-typed";
import hello from "../assets/hello.png";
import Resume from "../assets/files/LeeZhenXuan_Resume_2024.pdf";
import {Link} from 'react-scroll';


function Introduction(){
    return (
        <div className = {styles.introduction}>
                <div className = {styles.introSection}>
                    <p>Hello I'm</p>
                    <h1>Lee Zhen Xuan</h1>
                    <ReactTyped className = {styles.role} strings = {["Front-end Developer", "Data Scientist"]} typeSpeed = {40} backSpeed={60} loop/>

                    <div className = {styles.introButtons}>
                        <button><Link activeClass = "active" smooth spy to ="contact" >Contact me</Link></button>
                        <a href={Resume} download="LeeZhenXuan_Resume" target='_blank'>
                        <button>Resume</button>
                        </a>
                    </div>
                </div>
                <div className = {styles.imageSection}>
                    <img src = {hello}></img>
                </div>
                
            </div>
    )

}

export default Introduction; 