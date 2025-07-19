import React from 'react';
import { LiveMatchDetails, Match } from '../types';

interface LiveMatchProps {
  liveMatch?: LiveMatchDetails;
  upcomingMatch?: Match;
}

const LiveMatch: React.FC<LiveMatchProps> = ({ liveMatch, upcomingMatch }) => {
  if (!liveMatch && !upcomingMatch) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-600">
          No matches scheduled
        </h2>
      </div>
    );
  }

  const match = liveMatch?.match || upcomingMatch;
  const isLive = liveMatch?.match.status === 'live';

  return (
    <div className="bg-gradient-to-r from-ipl-blue to-blue-600 rounded-lg shadow-lg text-white mb-6 overflow-hidden">
      {/* Live indicator */}
      {isLive && (
        <div className="bg-red-500 text-center py-2 px-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-bold text-sm">LIVE</span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Match header */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold opacity-90">
            {isLive ? 'Live Match' : 'Next Match'}
          </h2>
          <p className="text-sm opacity-75">{match?.venue}</p>
          <p className="text-sm opacity-75">{match?.date} • {match?.time}</p>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center flex-1">
            <div className="text-4xl mb-2">{match?.team1.logo}</div>
            <h3 className="font-bold text-lg">{match?.team1.shortName}</h3>
            {isLive && (
              <p className="text-xl font-mono mt-2">
                {liveMatch?.match.currentScore?.team1Score}
              </p>
            )}
          </div>

          <div className="text-center px-4">
            <div className="text-2xl font-bold">VS</div>
            {isLive && (
              <p className="text-sm mt-2 opacity-75">
                Over {liveMatch?.match.currentScore?.overs}
              </p>
            )}
          </div>

          <div className="text-center flex-1">
            <div className="text-4xl mb-2">{match?.team2.logo}</div>
            <h3 className="font-bold text-lg">{match?.team2.shortName}</h3>
            {isLive && (
              <p className="text-xl font-mono mt-2">
                {liveMatch?.match.currentScore?.team2Score}
              </p>
            )}
          </div>
        </div>

        {/* Live match details */}
        {isLive && liveMatch && (
          <div className="bg-white bg-opacity-10 rounded-lg p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Toss: {liveMatch.tossWinner} ({liveMatch.tossDecision})</span>
              <span>Batting: {liveMatch.match.currentScore?.currentBatting}</span>
            </div>
            
            {liveMatch.partnership && (
              <div className="text-sm">
                <span>Partnership: {liveMatch.partnership.runs} runs ({liveMatch.partnership.balls} balls)</span>
                <div className="text-xs opacity-75">
                  {liveMatch.partnership.batsmen.join(' & ')}
                </div>
              </div>
            )}

            {liveMatch.recentBalls && (
              <div>
                <p className="text-sm mb-2">Recent balls:</p>
                <div className="flex space-x-2">
                  {liveMatch.recentBalls.map((ball, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        ball === '4' ? 'bg-green-500' :
                        ball === '6' ? 'bg-red-500' :
                        ball === '0' ? 'bg-gray-500' :
                        'bg-blue-500'
                      }`}
                    >
                      {ball}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveMatch;