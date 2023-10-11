import React, { useEffect } from "react";
import "./Update.css";
import { useState } from "react";

//
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
//
import {
  getSongListAction,
  updateSongAction,
} from "../../../../redux/features/songSlice";
//

interface SongUpdate {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Update = () => {
  //
  const { list, listStatus } = useSelector((state: RootState) => state.song);
  //or
  // // const { list, listStatus } = useSelector((state: RootState) => ({
  // //   ...state.song,
  // }));
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getSongListAction());
  }, []);
  //

  //
  const [ID, setID] = useState("");
  const [Title, setTitle] = useState("");
  const [Artist, setArtist] = useState("");
  const [Album, setAlbum] = useState("");
  const [Genre, setGenre] = useState("");
  //
  const [Modal, setModal] = useState(false);
  //
  const newSong: SongUpdate = {
    _id: ID,
    title: Title,
    artist: Artist,
    album: Album,
    genre: Genre,
  };
  //

  //
  const handleUpdate = (
    props_id: string,
    props_album: string,
    props_artist: string,
    props_genre: string,
    props_title: string
  ) => {
    setID(props_id);
    setTitle(props_title);
    setArtist(props_artist);
    setAlbum(props_album);
    setGenre(props_genre);
  };
  //
  const handleChange = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateSongAction(newSong));
  };

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
  return (
    <div className="RAMain">
      <div className="grid">
        {list.map((item) => (
          // <li key={item._id}>{item.title}</li>
          <div className="songCard" key={item._id}>
            <div className="cover">
              <label>Title: {item.title}</label>
              {/* <input value={item.title} onC></input> */}
            </div>
            {/*  */}
            <label>Artist: {item.artist}</label>
            {/*  */}
            <label>Album: {item.album}</label>
            {/*  */}
            <label>Genre: {item.genre}</label>
            {/*  */}
            <button
              onClick={(event) => {
                handleUpdate(
                  item._id,
                  item.album,
                  item.artist,
                  item.genre,
                  item.title
                );
                setModal(true);
              }}
            >
              Upadate
            </button>
            {Modal ? (
              <div className="modal-overlay">
                <div className="modal">
                  <p>Modal content</p>
                  {/*  */}
                  <div className="modalSection">
                    <label>Title</label>
                    <input
                      type="text"
                      value={Title}
                      onChange={(event) => setTitle(event.target.value)}
                    ></input>
                  </div>
                  {/*  */}
                  <div className="modalSection">
                    <label>Artist</label>
                    <input
                      type="text"
                      value={Artist}
                      onChange={(event) => setArtist(event.target.value)}
                    ></input>
                  </div>
                  {/*  */}
                  <div className="modalSection">
                    <label>Album</label>
                    <input
                      type="text"
                      value={Album}
                      onChange={(event) => setAlbum(event.target.value)}
                    ></input>
                  </div>
                  {/*  */}
                  <div className="modalSection">
                    <label>Genre</label>
                    <select
                      className="filterBar"
                      value={Genre}
                      onChange={(event) => onOptionChangeHandler(event)}
                      required
                    >
                      <option>{Genre}</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>

                  {/*  */}
                  <button onClick={(event) => handleChange(event)}>
                    Submit
                  </button>
                  {/*  */}
                  <button
                    onClick={(event) => {
                      setModal(false);
                      window.location.reload();
                    }}
                  >
                    Close
                  </button>
                  {/*  */}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
