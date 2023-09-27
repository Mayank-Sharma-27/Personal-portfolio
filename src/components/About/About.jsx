import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing scalable back-end systems
                and optimised APIs. I have worked in a fast growing startup where I build customer impacting features
                which helped the company grow by 7.5 times. I have also worked on preparing for high volume events at amazon such as Prime day and Black friday
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have build featrues for internal app which have been used by warehouse emplyees to ship orders.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};