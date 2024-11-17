import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, RotateCcw } from 'lucide-react';

const LiveScoring = ({ 
  initialScore = 0,
  initialWickets = 0,
  initialOvers = 0,
  initialBalls = 0,
  onScoreUpdate = () => {},
  battingTeam = "Team A",
  bowlingTeam = "Team B",
  target = null
}) => {
  const [score, setScore] = useState(initialScore);
  const [wickets, setWickets] = useState(initialWickets);
  const [overs, setOvers] = useState(initialOvers);
  const [balls, setBalls] = useState(initialBalls);
  const [currentOver, setCurrentOver] = useState([]);
  const [lastSixBalls, setLastSixBalls] = useState([]);
  const [runRate, setRunRate] = useState(0);

  const updateRunRate = (newScore, newOvers, newBalls) => {
    const totalOvers = newOvers + (newBalls / 6);
    if (totalOvers > 0) {
      setRunRate((newScore / totalOvers).toFixed(2));
    }
  };

  const addBall = (runs, isExtra = false) => {
    if (wickets < 10 && !isExtra) {
      const newBalls = balls + 1;
      const newOvers = newBalls === 6 ? overs + 1 : overs;
      const updatedBalls = newBalls === 6 ? 0 : newBalls;
      
      setBalls(updatedBalls);
      setOvers(newOvers);
      
      const newScore = score + runs;
      setScore(newScore);
      
      const newCurrentOver = [...currentOver, runs.toString()];
      setCurrentOver(newBalls === 6 ? [] : newCurrentOver);
      
      if (newBalls === 6) {
        setLastSixBalls(newCurrentOver);
      }
      
      updateRunRate(newScore, newOvers, updatedBalls);
      
      onScoreUpdate({
        score: newScore,
        wickets,
        overs: newOvers,
        balls: updatedBalls
      });
    }
  };

  const addWicket = () => {
    if (wickets < 10) {
      const newWickets = wickets + 1;
      setWickets(newWickets);
      const newCurrentOver = [...currentOver, 'W'];
      setCurrentOver(newCurrentOver);
      addBall(0);
      
      onScoreUpdate({
        score,
        wickets: newWickets,
        overs,
        balls
      });
    }
  };

  const undoLastAction = () => {
    if (currentOver.length > 0) {
      const newCurrentOver = [...currentOver];
      const lastAction = newCurrentOver.pop();
      setCurrentOver(newCurrentOver);
      
      if (lastAction === 'W') {
        setWickets(wickets - 1);
      } else {
        setScore(score - parseInt(lastAction));
      }
      
      if (balls === 0) {
        setBalls(5);
        setOvers(overs - 1);
      } else {
        setBalls(balls - 1);
      }
      
      updateRunRate(
        lastAction === 'W' ? score : score - parseInt(lastAction),
        balls === 0 ? overs - 1 : overs,
        balls === 0 ? 5 : balls - 1
      );
    }
  };

  const calculateRequired = () => {
    if (!target) return null;
    const remainingRuns = target - score;
    const totalBallsLeft = ((50 - overs) * 6) - balls;
    const reqRate = (remainingRuns / (totalBallsLeft / 6)).toFixed(2);
    return {
      runs: remainingRuns,
      balls: totalBallsLeft,
      rate: reqRate
    };
  };

  const required = calculateRequired();

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Main Scoreboard */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{battingTeam} vs {bowlingTeam}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl font-bold">
              {score}/{wickets}
            </div>
            <div className="text-2xl">
              {overs}.{balls} Overs
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <div>CRR: {runRate}</div>
            {required && (
              <div>
                Required: {required.runs} runs from {required.balls} balls (RRR: {required.rate})
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Current Over */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Current Over</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {currentOver.map((ball, index) => (
              <span 
                key={index} 
                className="w-8 h-8 flex items-center justify-center border rounded-full"
              >
                {ball}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scoring Controls */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[0, 1, 2, 3, 4, 5, 6].map((runs) => (
              <Button
                key={runs}
                onClick={() => addBall(runs)}
                variant="outline"
                className="h-12"
              >
                {runs}
              </Button>
            ))}
            <Button
              onClick={addWicket}
              variant="destructive"
              className="h-12"
            >
              W
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={() => addBall(1, true)}
              variant="secondary"
              className="h-12"
            >
              Wide/No Ball
            </Button>
            <Button
              onClick={undoLastAction}
              variant="ghost"
              className="h-12"
              disabled={currentOver.length === 0}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Undo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Last Over Summary */}
      {lastSixBalls.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Last Over</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {lastSixBalls.map((ball, index) => (
                <span 
                  key={index}
                  className="w-8 h-8 flex items-center justify-center border rounded-full"
                >
                  {ball}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LiveScoring;