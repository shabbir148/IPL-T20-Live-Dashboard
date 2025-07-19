import React from 'react';
import { PointsTableEntry } from '../types';

interface PointsTableProps {
  pointsTable: PointsTableEntry[];
}

const PointsTable: React.FC<PointsTableProps> = ({ pointsTable }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div className="bg-ipl-orange text-white px-6 py-4">
        <h2 className="text-xl font-bold">Points Table</h2>
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pos
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                M
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                W
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                L
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                NR
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pts
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                NRR
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Form
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pointsTable.map((entry, index) => (
              <tr
                key={entry.team.id}
                className={`${
                  entry.position <= 4 
                    ? 'bg-green-50 border-l-4 border-green-500' 
                    : index >= pointsTable.length - 2 
                    ? 'bg-red-50 border-l-4 border-red-500' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <td className="px-4 py-4 text-sm font-medium text-gray-900">
                  {entry.position}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{entry.team.logo}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {entry.team.shortName}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-32">
                        {entry.team.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 text-center">
                  {entry.matchesPlayed}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 text-center">
                  {entry.wins}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 text-center">
                  {entry.losses}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 text-center">
                  {entry.noResult}
                </td>
                <td className="px-4 py-4 text-sm font-bold text-gray-900 text-center">
                  {entry.points}
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 text-center">
                  <span className={entry.netRunRate.startsWith('+') ? 'text-green-600' : entry.netRunRate.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                    {entry.netRunRate}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex justify-center space-x-1">
                    {entry.recentForm.map((result, idx) => (
                      <span
                        key={idx}
                        className={`inline-block w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white ${
                          result === 'W' ? 'bg-green-500' : 
                          result === 'L' ? 'bg-red-500' : 'bg-gray-400'
                        }`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {pointsTable.map((entry, index) => (
          <div
            key={entry.team.id}
            className={`p-4 border-b border-gray-200 ${
              entry.position <= 4 
                ? 'bg-green-50 border-l-4 border-green-500' 
                : index >= pointsTable.length - 2 
                ? 'bg-red-50 border-l-4 border-red-500' 
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-600 mr-3">
                  {entry.position}
                </span>
                <span className="text-2xl mr-3">{entry.team.logo}</span>
                <div>
                  <div className="font-bold text-gray-900">{entry.team.shortName}</div>
                  <div className="text-xs text-gray-500">{entry.team.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{entry.points}</div>
                <div className="text-xs text-gray-500">Points</div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>M: {entry.matchesPlayed}</span>
              <span>W: {entry.wins}</span>
              <span>L: {entry.losses}</span>
              <span>NRR: <span className={entry.netRunRate.startsWith('+') ? 'text-green-600' : entry.netRunRate.startsWith('-') ? 'text-red-600' : 'text-gray-600'}>
                {entry.netRunRate}
              </span></span>
            </div>
            
            <div className="flex justify-center space-x-1">
              {entry.recentForm.map((result, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white ${
                    result === 'W' ? 'bg-green-500' : 
                    result === 'L' ? 'bg-red-500' : 'bg-gray-400'
                  }`}
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsTable;