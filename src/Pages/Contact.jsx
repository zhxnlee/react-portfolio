import React, {useState} from "react";

import styles from "./Contact.module.css"
import call from "../assets/call.png"
import LinkedIn_logo from "../assets/logos/LinkedIn_logo.png"
import Github_logo from "../assets/logos/Github_logo.png"
import Gmail_logo from "../assets/logos/Gmail_logo.png"
import Phone_logo from "../assets/logos/Phone_logo.png"

function Contact(){

    const phoneNumber = "+60129502258";
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber)
          .then(() => {
            console.log('Phone number copied to clipboard!');
          })
          .catch((error) => {
            console.error('Failed to copy phone number:', error);
          });
      };

    const [contactDetail, setContactDetail] = useState("Please select a contact method");

    const handleMouseLeave = () =>{
        setContactDetail("Please select a contact method")
    }

    return(

        <>
        <div className = {styles.contactMainSection}>
            <div className = {styles.title}>
                <h1>Contact me</h1>
            </div>

            <div className = {styles.contactSection}>
                <div className = {styles.imageBackground}>
                    <div className = {styles.imageSection}>
                        <img src = {call}/>
                    </div>
                </div>

                <div className = {styles.contactContent}>
                    <div className ={styles.contactTitle}>

                        <p>{contactDetail}</p>
                    </div>
                    <div className = {styles.contactLogos}>
                        <a href = "https://www.linkedin.com/in/zhenxuanlee/" target="_blank"><img src = {LinkedIn_logo} onMouseEnter={() => setContactDetail("LinkedIn")} onMouseLeave = {handleMouseLeave}/></a>
                        <a href = "https://github.com/zhxnlee" target="_blank" ><img src = {Github_logo} onMouseEnter={() => setContactDetail("GitHub")} onMouseLeave = {handleMouseLeave}/></a>
                        <a href="mailto:zhenxuan25@gmail.com" target="_blank"><img src = {Gmail_logo} onMouseEnter={() => setContactDetail("Gmail")} onMouseLeave = {handleMouseLeave}/></a>
                        <img src = {Phone_logo} onMouseEnter={() => setContactDetail("+60129502258")} onClick={()=> {
                            setContactDetail("+60129502258")
                            handleCopyToClipboard();
                            }}/ >
                    </div>

                </div>

            </div>

            
        </div>
        </>
    )
}

export default Contact;
