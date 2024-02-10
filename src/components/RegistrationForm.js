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
} from "@mui/material";
import formbg from "../assets/world-pattern.png";

// ... (existing imports)

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    gender: "",
    education: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleRegister = () => {
    console.log("Registration Data:", formData);
    // You can perform further actions here, such as sending data to the server.
  };

  return (
    <div
      style={{
        backgroundImage: `url(${formbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2} sx={{ pt: "150px", px: "70px" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: "20px",
              borderRadius: "5px",
              color: "white", // Set default text color to white
            }}
          >
            <Typography
              variant="h3"
              sx={{
                marginBottom: "20px",
                fontFamily: "Poppins",
                lineHeight: 0.8,
              }}
            >
              Register Now
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "20px",
                fontFamily: "Poppins",
                lineHeight: 0.7,
              }}
            >
              Make your dreams come true today!
            </Typography>

            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange("name")}
              InputProps={{ sx: { color: "white" } }}
              sx={{ backgroundColor: "#476C92", borderRadius: "5px" }}
            />
            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Contact No."
              value={formData.contactNo}
              onChange={handleChange("contactNo")}
              InputProps={{ sx: { color: "white" } }}
              sx={{ backgroundColor: "#476C92", borderRadius: "5px" }}
            />
            <TextField
              label=""
              fullWidth
              margin="normal"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange("email")}
              InputProps={{ sx: { color: "white" } }}
              sx={{
                backgroundColor: "#476C92",
                borderRadius: "5px",
              }}
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
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="education" sx={{ color: "white" }}>
                Previous Education
              </InputLabel>
              <Select
                value={formData.education}
                onChange={handleChange("education")}
                label=""
                sx={{ backgroundColor: "#476C92" }}
                inputProps={{ sx: { color: "white" } }}
              >
                <MenuItem value="highSchool">High School</MenuItem>
                <MenuItem value="secondaryEd">Secondary Education</MenuItem>
                <MenuItem value="underGraduate">Under Graduate</MenuItem>
                <MenuItem value="postGraduate">Post Graduate</MenuItem>
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
        {/* Right half for the image (replace the image source as needed) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default RegistrationForm;
