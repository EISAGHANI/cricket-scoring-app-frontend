// cricket-scoring-app-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LiveMatch from './pages/LiveMatch';
import MatchHistory from './pages/MatchHistory';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/live-match" element={<LiveMatch/>} />
        <Route path="/match-history" element={<MatchHistory/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/players" element={<Players/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;