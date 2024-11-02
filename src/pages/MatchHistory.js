import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { fetchMatches } from '../services/api';  // Assuming this function is already defined

const MatchHistory = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const response = await fetchMatches();
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    getMatches();
  }, []);

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Match History
        </Typography>
        <List>
          {matches.map(match => (
            <ListItem key={match.id}>
              <ListItemText
                primary={`Match: ${match.name}`}
                secondary={`Date: ${match.date}, Teams: ${match.teamA} vs ${match.teamB}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default MatchHistory;
