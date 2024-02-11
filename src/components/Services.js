import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import accommodation from "../assets/accomodation.jpg";
import visa from "../assets/visa.jpg";
import ielts from "../assets/IELTS.jpg";
import loan from "../assets/loan.jpg";

const Services = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: ielts,
      title: "IELTS",
      description: "Personalized Assistance of our in-house experts",
    },
    {
      id: 2,
      imageUrl: loan,
      title: "Education Loan",
      description: "Finance your Study Abroad Dreams",
    },
    {
      id: 3,
      imageUrl: accommodation,
      title: "Accommodation",
      description: "Accommodation assistance near Top Universities",
    },
    {
      id: 4,
      imageUrl: visa,
      title: "Visa",
      description: "Best visa assistance from our team",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#2D5883", py: "50px" }} id="services">
      <Box sx={{ mx: { xs: "30px", sm: "50px", md: "100px", lg: "50px" } }}>
        <Typography
          color="white"
          sx={{
            pt: { xs: "15px", md: "50px" },
            fontFamily: "Montserrat",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontWeight: 600,
            pb: { xs: "15px", md: "50px" },
            fontSize: { xs: "20px", sm: "28px", md: "35px", lg: "50px" },
            textAlign: "center",
          }}
        >
          Unparalled Service across all domains
        </Typography>

        <Grid container sx={{ mt: "20px" }}>
          {cardsData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={6} lg={3}>
              <Card
                sx={{
                  width: {
                    xs: "260px",
                    sm: "300px",
                    lg: "250px",
                    xl: "275px",
                  },
                  mx: "auto",
                  my: 2,
                }}
              >
                <CardMedia
                  component="img"
                  alt={card.title}
                  image={card.imageUrl}
                  sx={{
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    height: {
                      xs: "225px",
                      lg: "250px",
                      xl: "300px",
                    },
                  }}
                />
                <CardContent
                  style={{
                    backgroundColor: "white",
                    height: "75px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant={{ md: "h5", xs: "h6" }}
                    component="div"
                    sx={{ color: "#162E40", fontWeight: "500" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
