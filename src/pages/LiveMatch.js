import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Play, 
  Pause, 
  Whistle, 
  Trophy, 
  Users 
} from 'lucide-react';

const LiveMatch = () => {
  const [matchStatus, setMatchStatus] = useState('Not Started');
  const [isMatchLive, setIsMatchLive] = useState(false);

  const matchDetails = {
    team1: {
      name: 'Mumbai Indians',
      captain: 'Rohit Sharma',
      players: 11
    },
    team2: {
      name: 'Chennai Super Kings',
      captain: 'MS Dhoni',
      players: 11
    },
    venue: 'Wankhede Stadium, Mumbai',
    format: 'T20',
    tossWinner: 'Mumbai Indians',
    tossDecision: 'Batting First'
  };

  const handleStartMatch = () => {
    setMatchStatus('Live');
    setIsMatchLive(true);
  };

  const handlePauseMatch = () => {
    setMatchStatus('Paused');
    setIsMatchLive(false);
  };

  const handleEndMatch = () => {
    setMatchStatus('Completed');
    setIsMatchLive(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Trophy className="mr-2" /> Live Match
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Match Details */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold flex items-center">
                <Users className="mr-2" /> Teams
              </h3>
              <div className="flex justify-between">
                <span>{matchDetails.team1.name}</span>
                <span>vs</span>
                <span>{matchDetails.team2.name}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold flex items-center">
                <Clock className="mr-2" /> Match Details
              </h3>
              <p>Format: {matchDetails.format}</p>
              <p>Venue: {matchDetails.venue}</p>
            </div>
          </div>

          {/* Toss Details */}
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Toss</h4>
            <p>
              {matchDetails.tossWinner} won the toss and elected to {matchDetails.tossDecision}
            </p>
          </div>

          {/* Match Status */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Match Status</h4>
            <div className="flex items-center">
              <span 
                className={`px-3 py-1 rounded-full text-sm ${
                  matchStatus === 'Live' 
                    ? 'bg-green-500 text-white'
                    : matchStatus === 'Completed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300'
                }`}
              >
                {matchStatus}
              </span>
            </div>
          </div>

          {/* Match Controls */}
          <div className="flex space-x-4">
            <Button 
              onClick={handleStartMatch}
              disabled={isMatchLive}
              className="flex items-center"
            >
              <Play className="mr-2" /> Start Match
            </Button>
            <Button 
              onClick={handlePauseMatch}
              disabled={!isMatchLive}
              variant="secondary"
              className="flex items-center"
            >
              <Pause className="mr-2" /> Pause Match
            </Button>
            <Button 
              onClick={handleEndMatch}
              disabled={!isMatchLive}
              variant="destructive"
              className="flex items-center"
            >
              <Whistle className="mr-2" /> End Match
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveMatch;