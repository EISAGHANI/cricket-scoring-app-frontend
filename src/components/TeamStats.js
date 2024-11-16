import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const TeamStats = () => {
  // Sample data - replace with your actual data
  const matchData = [
    { match: 'vs AUS', runs: 285, wickets: 8 },
    { match: 'vs ENG', runs: 312, wickets: 6 },
    { match: 'vs SA', runs: 245, wickets: 10 },
    { match: 'vs NZ', runs: 298, wickets: 7 },
    { match: 'vs PAK', runs: 267, wickets: 9 }
  ];

  const teamStats = {
    totalMatches: 5,
    wins: 3,
    losses: 2,
    totalRuns: 1407,
    totalWickets: 40,
    highestScore: 312,
    lowestScore: 245,
    averageScore: 281.4,
    winPercentage: 60
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Team Statistics</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Match Record</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {teamStats.wins}W - {teamStats.losses}L
            </div>
            <p className="text-sm text-gray-500">
              Win Rate: {teamStats.winPercentage}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Runs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.totalRuns}</div>
            <p className="text-sm text-gray-500">
              Avg: {teamStats.averageScore}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Highest Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.highestScore}</div>
            <p className="text-sm text-gray-500">vs ENG</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Wickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.totalWickets}</div>
            <p className="text-sm text-gray-500">
              Avg: {(teamStats.totalWickets / teamStats.totalMatches).toFixed(1)} per match
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Recent Match Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData}>
                <XAxis dataKey="match" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="runs" fill="#2563eb" name="Runs Scored" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Match History Table */}
      <Card>
        <CardHeader>
          <CardTitle>Match History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Opposition</th>
                  <th className="text-left p-2">Runs</th>
                  <th className="text-left p-2">Wickets</th>
                  <th className="text-left p-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {matchData.map((match, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{match.match}</td>
                    <td className="p-2">{match.runs}</td>
                    <td className="p-2">{match.wickets}</td>
                    <td className="p-2">{index % 2 === 0 ? 'Won' : 'Lost'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamStats;