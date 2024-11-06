import React, { useState, useRef } from 'react';
import { Typography, Box, Paper, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MatchCard = ({ match }) => (
  <Paper 
    elevation={3} 
    sx={{ 
      minWidth: 290,
      mx: 1,
      p: 2,
      backgroundColor: 'background.paper',
    }}
  >
    {/* Date Section */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'text.secondary' }}>
      <CalendarTodayIcon fontSize="small" />
      <Typography variant="body2">{match.date}</Typography>
    </Box>

    {/* First Team */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          component="img"
          src={match.team1.logo}
          alt={`${match.team1.name} logo`}
          sx={{ width: 32, height: 32 }}
        />
        <Typography variant="body1" fontWeight="medium">
          {match.team1.name}
        </Typography>
      </Box>
      <Typography variant="body2">
        {match.team1.score} <Box component="span" sx={{ color: 'text.secondary' }}>({match.team1.overs})</Box>
      </Typography>
    </Box>

    {/* Second Team */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          component="img"
          src={match.team2.logo}
          alt={`${match.team2.name} logo`}
          sx={{ width: 32, height: 32 }}
        />
        <Typography variant="body1" fontWeight="medium">
          {match.team2.name}
        </Typography>
      </Box>
      <Typography variant="body2">
        {match.team2.score} <Box component="span" sx={{ color: 'text.secondary' }}>({match.team2.overs})</Box>
      </Typography>
    </Box>

    {/* Result */}
    <Box 
      sx={{ 
        p: 1, 
        bgcolor: 'action.hover', 
        borderRadius: 1,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">{match.result}</Typography>
    </Box>
  </Paper>
);

const MatchCarousel = ({ matches }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollLeft = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Left Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          left: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          boxShadow: 2,
          '&:hover': { bgcolor: 'background.paper' },
          visibility: canScrollLeft ? 'visible' : 'hidden',
          zIndex: 1,
        }}
        onClick={() => scroll('left')}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Carousel Container */}
      <Box 
        ref={scrollContainerRef}
        onScroll={checkScrollButtons}
        sx={{ 
          width: '100%',
          overflow: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none'  // Hide scrollbar
          },
          scrollbarWidth: 'none',  // Firefox
          msOverflowStyle: 'none',  // IE/Edge
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            p: 2,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </Box>
      </Box>

      {/* Right Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          right: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'background.paper',
          boxShadow: 2,
          '&:hover': { bgcolor: 'background.paper' },
          visibility: canScrollRight ? 'visible' : 'hidden',
          zIndex: 1,
        }}
        onClick={() => scroll('right')}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default MatchCarousel;