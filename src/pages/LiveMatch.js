import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const LiveMatch = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Live Match
        </Typography>
        <Typography variant="body1" gutterBottom>
          Track live scores and updates for ongoing matches!
        </Typography>
        {/* Example buttons for actions, replace with real actions later */}
        <Button variant="contained" color="primary" sx={{ mx: 1 }}>
          Start Match
        </Button>
        <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
          End Match
        </Button>
      </Box>
    </Container>
  );
};

export default LiveMatch;
