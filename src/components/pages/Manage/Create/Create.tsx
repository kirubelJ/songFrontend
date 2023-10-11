import React from "react";
import "./Create.css";
//
import { useState, useEffect } from "react";
//
import type { RootState } from "../../../../redux/store";
//
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from './counterSlice'
import { AppDispatch } from "../../../../redux/store"; // used to solve error on
//
import { addSongAction } from "../../../../redux/features/songSlice";
//
interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Create = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  const [Title, setTitle] = useState("");
  const [Artist, setArtist] = useState("");
  const [Album, setAlbum] = useState("");
  const [Genre, setGenre] = useState("");
  //
  const newSong: Song = {
    title: Title,
    artist: Artist,
    album: Album,
    genre: Genre,
  };
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    // 
    dispatch(addSongAction(newSong));
  };
  //
  //
  const options = [
    "EDM",
    "Rock",
    "Jazz",
    "Blues",
    "Country",
    "Pop",
    "Traditional",
    "Other",
  ];
  const onOptionChangeHandler = (event: any) => {
    console.log("User Selected Value - ", event.target.value);
    setGenre(event.target.value);
  };
  //
  //
  return (
    <div className="CreateMain">
      <h1 style={{ color: "chocolate" }}>Add your favorite Songs</h1>
      <form className="form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Artist"
          name="artist"
          onChange={(e) => setArtist(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Album"
          name="album"
          onChange={(e) => setAlbum(e.target.value)}
          required
          ></input>
        <select
          className="filterBar"
          onChange={(event) => onOptionChangeHandler(event)}
          required
        >
          <option>Please choose Genre</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        {/*  */}
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Create;
