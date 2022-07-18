import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API from '../../services/index'
import axios from 'axios'

const initialState ={
    users:[],
    loading:false,
    error:"",
    filterChars: {
      page:1,
      name:"",
      gender:"",
      status:"",
      species:"",
      type:"",
    },
}


export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (arg, { getState }) => {
    const state = getState();
    console.log("state", state);
    const filterChars = state.userList.filterChars;
    // console.log(filterChars);
    const response = await axios.get(
      API,
      { params: filterChars}
    );
    return response.data;
  }
);


 const userSlice =
  createSlice({
    name: 'users',
    initialState,
    reducers:{
      setFilter: (state, action) => {
        state.filterChars = {
          ...state.filterChars,
          ...action.payload,
        };
      },
      setPage: (state, action) => {
        state.filterChars = {
          ...state.filterChars,
          ...action.payload,
        };
      },
    }
    ,
    extraReducers:(builder) => {
      builder.addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      });
      builder.addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        if (action.error.message === "Request failed with status code 404") {
          state.error = "Character Not Found!";
        } else {
          state.error = action.error.message;
        }
      });
    },
    
  })
 export const {setFilter,setPage} = userSlice.actions;
  export const userReducer = userSlice.reducer
