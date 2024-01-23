import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Craig Austin</h1>
        <p className={styles.description}>I'm a front-end developer who excels in creating visually appealing and user-friendly websites, constantly honing my skills and staying up-to-date with technology to deliver cutting-edge solutions.</p>
        <a href="mailto:craig@mraustin.co.uk" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img
        src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

