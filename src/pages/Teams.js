// src/pages/Teams.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { fetchTeams, createTeam } from '../services/api'; // Assuming these functions are already defined

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', location: '' });

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetchTeams();
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    getTeams();
  }, []);

  const handleCreateTeam = async () => {
    try {
      const response = await createTeam(newTeam);
      setTeams([...teams, response.data]);
      setNewTeam({ name: '', location: '' });
    } catch (error) {
      console.error("Error creating team:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Teams
        </Typography>
        <List>
          {teams.map((team) => (
            <ListItem key={team.id}>
              <ListItemText
                primary={team.name}
                secondary={`Location: ${team.location}`}
              />
            </ListItem>
          ))}
        </List>
        <Box my={4}>
          <Typography variant="h6" component="h2">
            Add New Team
          </Typography>
          <input
            type="text"
            placeholder="Team Name"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Team Location"
            value={newTeam.location}
            onChange={(e) => setNewTeam({ ...newTeam, location: e.target.value })}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateTeam}
          >
            Add Team
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Teams;
