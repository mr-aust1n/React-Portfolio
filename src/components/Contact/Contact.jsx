import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
        
        <h2>Contact</h2>
        <p>Feel Free to get in touch!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"></img>
            <a href="mailto:craig@mraustin.co.uk">My Email</a>
            </li>
            <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="email icon"></img>
            <a href="mailto:craig@mraustin.co.uk">My Email</a>
            </li>
            <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="email icon"></img>
            <a href="mailto:craig@mraustin.co.uk">My Email</a>
            </li>
        </ul>       
    </footer>

  )
}
