
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import authHeader from "../../services/authHeader";

const initialState ={
    favourites:[],
    loading:false,
    error:"",
}

const user = JSON.parse(localStorage.getItem('user'));
export const getFavourites = createAsyncThunk(
  "favourites/getfavourites",
  async (arg, { getState }) => {
    // const state = getState();
    // console.log("state", state);
    const response = await axios.get(
      `https://nodejs-mongodb-rickmorty.herokuapp.com/rick-morty/favourites?uid=${user.id}`,
      // `http://localhost:8080/rick-morty/favourites?uid=${user.id}`,
      {headers: authHeader()}
    );
    return response.data.data;
  }
);


 const favouriteslice =
  createSlice({
    name: 'favourites',
    initialState,
    extraReducers:(builder) => {
      builder.addCase(getFavourites.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getFavourites.fulfilled, (state, action) => {
        state.loading = false;
        state.favourites = action.payload;
        state.error = "";
      });
      builder.addCase(getFavourites.rejected, (state, action) => {
        state.loading = false;
        state.favourites = [];
        if (action.error.message === "Request failed with status code 404") {
          state.error = "Favourites Not Found!";
        } else {
          state.error = action.error.message;
        }
      });
    },
    
  })

  export const favouriteReducer = favouriteslice.reducer
