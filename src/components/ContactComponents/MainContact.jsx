import React from "react";
import SectionTitle from "../HomeComponents/SectionTitle/SectionTitle";
import styles from "./MainContact.module.css";
const MainContact = () => {
  return (
    <div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <SectionTitle title="CONTACT US" />
            <h1>Get In Touch With Our Agents</h1>
          </div>
          <p>
            When you really need to download free CSS template,please remember
            our website TemplateMo.Also,tell your friends about our
            website.Thank you for visiting.There is a variety of Bootstrap HTML
            CSS templates on our website.If you need more information,please
            contact us.
          </p>
          <div className={styles.phone}>
            <img src="/images/phone-icon.png" alt="" />
            <div className={styles.phonnumber}>
              <h3>010-020-0340</h3>
              <p>Phone Number</p>
            </div>
          </div>
          <div className={styles.phone}>
            <img src="/images/email-icon.png" alt="" />
            <div className={styles.phonnumber}>
              <h3>info@villa.co</h3>
              <p>Business Email</p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Your Name..." />
            <label htmlFor="name">Email Adress</label>
            <input type="text" placeholder="Your Email..." />
            <label htmlFor="name">Subject</label>
            <input type="text" placeholder="Subject..." />
            <label htmlFor="name">Message</label>
            <textarea type="text" placeholder="Your Message..." />
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <div className={styles.map}>
        <img src="/images/Map.JPG" />
      </div>
    </div>
  );
};

export default MainContact;
