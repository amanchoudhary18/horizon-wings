import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

const CounterCard = ({ label, initialValue, successRate }) => {
  const [counterValue, setCounterValue] = useState(0);

  // Only start the interval when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounterValue((prevValue) =>
          prevValue < initialValue ? prevValue + 5 : initialValue
        );
      }, 0.25);

      return () => clearInterval(interval);
    }
  }, [inView, initialValue]);

  return (
    <div ref={ref}>
      <Card sx={{ width: "300px", height: "170px" }}>
        <CardContent>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "purple", pb: "20px" }}
          >
            {counterValue}
            {successRate ? "%" : "+"}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 500 }}
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const FastCounterCard = ({ label, initialValue, successRate }) => {
  const [counterValue, setCounterValue] = useState(0);

  // Only start the interval when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounterValue((prevValue) =>
          prevValue < initialValue ? prevValue + 400 : initialValue
        );
      }, 0.5);

      return () => clearInterval(interval);
    }
  }, [inView, initialValue]);

  return (
    <div ref={ref}>
      <Card sx={{ width: "300px", height: "170px" }}>
        <CardContent>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "purple", pb: "20px" }}
          >
            {counterValue}
            {successRate && "%"}+
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 500 }}
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Achievements = () => {
  return (
    <div
      style={{
        padding: "0 80px 20px",
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <CounterCard label="Top Universities" initialValue={750} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CounterCard
            label="Success rate"
            initialValue={99}
            successRate={99}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CounterCard label="Year of Experience" initialValue={8} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FastCounterCard
            label="Student supported and Enrolled"
            initialValue={50000}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
