import React from "react";
import "./Footer.css";

import img1 from "./images/docker.png";
import img2 from "./images/expressjs.png";
import img3 from "./images/mongodb.png";
import img4 from "./images/react.png";
import img5 from "./images/redux.png";

const Footer = () => {
  return (
    <div>
      <h1>Powerd By</h1>
      <div className="container">
        {/*  */}
        <div className="card">
          <div className="image">
            <img src={img1}></img>
          </div>
          <div className="content">
            <h3>Docker</h3>
            <p>
              Docker containerizes your frontend, making deployment consistent
              and scalable.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="image">
            <img src={img2}></img>
          </div>
          <div className="content">
            <h3>Express Js</h3>
            <p>
              Express.js simplifies API creation, handling requests, and
              routing.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="image">
            <img src={img3}></img>
          </div>
          <div className="content">
            <h3>Mongo DB</h3>
            <p>
              MongoDB stores song data efficiently, offering flexibility and
              scalability.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="image">
            <img src={img4}></img>
          </div>
          <div className="content">
            <h3>React TS</h3>
            <p>
              React with TypeScript ensures dynamic, type-safe frontend
              development.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <div className="image">
            <img src={img5}></img>
          </div>
          <div className="content">
            <h3>Redux</h3>
            <p>
              Redux manages state for your song REST API, enabling seamless user
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="footer">
        <div className="footer-content">
          <div className="copyright">
            © 2023 Addis Software Test Project - MERN Stack
          </div>
          <div className="contact">
            Developed By: Kirubel Jalleta | kirubelja@gmail.com
          </div>
          {/* <!-- Add the rest of your footer components here --> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
