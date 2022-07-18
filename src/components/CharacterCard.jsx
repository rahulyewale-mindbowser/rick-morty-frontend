import * as React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Badge from '@mui/material/Badge';
import {useDispatch,useSelector} from "react-redux";
import {getFavourites } from "../redux/features/favoriteSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import authHeader from '../services/authHeader'
export default function CharacterCard({data}) {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favouriteList);
  // console.log(favorite);
  const [isFavourite, setIsFavourite] = React.useState(
    favorite.favourites.some((f) => f.name === data.name) || false
  );
  const [open, setOpen] = React.useState(false);
  // console.log(data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    // dispatch(removeFavorite(data.id));
    
    const configuration = {
      method: "delete",
      url: `https://nodejs-mongodb-rickmorty.herokuapp.com/rick-morty/favourites?name=${data.name}`,
      // url: `http://localhost:8080/rick-morty/favourites?name=${data.name}`,
      headers: authHeader(),
    };
        // make the API call
  axios(configuration)
  .then((result) => {
    // setLogin(true);
    console.log(result);
    // navigate('../favourites')
  })
  .catch((error) => {
    // error = new Error();
    console.log(error);
    // setRes(error.response.data.message);
    // alert(res)
  });
  setIsFavourite(false);
    setOpen(false);
    dispatch(getFavourites());
  };

  const handleNo = () => {
    setOpen(false);
  };

  const handleSelect = () => {
    setIsFavourite(true);
    // dispatch(addFavorite(data));
   const name = data.name;
   const type = data.type;
   const gender = data.gender;
   const species=data.species;
    const status= data.status;
    const image=data.image;
    const uid = user.id
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-rickmorty.herokuapp.com/rick-morty/favourites",
      // url: "http://localhost:8080/rick-morty/favourites",
      data: {
        name,
        type,
        gender,
        species,
        status,
        image,
        uid, 
      },
      headers: authHeader(),
    };
        // make the API call
  axios(configuration)
  .then((result) => {
    // setLogin(true);
    console.log(result);
    dispatch(getFavourites());
  })
  .catch((error) => {
    // error = new Error();
    console.log(error);
    // setRes(error.response.data.message);
    // alert(res)
  });
  };
  // console.log(props.data.name);
  return (
    <Card sx={{ maxWidth: 300 ,height:400 }} style={{boxShadow: " 0 20px 25px rgba(0,0,0,0.55)",position:"relative"}} >

    
       {user?isFavourite ? (
              <IconButton style={{ float: "right" }} onClick={handleClickOpen}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }} onClick={handleSelect}>
                <FavoriteBorderIcon />
              </IconButton>
            ):""}
      <Avatar 
  alt={data.name +"image"}
  src={data.image}
  sx={{ width: 200, height: 200 ,margin:'auto' }}
/>
{data.status==="Alive"?
      <Badge style={{position:"absolute",
      top: "20px",
      left: "30px"
     }} badgeContent={`${data.status}`} color="success" variant="standard">   
      </Badge>
      :data.status==="Dead"?
      <Badge style={{position:"absolute",
      top: "20px",
      left: "30px"
     }} badgeContent={`${data.status}`} color="error" variant="standard">   
      </Badge>
      :<Badge style={{position:"absolute",
      top: "20px",
      left: "35px"
     }} badgeContent={`${data.status}`} color="secondary" variant="standard">   
      </Badge>}

      <CardContent align='left'>
        <Typography variant='h6'align="center" ><b>{data.name}</b> </Typography>
        <Typography variant='h6'><b>Gender:</b>{data.gender}</Typography>
        <Typography variant='h6'><b>Type:</b>{data.type}</Typography>
        <Typography variant='h6'><b>Species:</b>{data.species}</Typography>
      </CardContent>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(true);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You really want to remove Character from favourite?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
