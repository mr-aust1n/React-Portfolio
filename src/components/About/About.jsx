import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
<div className={styles.content}>
    <img src={getImageUrl('about/aboutImage.png')} alt="Craig with a laptop on my lap" className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>  <img src={getImageUrl('about/cursorIcon.png')} alt="Mouse Icon" />    
    <div className={styles.aboutItemText}>
        <h3>Front-End Developer</h3>
       <p>I am a front end dev dont you</p>
    </div>
    </li> 
    <li className={styles.aboutItem}>  <img src={getImageUrl('about/serverIcon.png')} alt="Mouse Icon" /> 
    <div className={styles.aboutItemText}>
        <h3>Front-End Developer</h3>
       <p>I am a front end dev dont you</p>
    </div>
    </li>   
    <li className={styles.aboutItem}>  <img src={getImageUrl('about/uiIcon.png')} alt="Mouse Icon" />     
    <div className={styles.aboutItemText}>
        <h3>Front-End Developer</h3>
       <p>I am a front end dev dont you</p>
    </div>
    </li>   
    </ul>  
</div>

  </section>
  )
}
