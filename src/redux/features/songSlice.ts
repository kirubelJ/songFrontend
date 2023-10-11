import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  console.log(process.env.PUBLIC_URL);
  //const response = await axios.get(`${process.env.REACT_APP_API_URI}`);
  const response = await axios.get(
    `https://songrestapi.onrender.com/songs/all`
  );
  const responseArray = response.data.data;
  console.log("woev");
  console.log(responseArray);
  return responseArray;
  //setLoading(false);

  // const headers = {
  //   Accept: "*/*"
  //   ""Content-type": "application/json"
  // };

  // axios
  //   .get("https://songrestapi.onrender.com/songs/all", { headers })
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     console.log(response.data.data);
  //     return response.data.data;
  //   })
  //   .catch(function (error) {
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //       // http.ClientRequest in node.js
  //       console.log(error.request);
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.log("Error", error.message);
  //     }
  //     console.log(error.config);
  //   });
  //
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
      // .post(`${process.env.REACT_APP_RESTAPI_ADD}`, props)
      .post(`https://songrestapi.onrender.com/songs/add`, props)
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
      // .put(`https://songrestapi.onrender.com/songs/update`, {
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
      // .delete(`${process.env.REACT_APP_RESTAPI_DELETE}/${props._id}`, {
      .delete(`https://songrestapi.onrender.com/songs/delete/${props._id}`, {
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
