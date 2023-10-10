import React from "react";
import "./Statistics.css";

import { useEffect, useState } from "react";
import axios from "axios";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Statistics = () => {
  //
  const [Genre1, setGenre1] = useState("");
  const [Genre2, setGenre2] = useState("");
  const [Genre3, setGenre3] = useState("");
  //
  //
  async function genre() {
    try {
      const response1 = await axios.get(
        `${process.env.REACT_APP_RESTAPI_GET_GENRE1}`
      );
      const response2 = await axios.get(
        `${process.env.REACT_APP_RESTAPI_GET_GENRE2}`
      );
      const response3 = await axios.get(
        `${process.env.REACT_APP_RESTAPI_GET_GENRE3}`
      );
      setGenre1(response1.data.data.length);
      setGenre2(response2.data.data.length);
      setGenre3(response3.data.data.length);
      //setLoading(false);
    } catch (error) {
      // setError("Error fetching data");
      console.log(error);
    }
  }
  useEffect(() => {
    genre();
  }, []);
  //
  return (
    <div className="StatMain">
      <h1>Statistics</h1>
      <div className="statContainer">
        <div className="statCard">
          {Genre1}
          <h2>Pop Songs</h2>
        </div>
        <div className="statCard">
          {Genre2}
          <h2>Traditional</h2>
        </div>
        <div className="statCard">
          {Genre3} <h3>Other</h3>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
