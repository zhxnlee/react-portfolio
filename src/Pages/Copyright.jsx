import React, {useState} from "react"
import styles from "./Copyright.module.css"

function Copyright(){

    const currentYear = new Date().getFullYear();
    

    return(
        <div className = {styles.copyrightSection}>
            <p>© Copyright {currentYear} </p>
            <p>Lee Zhen Xuan</p>
        </div>
    )

}

export default Copyright;