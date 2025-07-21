import React from "react";
import { Match } from "../types";

interface MatchScheduleProps {
  matches: Match[];
}

const MatchSchedule: React.FC<MatchScheduleProps> = ({ matches }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></span>
            Live
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Upcoming
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-ipl-blue text-white px-6 py-4">
        <h2 className="text-xl font-bold">Match Schedule</h2>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max divide-y divide-gray-200">
          {matches.map((match) => (
            <div
              key={match.id}
              className="p-4 hover:bg-gray-50 transition-colors min-w-max"
            >
              {/* Desktop view */}
              <div className="hidden md:flex items-center justify-between min-w-[800px]">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="text-sm text-gray-500 min-w-20">
                    {formatDate(match.date)}
                  </div>
                  <div className="text-sm text-gray-500 min-w-16">
                    {match.time}
                  </div>

                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center space-x-2 min-w-32">
                      <span className="text-xl">{match.team1.logo}</span>
                      <span className="font-medium whitespace-nowrap">
                        {match.team1.shortName}
                      </span>
                    </div>

                    <span className="text-gray-400 font-medium">VS</span>

                    <div className="flex items-center space-x-2 min-w-32">
                      <span className="text-xl">{match.team2.logo}</span>
                      <span className="font-medium whitespace-nowrap">
                        {match.team2.shortName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {match.status === "live" && match.currentScore && (
                    <div className="text-sm text-gray-600 whitespace-nowrap">
                      <div>
                        {match.team1.shortName}: {match.currentScore.team1Score}
                      </div>
                      <div>
                        {match.team2.shortName}: {match.currentScore.team2Score}
                      </div>
                    </div>
                  )}
                  <div className="min-w-20">{getStatusBadge(match.status)}</div>
                </div>
              </div>

              {/* Mobile view */}
              <div className="md:hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-500">
                    {formatDate(match.date)} • {match.time}
                  </div>
                  {getStatusBadge(match.status)}
                </div>

                <div className="flex items-center justify-center space-x-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{match.team1.logo}</div>
                    <div className="font-medium text-sm">
                      {match.team1.shortName}
                    </div>
                    {match.status === "live" && match.currentScore && (
                      <div className="text-xs text-gray-600 mt-1">
                        {match.currentScore.team1Score}
                      </div>
                    )}
                  </div>

                  <div className="text-gray-400 font-bold">VS</div>

                  <div className="text-center">
                    <div className="text-2xl mb-1">{match.team2.logo}</div>
                    <div className="font-medium text-sm">
                      {match.team2.shortName}
                    </div>
                    {match.status === "live" && match.currentScore && (
                      <div className="text-xs text-gray-600 mt-1">
                        {match.currentScore.team2Score}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center truncate">
                  {match.venue}
                </div>
              </div>

              {/* Venue for desktop */}
              <div className="hidden md:block text-xs text-gray-500 mt-2 pl-44 whitespace-nowrap">
                {match.venue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchSchedule;
