import React from "react";

//Librarries
import { Parallax } from "react-scroll-parallax";
//

//
import Landing from "../Landing/Landing";
import Manage from "../Manage/Manage";
import Statistics from "../Statistics/Statistics";
import ReadAll from "../Manage/Read/ReadAll";
//
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="menu">
        <Parallax>
          <Landing />
        </Parallax>
        <Parallax>
          <Manage />
        </Parallax>
        <Parallax>
          <Statistics />
        </Parallax>
        <Parallax>
          <Footer />
        </Parallax>
      </div>
    </div>
  );
};

export default Home;
