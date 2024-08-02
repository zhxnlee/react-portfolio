import React, {useState} from "react";
import styles from "./Navigation.module.css";
import { NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';

function Navigation(){

    const [menu, setMenu] = useState(true);
    const [hoverClose, setHoverClose] = useState(false);
    
    const links = [
        {name: "Home", to: "home"},
        {name: "Skills", to: "skills"},
        {name: "About me", to: "aboutme"},
        {name: "Contact", to: "contact"}
    ]

    const linkItems = links.map((listItem)=>(
        <li><Link activeClass = "active" smooth spy to = {listItem.to} className = {({isActive}) => isActive && styles.active}>{listItem.name}</Link></li>
    ));



    return(
        <>
        <div className = {styles.container} >
            <div className = {styles.navbar}>
                <h1>ZX</h1>
                <ul className = {styles.ulist}>
                    
                    {linkItems}
                    
                </ul>
            </div>

            <div className = {styles.navbarV}>
                <h1>ZX</h1>
                
                {menu ? <div className = {styles.menuIcon} >
                    <AiOutlineMenu size = {30} onClick = {() =>setMenu(false)}/>
                </div> : 
                
                <ul className = {styles.ulistV}>
                        <div className = {styles.closeIcon} onMouseEnter = {() => setHoverClose(true)} onMouseLeave = {() => setHoverClose(false)}>
                            <AiOutlineClose size = {30}onClick = {() =>{
                                setMenu(true);
                                setHoverClose(false)}}/>
                            {hoverClose && <p>Close</p>}
                                
                        </div>
                        <div></div>
                        {linkItems}
                </ul>}
                
            </div>
        </div>

        
        </>
    )
}

export default Navigation;