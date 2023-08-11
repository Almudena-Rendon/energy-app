import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

const pages = ["Inicio", "Productos", "Sobre Nosotros", "Contacta"];

function LandingBar({ token }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
        backgroundColor: "transparent",
        boxShadow: "none",
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
            {token ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
          <Avatar
            sx={{
              backgroundColor: "#71c55b",
              display: { xs: "flex", md: "none" },
              mr: 1,
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
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 1000,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#71c55b",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            Energy
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: { lg: "15%", md: "8%" },
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button>
                <Typography
                  sx={{
                    mr: 2,
                    my: 2,
                    display: { md: "flex" },
                    fontFamily: "sans-serif",
                    fontWeight: 200,
                    fontSize: { lg: "15px !important", md: "12px" },
                    letterSpacing: ".2rem",
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#71c55b",
                    },
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button
                variant="contained"
                sx={{
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
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LandingBar;
