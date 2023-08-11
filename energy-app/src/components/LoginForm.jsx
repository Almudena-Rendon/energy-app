import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Almudena Rendón
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const LoginForm = ({ token, setToken }) => {
  const [userName, setUserName] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setPassword("");
    setUserName("");

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Error de autenticación",
          text: "Las credenciales ingresadas no son correctas.",
        });
      });
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        width: "400px",
        height: "500px",
        padding: "25px",
        marginTop: "120px",
        paddingTop: "30px",
        paddingBottom: "60px",
        flexGrow: 1,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1a2022",
        "@media (max-width:1000px)": {
          width: "350px",
          height: "520px",
          marginTop: "20px",
        },
        "@media (max-width:600px)": {
          marginTop: "20px",
        },
        "@media (max-width:550px)": {
          width: "380px",
          height: "510px",
          marginTop: "1px",
        },
        "@media (max-width:420px)": {
          width: "355px",
          height: "520px",
          marginTop: "1px",
        },
        "@media (max-width:390px)": {
          width: "320px",
          height: "520px",
          marginTop: "1px",
        },
      }}
    >
      <Avatar
        sx={{
          width: "50px",
          height: "50px",
          mr: 1,
          margin: "10px",
          backgroundColor: "#71c55b",
        }}
      >
        <EnergySavingsLeafIcon />
      </Avatar>
      <Typography component="h1" variant="h5" color="#fff">
        Accede a tu cuenta
      </Typography>
      <Box noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          variant="filled"
          label="Nombre de usuario"
          name="email"
          autoComplete="email"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          InputProps={{
            style: {
              color: "white",
            },
          }}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          InputProps={{
            style: {
              color: "white",
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={loginHandler}
          sx={{
            mt: 3,
            mb: 2,
            fontWeight: "bold",
            backgroundColor: "#379cf4",
            borderRadius: "5px",
            boxShadow: "none",
            border: "none",
            padding: "13px",
          }}
        >
          Iniciar sesión
        </Button>
        <Copyright sx={{ mt: 5, color: "grey" }} />
      </Box>
    </Box>
  );
};
