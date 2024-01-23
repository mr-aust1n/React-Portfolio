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
        <h3>Frontend Development</h3>
       <p>I am a front-end developer who has experience with e-commerce projects for small to medium-sized businesses and has also had the privilege of working with one of the world's largest sports clothing companies.</p>
    </div>
    </li> 
    <li className={styles.aboutItem}>  <img src={getImageUrl('about/serverIcon.png')} alt="Mouse Icon" /> 
    <div className={styles.aboutItemText}>
        <h3>Backend Development</h3>
       <p>I have experience developing fast and optimized back-end systems and APIs, and I am proficient in working with both SQL and NoSQL databases. Additionally, I manage my own cloud servers to ensure reliable hosting and data management.</p>
    </div>
    </li>   
    <li className={styles.aboutItem}>  <img src={getImageUrl('about/uiIcon.png')} alt="Mouse Icon" />     
    <div className={styles.aboutItemText}>
        <h3>Designer</h3>
       <p>Having a background in graphic design, I am well-acquainted with the Adobe Suite and skilled at translating Figma files into website designs.</p>
    </div>
    </li>   
    </ul>  
</div>

  </section>
  )
}
