import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableCell, TableRow } from '@/components/ui/table';

const ScoreCard = ({ match }) => {
  // Sample match data
  const defaultMatch = {
    team1: 'India',
    team2: 'Australia',
    team1Innings: [
      { batsman: 'Rohit Sharma', runs: 45, balls: 32, dismissal: 'c. Smith b. Cummins' },
      { batsman: 'KL Rahul', runs: 28, balls: 21, dismissal: 'b. Starc' },
      { batsman: 'Virat Kohli', runs: 12, balls: 18, dismissal: 'c. Finch b. Zampa' },
      { batsman: 'Shreyas Iyer', runs: 85, balls: 70, dismissal: 'not out' },
      { batsman: 'Hardik Pandya', runs: 54, balls: 35, dismissal: 'c. Maxwell b. Cummins' },
      { batsman: 'Ravindra Jadeja', runs: 20, balls: 15, dismissal: 'not out' },
      { batsman: 'Axar Patel', runs: 0, balls: 2, dismissal: 'b. Starc' }
    ],
    team2Innings: [
      { batsman: 'David Warner', runs: 78, balls: 56, dismissal: 'c. Jadeja b. Pandya' },
      { batsman: 'Aaron Finch', runs: 12, balls: 11, dismissal: 'c. Kohli b. Pandya' },
      { batsman: 'Marnus Labuschagne', runs: 35, balls: 28, dismissal: 'c. Sharma b. Shami' },
      { batsman: 'Steve Smith', runs: 93, balls: 77, dismissal: 'not out' },
      { batsman: 'Glenn Maxwell', runs: 27, balls: 20, dismissal: 'b. Pandya' },
      { batsman: 'Marcus Stoinis', runs: 2, balls: 5, dismissal: 'c. Jadeja b. Shami' },
      { batsman: 'Cameron Green', runs: 12, balls: 10, dismissal: 'not out' }
    ],
    team1Score: 254,
    team1Wickets: 7,
    team1Overs: 49.4,
    team2Score: 249,
    team2Wickets: 6,
    team2Overs: 50,
    result: 'India won by 5 runs'
  };

  const matchData = match || defaultMatch;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{matchData.team1} vs {matchData.team2}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Team 1 Innings */}
            <div>
              <div className="font-medium mb-2">{matchData.team1} Innings</div>
              <Table>
                <TableHeader>
                  <TableCell>Batsman</TableCell>
                  <TableCell>Runs</TableCell>
                  <TableCell>Balls</TableCell>
                  <TableCell>Dismissal</TableCell>
                </TableHeader>
                <TableBody>
                  {matchData.team1Innings.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell>{player.batsman}</TableCell>
                      <TableCell>{player.runs}</TableCell>
                      <TableCell>{player.balls}</TableCell>
                      <TableCell>{player.dismissal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="text-right font-medium">
                {matchData.team1Score}/{matchData.team1Wickets} ({matchData.team1Overs} Overs)
              </div>
            </div>

            {/* Team 2 Innings */}
            <div>
              <div className="font-medium mb-2">{matchData.team2} Innings</div>
              <Table>
                <TableHeader>
                  <TableCell>Batsman</TableCell>
                  <TableCell>Runs</TableCell>
                  <TableCell>Balls</TableCell>
                  <TableCell>Dismissal</TableCell>
                </TableHeader>
                <TableBody>
                  {matchData.team2Innings.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell>{player.batsman}</TableCell>
                      <TableCell>{player.runs}</TableCell>
                      <TableCell>{player.balls}</TableCell>
                      <TableCell>{player.dismissal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="text-right font-medium">
                {matchData.team2Score}/{matchData.team2Wickets} ({matchData.team2Overs} Overs)
              </div>
            </div>

            {/* Match Result */}
            <div className="text-center font-medium text-green-500">{matchData.result}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreCard;