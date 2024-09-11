import styles from "./ContectUs.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
const ContectUs = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.backimg}>
        <img src="/images/contact-bg.jpg" />
      </div>
      <div className={styles.head}>
        <SectionTitle title="CONTACT US" />
        <h1>Get In Touch With Our Agents</h1>
      </div>
      <div className={styles.maincontact}>
        <div className={styles.section}>
          <div>
            <img src="/images/Map.JPG" />
          </div>
          <div className={styles.phonecards}>
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
    </div>
  );
};
export default ContectUs;
