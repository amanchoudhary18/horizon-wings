// Navbar.js
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import logo from "../assets/logo.jpg";
import "../styling/Navbar.css";
import { Link as ScrollLink } from "react-scroll";

const pages = ["Home", "Services", "About", "Register"];

function Navbar() {
  // Responsive Nav Menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#F0F8FF",
        padding: "5px",
        "@media (max-width: 600px)": {
          position: "static",
        },
      }}
    >
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="#home">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{ cursor: "pointer" }}
            />
          </a>
          <Box
            sx={{
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
              sx={{ color: "#162E40" }}
            >
              <MenuIcon />
            </IconButton>
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
                display: { xs: "block", md: "none", color: "#162E40" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={`#${page.toLowerCase()}`}
                    textAlign="center"
                    sx={{
                      textDecoration: "none",
                      fontSize: {
                        xs: "12px",
                        sm: "20px",
                        md: "25px",
                        lg: "32px",
                      },
                      color: "#0C2136",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: "100px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#162E40", display: "block", mx: 1 }}
                component="a"
                href={`#${page.toLowerCase()}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </div>
      </Container>
    </AppBar>
  );
}
export default Navbar;
