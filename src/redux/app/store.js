import { configureStore } from '@reduxjs/toolkit';
import { favouriteReducer } from '../features/favoriteSlice';
// import { allCharReducer } from '../features/allCharacterSlice';
// import { favoriteReducer } from '../features/favoriteSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
  reducer: {
   userList:userReducer,
   favouriteList:favouriteReducer
  //  favoriteList:favoriteReducer,
  //  allcharactersList:allCharReducer,
  },
});
