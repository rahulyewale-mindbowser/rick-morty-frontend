import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function Variants() {
  return (
    <div style={{ margin: "2rem" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((index) => (
          <Grid
            item
            key={index}
            xs={12}
            md={6}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Stack spacing={1}>
              {/* <Skeleton variant="circular" width={40} height={40} /> */}
              <Skeleton
                variant="rectangular"
                width={210}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={150} />
              <Skeleton variant="text" width={150} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}