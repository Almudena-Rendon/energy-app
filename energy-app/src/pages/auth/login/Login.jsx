import React from "react";
import { Box, Grid } from "@mui/material";
import { LadingInfo } from "../../../components/LadingInfo";
import { LoginForm } from "../../../components/LoginForm";

export const Login = ({ token, setToken, userName }) => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} md={6} lg={6}>
          <LadingInfo />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <LoginForm token={token} setToken={setToken} userName={userName} />
        </Grid>
      </Grid>
    </Box>
  );
};
