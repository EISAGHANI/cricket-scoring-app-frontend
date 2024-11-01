import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// Teams 
export const fetchTeams = () => API.get('/teams');
export const createTeam = (newTeam) => API.post('/teams', newTeam);
export const fetchTeamById = (id) => API.get(`/teams/${id}`);

// Players 
export const fetchPlayers = () => API.get('/players');
export const createPlayer = (newPlayer) => API.post('/players', newPlayer);
export const fetchPlayerById = (id) => API.get(`/players/${id}`);

// Matches
export const fetchMatches = () => API.get('/matches');
export const createMatch = (newMatch) => API.post('/matches', newMatch);
export const fetchMatchById = (id) => API.get(`/matches/${id}`);


export default API;