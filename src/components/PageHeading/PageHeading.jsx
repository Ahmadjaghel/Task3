import React from "react";
import styles from "./PageHeading.module.css";
const PageHeading = ({ head, title }) => {
  return (
    <div className={styles.pageHeading}>
      <div className={styles.PropCont}>
        <img src="/images/page-heading-bg.jpg" />
      </div>
      <div className={styles.content}>
        <p>{head}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PageHeading;
