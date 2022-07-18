import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
import { setPage } from "../redux/features/userSlice";

export default function PaginationComp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList);
  // console.log("characterState", character);
  const handleChange = (event, value) => {
    dispatch(setPage({ page: value }));
    dispatch(getUsers());
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        style={{
          fontFamily: "Poppins",
          fontWeight: "bolder",
        }}
      >
      </Typography>
      <Pagination
        count={users?.users?.info?.pages}
        page={users.filterChars.page}
        onChange={handleChange}
        color="success"
      />
    </div>
  );
}