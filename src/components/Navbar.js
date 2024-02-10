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

const pages = ["Home", "About", "Services", "Contact"];

function Navbar() {
  // Responsive Nav Menu
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Logo
  const logo = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
        }}
      >
        <div style={{ marginTop: "7px" }}>
          <TravelExploreIcon style={{ fontSize: "30px" }} />
        </div>

        <Typography
          variant="h4"
          noWrap
          sx={{
            mr: 2,
            // display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          HW
        </Typography>
      </div>
      <Typography
        variant="p"
        noWrap
        sx={{
          mr: 2,
          // display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          marginTop: "-7px",
          paddingLeft: "5px",
        }}
      >
        Education
      </Typography>
    </div>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#162E40", padding: "5px" }}>
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {logo}
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
                sx={{ my: 2, color: "white", display: "block", mx: 1 }}
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
