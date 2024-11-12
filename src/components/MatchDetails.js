import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CalendarIcon, Clock, MapPin, Users } from 'lucide-react';

const MatchDetails = ({ match }) => {
  // Sample match data structure if not provided as prop
  const defaultMatch = {
    homeTeam: "Team A",
    awayTeam: "Team B",
    date: "2024-11-12",
    time: "19:30",
    venue: "Sports Stadium",
    competition: "Premier League",
    homeScore: 2,
    awayScore: 1,
    status: "In Progress",
    attendance: "45,000"
  };

  const matchData = match || defaultMatch;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-gray-50 border-b">
        <div className="text-sm text-gray-500 flex items-center justify-between">
          <span>{matchData.competition}</span>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            {matchData.status}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Teams and Score */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h2 className="text-xl font-bold mb-2">{matchData.homeTeam}</h2>
            <div className="text-4xl font-bold">{matchData.homeScore}</div>
          </div>
          
          <div className="text-gray-400 text-lg px-4">VS</div>
          
          <div className="text-center flex-1">
            <h2 className="text-xl font-bold mb-2">{matchData.awayTeam}</h2>
            <div className="text-4xl font-bold">{matchData.awayScore}</div>
          </div>
        </div>

        {/* Match Info */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="w-5 h-5 mr-3" />
            <span>{new Date(matchData.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-3" />
            <span>{matchData.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-3" />
            <span>{matchData.venue}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-3" />
            <span>Attendance: {matchData.attendance}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchDetails;