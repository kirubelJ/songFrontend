import React from "react";
import "./Manage.css";

//
import { Outlet, Link } from "react-router-dom";
//

//paralex
import { useParallax } from "react-scroll-parallax";
//

//
//
const Manage = () => {
  //
  const parallaxL1 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [50, -70],
  });
  const parallaxL2 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [50, -70],
  });
  const parallaxR1 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [-70, 50],
  });
  const parallaxR2 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateX: [-70, 50],
  });
  //

  //
  const styles = {
    card: { background: "blue", color: "white", borderRadius: 20 },
  };
  //

  return (
    <div className="Manage_main">
      <h1>Manage</h1>
      <div className="grid-container">
        <Link to="/readall">
          <div className="grid-item" ref={parallaxL1.ref}>
            <div className="cardM">List of songs</div>
          </div>
        </Link>

        <Link to="/create">
          <div className="grid-item" ref={parallaxR1.ref}>
            Create
          </div>
        </Link>

        <Link to="/update">
          <div className="grid-item" ref={parallaxL2.ref}>
            Update
          </div>
        </Link>

        <Link to="/delete">
          <div className="grid-item" ref={parallaxR2.ref}>
            Delete
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Manage;
