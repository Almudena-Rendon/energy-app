import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const LadingInfo = () => {
  return (
    <Box
      paddingLeft="50px"
      paddingTop="100px"
      className="info"
      sx={{
        "@media (max-width:900px)": {
          paddingTop: "50px",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          fontSize: "47px",
          fontWeight: "600",
          width: "60%",
          "@media (max-width:900px)": {
            fontSize: "40px",
            width: "90%",
          },
          "@media (max-width:600px)": {
            fontSize: "40px",
            width: "90%",
          },
          "@media (max-width:550px)": {
            fontSize: "30px",
            width: "90%",
          },
          "@media (max-width:400px)": {
            fontSize: "27px",
            width: "90%",
          },
        }}
      >
        Digital Solutions &
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#379cf4",
          fontSize: "47px",
          fontWeight: "600",
          letterSpacing: "1.3px",
          width: "60%",
          "@media (max-width:900px)": {
            fontSize: "40px",
            width: "90%",
          },
          "@media (max-width:600px)": {
            fontSize: "40px",
            width: "90%",
          },
          "@media (max-width:550px)": {
            fontSize: "30px",
            width: "90%",
          },

          "@media (max-width:400px)": {
            fontSize: "27px",
            width: "90%",
          },
        }}
      >
        Software Monitoring
      </Typography>
      <Typography
        sx={{
          color: " #dedede",
          width: "80%",
          margin: "20px 0 30px",
          lineHeight: "1.8",
          fontSize: "18px",
          "@media (max-width:900px)": {
            fontSize: "15px",
          },
          "@media (max-width:600px)": {
            display: "none",
          },
        }}
      >
        Diseñamos y fabricamos equipos de medida de energía eléctrica y
        comunicaciones con diseño no invasivo. Estamos enfocados en dar
        soluciones inteligentes de medida y comunicaciones para el sector
        eléctrico.
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontWeight: "bold",
          backgroundColor: "#379cf4",
          borderRadius: "5px",
          boxShadow: "none",
          border: "none",
          padding: "13px",
          "@media (max-width:900px)": {
            display: "none",
          },
          "@media (max-width:600px)": {
            display: "none",
          },
        }}
      >
        CONÓCENOS
      </Button>
    </Box>
  );
};
