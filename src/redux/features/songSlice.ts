import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { env } from "process";

//
import { useDispatch } from "react-redux";
//
import axios from "axios";
import { stat } from "fs/promises";

enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
} //

export interface SongSchema {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
} //

interface songState {
  list: SongSchema[];
  listStatus: ApiStatus;
  //
  addSongStatus: ApiStatus;
  updateSongStatus: ApiStatus;
  deleteSongStatus: ApiStatus;
} //

// for debugging
// export const defaultList: SongSchema[] = [
//   {
//     _id: "1",
//     title: "b",
//     artist: "c",
//     album: "d",
//     genre: "e",
//   },
//   {
//     _id: "2",
//     title: "b",
//     artist: "c",
//     album: "d",
//     genre: "e",
//   },
// ];
//

const initialState: songState = {
  //   list: defaultList, // for debuging
  list: [],
  listStatus: ApiStatus.ideal,
  //
  addSongStatus: ApiStatus.ideal,
  updateSongStatus: ApiStatus.ideal,
  deleteSongStatus: ApiStatus.ideal,
}; //

//
// Assuming you have the response object

// export const getSongListAction = createAsyncThunk(
//   "song/getSongListAction",
//   async () => {
//     //api to get list
//     const response = await getSongList();
//     console.log("redux:", response.data);

//     return response.data;
//   }
// );

export const getSongListAction = createAsyncThunk("song/getAll", async () => {
  //api to get list
  // const headers = {
  //   Authorization: "Bearer my-token",
  //   "My-Custom-Header": "foobar",
  // };
  const response = await axios.get(
    "https://songbackend-2l9j.onrender.com/songs/all"
  );
  const responseArray = response.data.data;
  console.log("woev");
  console.log(responseArray);
  return responseArray;
  //setLoading(false);
});

//
interface SongAddSchema {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export const addSongAction = createAsyncThunk(
  "song/add",
  async (props: SongAddSchema) => {
    console.log(props);
    axios
      .post(`${process.env.REACT_APP_RESTAPI_ADD}`, props)
      .then(function (response) {
        //console.log(response);
        // window.location.reload();
        alert("song add successfuly");
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);
///
interface songUpdateSchema {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
export const updateSongAction = createAsyncThunk(
  "song/update",
  async (props: songUpdateSchema) => {
    //console.log(props);
    axios
      .put(`https://songrestapi.onrender.com/songs/update`, {
        title: props.title,
        artist: props.artist,
        album: props.album,
        genre: props.genre,
      })
      .then(function (response) {
        console.log(response);
        alert("song Updated successfuly");
        return response;
        //to clear
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }
);
///
interface songIDSchema {
  _id: string;
}
export const deteteSongAction = createAsyncThunk(
  "song/delete",
  async (props: songIDSchema) => {
    //console.log(props);
    const headers = {
      Authorization: "Bearer my-token",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .delete(`${process.env.REACT_APP_RESTAPI_DELETE}/${props._id}`, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        alert("Song deleted");
        window.location.reload();
        return response;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          alert(error);
        } else if (error.request) {
          console.log(error.request);
          alert(error);
        } else {
          console.log("Error", error.message);
          alert(error);
        }
        console.log(error.config);
      });
  }
);

///

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSongListAction.fulfilled, (state, action) => {
      state.listStatus = ApiStatus.ideal;
      state.list = action.payload;
    });
    //
    builder.addCase(addSongAction.fulfilled, (state) => {
      state.addSongStatus = ApiStatus.ideal;
    });
    //
    builder.addCase(updateSongAction.fulfilled, (state) => {
      state.updateSongStatus = ApiStatus.ideal;
    });
    //
    builder.addCase(deteteSongAction.fulfilled, (state) => {
      state.deleteSongStatus = ApiStatus.ideal;
    });
    //
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default songSlice.reducer;
