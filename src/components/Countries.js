import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import us from "../assets/us.svg";
import uk from "../assets/uk.png";
import ireland from "../assets/ireland.svg";
import dubai from "../assets/dubai.png";
import aus from "../assets/aus.svg";
import canada from "../assets/canada.svg";
import "../styling/countries.css";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { id: 1, name: "USA", flagUrl: us },
    { id: 2, name: "UK", flagUrl: uk },
    { id: 3, name: "Canada", flagUrl: canada },
    { id: 4, name: "Australia", flagUrl: aus },
    { id: 5, name: "Ireland", flagUrl: ireland },
    { id: 6, name: "Dubai", flagUrl: dubai },
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        pt: { xs: "50px", md: "175px" },
        px: { xs: "16px", md: "50px" },
        pb: { xs: "16px", md: "50px" },
      }}
      id="about"
    >
      {/* Left Half - Static Content */}
      <Grid item xs={12} lg={6} xl={7}>
        <Typography color="text.secondary">We help our clients in</Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            pb: "50px",
            fontSize: { xs: "25px", md: "40px", lg: "50px" },
          }}
        >
          Multiple Locations
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            pb: "50px",
            width: { xs: "100%", lg: "80%" },
          }}
        >
          Our team of experienced professionals recognized the increasing demand
          for quality education abroad and identified the need for personalized
          guidance and support throughout the application process. With a
          passion for helping students achieve their dreams, Embarked on this
          entrepreneurial journey to establish a reputable brand in the overseas
          education sector.
        </Typography>
      </Grid>

      {/* Right Half - Dynamic Content */}
      <Grid
        item
        xs={12}
        lg={6}
        xl={5}
        sx={{
          marginTop: { md: "20px", lg: "80px" },
          mx: { md: "100px", lg: "0px" },
        }}
      >
        <Grid container spacing={3}>
          {countries.map((country) => (
            <Grid item key={country.id} xs={6} md={4}>
              <div
                className="country-container"
                onClick={() => handleCountryClick(country)}
                style={{ textAlign: "center" }}
              >
                <img
                  src={country.flagUrl}
                  alt={country.name}
                  className={`country-flag ${
                    selectedCountry === country ? "selected" : ""
                  }`}
                />
                <Typography variant="body2" className="country-name">
                  {country.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Countries;
