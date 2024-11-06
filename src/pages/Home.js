// src/pages/Home.js
import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import MatchCarousel from '../components/MatchCarousel';

const Home = () => {
  // Sample match data - in a real app, this would likely come from an API or props
  const matches = [
    {
      date: "6 Nov 2024",
      team1: {
        name: "India",
        logo: "/api/placeholder/32/32",
        score: "325/6",
        overs: "50.0"
      },
      team2: {
        name: "Australia",
        logo: "/api/placeholder/32/32",
        score: "282/8",
        overs: "50.0"
      },
      result: "India won by 43 runs"
    },
    {
      date: "5 Nov 2024",
      team1: {
        name: "England",
        logo: "/api/placeholder/32/32",
        score: "287/9",
        overs: "50.0"
      },
      team2: {
        name: "South Africa",
        logo: "/api/placeholder/32/32",
        score: "290/3",
        overs: "46.2"
      },
      result: "South Africa won by 7 wickets"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <MatchCarousel matches={matches} />
      </Box>
    </Container>
  );
};

export default Home;
