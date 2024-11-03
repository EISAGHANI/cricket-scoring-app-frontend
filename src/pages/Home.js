import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Box, Link, List, ListItem } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Cricket Scoring App
        </Typography>
        <Typography variant="body1" gutterBottom>
          Keep track of your cricket matches, players, and scores all in one place!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
