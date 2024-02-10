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
    <>
      <Grid container sx={{ mt: "100px" }}>
        {cardsData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={3}>
            <Card sx={{ width: 320, mx: "auto" }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="300"
                image={card.imageUrl}
                sx={{
                  transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
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
                  variant="h5"
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

      <Box sx={{ bgcolor: "#2D5883", minHeight: "200px", marginTop: "-116px" }}>
        <Typography
          variant="h3"
          color="white"
          sx={{
            pt: "175px",
            fontFamily: "Montserrat",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontWeight: 600,
            pb: "50px",
          }}
        >
          Unparalled Service across all domains
        </Typography>
      </Box>
    </>
  );
};

export default Services;
