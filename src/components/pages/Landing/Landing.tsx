import React, { useState, useEffect } from "react";
import "./Landing.css";
import axios from "axios";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Landing = () => {
  //
  const [Datas, setDatas] = useState<Song[]>([]);
  const [SearchID, setSearchID] = useState("");
  const [Filter, setFilter] = useState("");
  //
  useEffect(() => {
    //
    const headers = {
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    };
    //
    axios
      // .get(`${process.env.REACT_APP_RESTAPI}/${Filter}/${SearchID}`, {
      .get(`https://songrestapi.onrender.com/songs/${Filter}/${SearchID}`, {
        headers,
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setDatas(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    //
  }, [SearchID]);
  //
  const options = ["searchByTitle", "searchByArtist"];
  const onOptionChangeHandler = (event: any) => {
    console.log("User Selected Value - ", event.target.value);
    setFilter(event.target.value);
  };
  //
  return (
    <div className="main">
      <div className="ihdiv">
        <h1 className="introheader">Songs that help you stay focus</h1>
        <div className="searchDiv">
          <input
            type="search"
            className="searchBar"
            placeholder="Search your favorite song by there title here"
            onChange={(event) => setSearchID(event.target.value)}
          ></input>

          <select
            className="filterBar"
            onChange={(event) => onOptionChangeHandler(event)}
          >
            <option>Please choose search filter option</option>
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>

        <div className="searchResult">
          {Datas.map((item) => (
            // <li key={item._id}>{item.title}</li>
            <div className="songCard" key={item._id}>
              <div className="cover">
                <h3>Title: {item.title}</h3>
              </div>
              <h3>Artist: {item.artist}</h3>
              <h3>Album: {item.album}</h3>
              <h3>Genre: {item.genre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
