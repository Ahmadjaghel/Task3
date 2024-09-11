import React, { useState } from "react";
import "./Featured.css";
import Card from "./Card/Card";
import SectionTitle from "../SectionTitle/SectionTitle";
function Featured() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  return (
    <div className="featured">
      <div className="imgs">
        <img src="/images/featured.jpg" />
        <img src="/images/featured-icon.png" />
      </div>
      <div className="feattext">
        <SectionTitle title="Featured" />
        <h1>Best Appartment & Sea View</h1>
        <div className="useful">
          <p>Best useful links?</p>
          <div>
            <p>
              Get the best villa website template in HTML CSS and Bootstrap for
              your business.TemplateMoprovides you the{" "}
              <span>best free CSS templates</span> in the world.Please tell your
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                eum laboriosam incidunt! Quos, dolores deleniti perspiciatis
                perferendis ipsa molestiae est, autem quisquam commodi nisi
                consequatur voluptatem rerum, quis adipisci facere.
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="infCard">
        <Card
          img="/images/info-icon-01.png"
          title="250 m2"
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
  );
}

export default Featured;
