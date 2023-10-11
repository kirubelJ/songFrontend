import React, { useEffect } from "react";
import "./Delete.css";
import { useState } from "react";

//
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
//
import {
  getSongListAction,
  deteteSongAction,
} from "../../../../redux/features/songSlice";
//

interface SongID {
  _id: string;
}

const Delete = () => {
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
  const [deleteID, setdeleteID] = useState("");

  //console.log("Data before render:", Datas); // Add this line for debugging
  const ID: SongID = {
    _id: deleteID,
  };
  const Remove = () => {
    // console.log(Props);
    //alert(ID._id);
    dispatch(deteteSongAction(ID));
  };

  return (
    <div className="DelMain">
      <div className="Delgrid">
        {list.map((item) => (
          // <li key={item._id}>{item.title}</li>
          <div className="DelsongCard" key={item._id}>
            <div className="Delcover">
              <h3>Title {item.title}</h3>
            </div>
            <h3>Artist: {item.artist}</h3>
            <h3>Album: {item.album}</h3>
            <h3>Genre: {item.genre}</h3>
            {/*  */}
            <input
              type="text"
              style={{
                visibility: "hidden",
              }}
              className="lostLName"
              value={item._id}
            ></input>
            {/*  */}
            <button
              onClick={(event) => {
                setdeleteID(item._id);
                Remove();
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete;
