import React from "react";
// import { Grid } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
// import CharacterCard from '../components/CharacterCard';
import FavoriteCard from "../components/FavoriteCard";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { getFavourites } from "../redux/features/favoriteSlice";

const FavoriteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getFavourites())
  }, [dispatch]);
  const FavoriteList = useSelector((state) => state.favouriteList.favourites);
  //   const {favorites} =FavoriteList
  console.log(FavoriteList);
  return (
    <Box style={{ padding: "0 50px" }}>
      {FavoriteList.length ? (
        <Grid container spacing={1} justifyContent="center">
          {FavoriteList.map((ele) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                {
                  // console.log(ele)
                }
                <FavoriteCard key={"card_key" + ele} data={ele} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1>No Favorites Added...</h1>
      )}
    </Box>
  );
};

export default FavoriteList;
