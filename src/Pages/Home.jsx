
import styles from "./Home.module.css";
import hello from "../assets/hello.png";
import { ReactTyped } from "react-typed";
import {Element} from 'react-scroll';
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Contact from "./Contact"
import Copyright from "./Copyright";

function Home(){
    return (
        <>
        <div className = {styles.container}>
            
            <Element name = "home"><Introduction/></Element>
            <Element name = "skills"><Skills/></Element>
            <Element name = "aboutme"><AboutMe/></Element>
            <Element name = "contact"><Contact/></Element>
            <Element name = "copyright"><Copyright/></Element>
            
            
        </div>
        </>
    )
}

export default Home;