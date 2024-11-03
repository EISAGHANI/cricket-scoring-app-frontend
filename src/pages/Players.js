// src/pages/Players.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Button, TextField } from '@mui/material';
import { fetchPlayers, createPlayer } from '../services/api'; // Assuming these functions are already defined

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', role: '', team: '' });

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetchPlayers();
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    getPlayers();
  }, []);

  const handleCreatePlayer = async () => {
    try {
      const response = await createPlayer(newPlayer);
      setPlayers([...players, response.data]);
      setNewPlayer({ name: '', role: '', team: '' });
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Players
        </Typography>
        <List>
          {players.map((player) => (
            <ListItem key={player.id}>
              <ListItemText
                primary={player.name}
                secondary={`Role: ${player.role}, Team: ${player.team}`}
              />
            </ListItem>
          ))}
        </List>
        <Box my={4}>
          <Typography variant="h6" component="h2">
            Add New Player
          </Typography>
          <TextField
            label="Player Name"
            variant="outlined"
            value={newPlayer.name}
            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Player Role"
            variant="outlined"
            value={newPlayer.role}
            onChange={(e) => setNewPlayer({ ...newPlayer, role: e.target.value })}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Team"
            variant="outlined"
            value={newPlayer.team}
            onChange={(e) => setNewPlayer({ ...newPlayer, team: e.target.value })}
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreatePlayer}
            sx={{ mt: 2 }}
          >
            Add Player
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Players;
