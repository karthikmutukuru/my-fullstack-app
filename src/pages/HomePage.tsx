// src/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  console.log(">>> HomePage rendered!");
  const [joke, setJoke] = useState("");
  const navigate = useNavigate();

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://api.chucknorris.io/jokes/random");
      setJoke(response.data.value);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">
            {joke || "Loading..."}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={fetchJoke}>
        Get New Joke
      </Button>
      <br /><br />
      <Button variant="outlined" color="secondary" onClick={() => navigate("/form")}>
        Go to Form Page
      </Button>
    </Container>
  );
};

export default HomePage;
