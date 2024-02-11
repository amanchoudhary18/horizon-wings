import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import formbg from "../assets/world-pattern.png";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    emailId: "",
    gender: "",
    countryCode: "91",
    previousEducation: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleRegister = async () => {
    console.log("Registration Data:", formData);

    if (!formData.name || !formData.emailId || !formData.mobile) {
      alert("Please enter the mandatory fields");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "https://horizonwings-production.up.railway.app/api/v1/registerStudent",
        formData,
        config
      );

      alert("Response submitted successfully !");
      setFormData({
        name: "",
        mobile: "",
        emailId: "",
        gender: "",
        countryCode: "91",
        previousEducation: "",
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${formbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        paddingBottom: "50px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ pt: "150px", px: { sm: "16px", lg: "70px" } }}
        id="register"
      >
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "5px",
              color: "white", // Set default text color to white
            }}
          >
            <Typography
              sx={{
                marginBottom: "20px",
                fontFamily: "Poppins",
                lineHeight: 0.8,
                fontSize: { xs: "30px", md: "50px", lg: "3.0rem" },
              }}
            >
              Register Now
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                fontFamily: "Poppins",
                lineHeight: 0.7,
                fontSize: { xs: "16px", md: "25px", lg: "1.0rem" },
              }}
            >
              Make your dreams come true today!
            </Typography>

            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange("name")}
              InputProps={{ sx: { color: "white" } }}
              sx={{ backgroundColor: "#476C92", borderRadius: "5px" }}
              required
            />
            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Contact No. *"
              value={formData.mobile}
              onChange={handleChange("mobile")}
              InputProps={{ sx: { color: "white" } }}
              sx={{ backgroundColor: "#476C92", borderRadius: "5px" }}
              required
            />
            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Email ID *"
              value={formData.emailId}
              onChange={handleChange("emailId")}
              InputProps={{ sx: { color: "white" } }}
              sx={{
                backgroundColor: "#476C92",
                borderRadius: "5px",
              }}
              required
            />
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="gender" sx={{ color: "white" }}>
                Gender
              </InputLabel>
              <Select
                value={formData.gender}
                onChange={handleChange("gender")}
                label=""
                sx={{ backgroundColor: "#476C92" }}
                inputProps={{ sx: { color: "white" } }}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="OTHERS">Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="education" sx={{ color: "white" }}>
                Previous Education
              </InputLabel>
              <Select
                value={formData.previousEducation}
                onChange={handleChange("previousEducation")}
                label=""
                sx={{ backgroundColor: "#476C92" }}
                inputProps={{ sx: { color: "white" } }}
              >
                <MenuItem value="HIGH_SCHOOL">High School</MenuItem>
                <MenuItem value="SECONDARY_EDUCATION">
                  Secondary Education
                </MenuItem>
                <MenuItem value="UNDER_GRADUATE">Under Graduate</MenuItem>
                <MenuItem value="POST_GRADUATE">Post Graduate</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
              sx={{ marginTop: "20px", backgroundColor: "#FF4500" }}
            >
              Register
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 2,
            }}
          >
            <Box sx={{ mb: 2, color: "white" }}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: "20px",
                  fontFamily: "Poppins",
                  lineHeight: 0.8,
                }}
              >
                Customer Ratings
              </Typography>

              <Typography
                variant="h2"
                sx={{ fontWeight: 500, fontFamily: "Poppins", pt: "16px" }}
              >
                4.5/5
              </Typography>

              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                readOnly
                sx={{ fontSize: "80px" }}
              />
              <Typography variant="body1" sx={{ px: 1, pt: 5 }}>
                By 50000+ Customers
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegistrationForm;
