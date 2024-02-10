import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import us from "../assets/us.svg";
import uk from "../assets/uk.png";
import ireland from "../assets/ireland.svg";
import dubai from "../assets/dubai.png";
import aus from "../assets/aus.svg";
import canada from "../assets/canada.svg";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { id: 1, name: "USA", flagUrl: uk },
    { id: 2, name: "United Kingdom", flagUrl: us },
    { id: 3, name: "Canada", flagUrl: canada },
    { id: 4, name: "Australia", flagUrl: aus },
    { id: 5, name: "Ireland", flagUrl: ireland },
    { id: 6, name: "Dubai", flagUrl: dubai },
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Grid container spacing={2} sx={{ pt: "175px", px: "50px", pb: "50px" }}>
      <Grid item xs={7}>
        <Typography color="text.secondary">We help our clients in</Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            pb: "50px",
          }}
        >
          Multiple Locations
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Montserrat",
            pb: "50px",
            width: "80%",
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
      <Grid item xs={5} sx={{ marginTop: "80px" }}>
        <Grid container spacing={2}>
          {countries.map((country) => (
            <Grid item key={country.id} xs={4}>
              <div
                onClick={() => handleCountryClick(country)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={country.flagUrl}
                  alt={country.name}
                  style={{
                    width: "150px",
                    height: "75px",
                    marginBottom: "10px",
                  }}
                />
                {/* <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    mb: 3,
                  }}
                >
                  {country.name}
                </Typography> */}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Countries;
