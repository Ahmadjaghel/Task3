import React, { useState } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import Card from "../../components/HomeComponents/Featured/Card/Card";
import styles from "./Property.module.css";
import BestDeal from "../../components/HomeComponents/bestDeal/BestDeal";
const Property = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <div>
      <PageHeading head="HOME / SINGLE PROPERTY" title="SINGLE PROPETY" />
      <div className={styles.featured}>
        <div className={styles.featContent}>
          <div className={styles.imgs}>
            <img src="/images/property-01.jpg" />
          </div>
          <p className={styles.cardtitle}>Appartment</p>
          <h2>24 New Street Miami, OR 24 560</h2>
          <p>
            Get the best villa website template in HTML CSS and Bootstrap for
            your business.TemplateMoprovides you the
            <span>best free CSS templates</span> in the world.Please tell your
            friends about it.Thank you.Cloud bread kogi bitters pitchfork
            shoreditch tumblr yr succulents single-origin coffee schiltz enamei
            pin you probably haven't heard of them ugh hella.
          </p>
          <p>
            When you look for free CSS template,you can simply type TemplateMo
            in any search engine wibsite.In addition,you can type TemplateMo
            Difital Marketing.TemplateMo Corporate Layouts,etc.Master cardigan
            hoodie pop-up.
          </p>
          <div className={styles.useful}>
            <p className={styles.besttitle}>Best useful links?</p>
            <div>
              <p>
                Dolor <span>almesit amet</span> consectetur adipiscing elit,sed
                doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon
                bicycle rights keffiyeh snackwave wolf same vice,chilwave
                vexillologist incididunt ut labore consectetur{" "}
                <span>adipiscing</span> elit,sed do eiusmod tempor incididunt ut
                labore et dolore magna alique.
              </p>
              <div>
                <p className="accord" onClick={() => setActive1(!active1)}>
                  friends about it. How does this work?
                </p>

                {active1 == true ? (
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Autem eum laboriosam incidunt! Quos, dolores deleniti
                    perspiciatis perferendis ipsa molestiae est, autem quisquam
                    commodi nisi consequatur voluptatem rerum, quis adipisci
                    facere.
                  </p>
                ) : null}
              </div>
            </div>
            <div>
              <p className="accord" onClick={() => setActive2(!active2)}>
                Why is Vionlla Agency the best?
              </p>

              {active2 == true ? (
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem eum laboriosam incidunt! Quos, dolores deleniti
                  perspiciatis perferendis ipsa molestiae est, autem quisquam
                  commodi nisi consequatur voluptatem rerum, quis adipisci
                  facere.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.infCard}>
          <Card
            img="/images/info-icon-01.png"
            title="450 m2"
            more="Total Flat Space"
          />
          <Card
            img="/images/info-icon-02.png"
            title="Contract"
            more="Contract Ready"
          />
          <Card
            img="/images/info-icon-03.png"
            title="Payment"
            more="Payment"
            imgTitle="Process"
          />
          <Card
            img="/images/info-icon-04.png"
            title="Safety"
            more="24/7 Under"
            imgTitle="Controle"
          />
        </div>
      </div>
      <BestDeal />
    </div>
  );
};

export default Property;
