// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const HeaderBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <HeaderBox>
          <IconButton edge="start" color="inherit" aria-label="menu" component={RouterLink} to="/">
            <SportsCricketIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" component="div">
            CricketScoringApp
          </Typography>
          <Box>
            <Button color="inherit" component={RouterLink} to="/live-match">Live Match</Button>
            <Button color="inherit" component={RouterLink} to="/match-history">Match History</Button>
            <Button color="inherit" component={RouterLink} to="/teams">Teams</Button>
            <Button color="inherit" component={RouterLink} to="/players">Players</Button>
            <Button color="inherit" component={RouterLink} to="/login">Login</Button>
          </Box>
        </HeaderBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
