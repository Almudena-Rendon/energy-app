import { Login } from "./pages/auth/login/Login";
import "./index.css";
import { useState } from "react";
import { Dasboard } from "./pages/dashboard/Dasboard";
import LandingBar from "./components/appbars/LadingBar";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/appbars/DashBoardApp";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const [userName, setUserName] = useState("mor_2314");

  return (
    <Box className={token ? "backgroundToken" : "backgroundLogin"}>
      {token ? (
        <ResponsiveAppBar
          userName={userName}
          token={token}
          setToken={setToken}
        />
      ) : (
        <LandingBar token={token} setToken={setToken} />
      )}
      {token ? (
        <Dasboard token={token} setToken={setToken} />
      ) : (
        <Login token={token} setToken={setToken} userName={userName} />
      )}
    </Box>
  );
}

export default App;
