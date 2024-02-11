import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: "#0C2136",
          color: "white",
          px: { xs: "16px", lg: "80px" },
        }}
      >
        <Grid container columnSpacing="100px" sx={{ py: "50px" }}>
          {/* Left side - Contact Us */}
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: "end" }}>
            <div>
              <Typography
                variant="h5"
                sx={{ pb: "25px", fontFamily: "Poppins" }}
              >
                Contact Us
              </Typography>
              <Typography variant="body1">
                <EmailIcon /> hitesh.horizonwings@gmail.com
              </Typography>
              <Typography variant="body1">
                <PhoneIcon /> +91 9953102105
              </Typography>
              <Typography variant="body1">
                <PhoneIcon /> +91 8920338680
              </Typography>
              <Typography variant="body1">
                <PhoneIcon /> +91 9695033798
              </Typography>
            </div>
          </Grid>

          {/* Right side - Social Media Links */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div>
              <IconButton
                color="inherit"
                component={Link}
                href="your-linkedin-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="your-instagram-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="your-facebook-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ color: "white", py: 2, fontFamily: "Poppins" }}
        >
          Horizonwings Overseas Education &copy; {new Date().getFullYear()} All
          Rights Reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
