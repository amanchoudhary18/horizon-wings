import React, { useState, useEffect } from "react";
import { Box, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import heroBg1 from "../assets/herobg-1.jpg";
import "../styling/Hero.css";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Box
        className={`bg-image ${animate ? "animate" : ""}`}
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          height: "600px",
          backgroundImage: `url(${heroBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "7rem",
            paddingTop: "5rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mr: 2,
              color: "white",
              textDecoration: "none",
            }}
            className={`text-animation-right ${animate ? "animate" : ""}`}
          >
            Take a fly in your career with
          </Typography>
          <Typography
            className={`text-animation-left ${animate ? "animate" : ""}`}
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "80px",
              lineHeight: 1.2,
            }}
          >
            Horizon Wings
          </Typography>
          <Typography
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "80px",
              lineHeight: 1.2,
            }}
            className={`text-animation-left ${animate ? "animate" : ""}`}
          >
            Education
          </Typography>

          <Typography
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "400",
              fontSize: "70px",
              lineHeight: 1.2,
            }}
            className={`text-animation-left ${animate ? "animate" : ""}`}
          >
            —---
          </Typography>

          <Button
            className={`button-animation ${animate ? "animate" : ""}`}
            variant="outlined"
            sx={{
              mt: 2,
              border: "1px solid white",
              color: "white",
              padding: "10px 7px",
              width: "200px",
              textAlign: "center",
              textTransform: "capitalize",

              "&:hover": {
                backgroundColor: "white",
                color: "#162E40",
                border: "1px solid white",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: 1.2,
              }}
            >
              Register Now
            </Typography>
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "flex", xs: "none" },
          height: "400px",
          backgroundImage: `url(${heroBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              color: "white",
              textDecoration: "none",
            }}
          >
            Take a fly in your career with
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Horizon Wings
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Education
          </Typography>
        </div>
      </Box>

      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          height: "300px",
          backgroundImage: `url(${heroBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              color: "white",
              textDecoration: "none",
            }}
          >
            Take a fly in your career with
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Horizon Wings
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              color: "white",
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Education
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Hero;
