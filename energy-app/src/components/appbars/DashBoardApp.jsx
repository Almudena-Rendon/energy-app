import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

function ResponsiveAppBar({ setToken, userName }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#e9eef0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              mr: 1,
              backgroundColor: "#71c55b",
              color: "white",
            }}
          >
            <EnergySavingsLeafIcon />
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 1000,
              fontSize: "30px",
              letterSpacing: ".2rem",
              color: "#71c55b",
              textDecoration: "none",
            }}
          >
            Energy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Avatar
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              mr: 1,
              backgroundColor: "#71c55b",
              color: "white",
            }}
          >
            <EnergySavingsLeafIcon />
          </Avatar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 1000,
              fontSize: "30px",
              letterSpacing: ".2rem",
              color: "#71c55b",
              textDecoration: "none",
            }}
          >
            Energy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            ></Button>
          </Box>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton size="large" onClick={handleOpenUserMenu}>
                <PersonIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={logOutHandler}
                color="#71c55b"
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
