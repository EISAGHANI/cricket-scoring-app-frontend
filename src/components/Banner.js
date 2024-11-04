// src/components/Banner.js
import React from 'react';
import { Box } from '@mui/material';
import logo from '../assets/Banner.png'; 

const Banner = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2} bgcolor="primary.main">
      <img src={logo} alt="Cricket Logo" style={{ height: '50px', marginRight: '10px' }} />
    </Box>
  );
};

export default Banner;
