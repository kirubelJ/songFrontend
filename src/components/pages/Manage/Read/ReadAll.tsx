import React, { useEffect } from "react";
import "./ReadAll.css";
import { useState } from "react";

//redux
import type { RootState } from "../../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store"; // used to solve error on
// redux Actions
import { getSongListAction } from "../../../../redux/features/songSlice";
//

const ReadAll = () => {
  //const { list, listStatus } = useSelector((state: RootState) => state.song);
  //or
  const { list, listStatus } = useSelector((state: RootState) => ({
    ...state.song,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getSongListAction());
  }, []);

  return (
    <div className="RAMain">
      <div className="grid">
        {list.map((item) => (
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
  );
};

export default ReadAll;
