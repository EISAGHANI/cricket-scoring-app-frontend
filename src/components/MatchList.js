import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CalendarIcon, ChevronRight } from 'lucide-react';

const MatchList = ({ matches: initialMatches }) => {
  // Sample matches data if not provided as prop
  const defaultMatches = [
    {
      id: 1,
      homeTeam: "Team A",
      awayTeam: "Team B",
      date: "2024-11-12",
      time: "19:30",
      competition: "Premier League",
      homeScore: 2,
      awayScore: 1,
      status: "In Progress",
    },
    {
      id: 2,
      homeTeam: "Team C",
      awayTeam: "Team D",
      date: "2024-11-12",
      time: "20:00",
      competition: "Premier League",
      homeScore: 0,
      awayScore: 0,
      status: "Scheduled",
    },
  ];

  const [matches] = useState(initialMatches || defaultMatches);
  
  // Group matches by date
  const groupedMatches = matches.reduce((groups, match) => {
    const date = new Date(match.date).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(match);
    return groups;
  }, {});

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-green-100 text-green-700';
      case 'finished':
        return 'bg-gray-100 text-gray-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {Object.entries(groupedMatches).map(([date, dateMatches]) => (
        <Card key={date} className="w-full">
          <CardHeader className="bg-gray-50 py-3">
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span className="font-medium">{date}</span>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {dateMatches.map((match) => (
              <div
                key={match.id}
                className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => window.location.href = `/match/${match.id}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{match.competition}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(match.status)}`}>
                    {match.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{match.homeTeam}</span>
                      <span className="font-bold ml-2">
                        {match.status !== 'Scheduled' ? match.homeScore : '-'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{match.awayTeam}</span>
                      <span className="font-bold ml-2">
                        {match.status !== 'Scheduled' ? match.awayScore : '-'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center ml-4">
                    <span className="text-gray-500 mr-2">{match.time}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MatchList;