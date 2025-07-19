import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import LiveMatch from '../components/LiveMatch';
import PointsTable from '../components/PointsTable';
import MatchSchedule from '../components/MatchSchedule';
import Loading from '../components/Loading';
import { Team, Match, PointsTableEntry, LiveMatchDetails } from '../types';

interface IPLData {
  teams: Team[];
  pointsTable: PointsTableEntry[];
  matches: Match[];
  liveMatchDetails: LiveMatchDetails;
  lastUpdated: string;
}

interface APIResponse {
  success: boolean;
  data: IPLData;
  message: string;
}

export default function Home() {
  const [data, setData] = useState<IPLData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'live' | 'table' | 'schedule'>('live');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/scrape');
      const result: APIResponse = await response.json();
      
      if (result.success) {
        setData(result.data);
        setLastUpdated(result.data.lastUpdated);
      } else {
        console.error('Failed to fetch data:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Auto-refresh every 30 seconds for live updates
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getLiveMatch = () => {
    if (!data) return null;
    return data.matches.find(match => match.status === 'live') 
      ? data.liveMatchDetails 
      : undefined;
  };

  const getUpcomingMatch = () => {
    if (!data) return null;
    return data.matches.find(match => match.status === 'upcoming');
  };

  const formatLastUpdated = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading && !data) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>IPL T20 Live Dashboard</title>
        <meta name="description" content="Live IPL T20 match updates, points table, and schedule" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-ipl-blue to-blue-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-bold">IPL T20 Dashboard</h1>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={fetchData}
                  disabled={loading}
                  className="px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm hover:bg-opacity-30 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Refresh'}
                </button>
                {lastUpdated && (
                  <span className="text-xs opacity-75">
                    Updated: {formatLastUpdated(lastUpdated)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs - Mobile */}
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('live')}
              className={`flex-1 py-3 px-4 text-center text-sm font-medium ${
                activeTab === 'live'
                  ? 'text-ipl-blue border-b-2 border-ipl-blue bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Live/Next
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`flex-1 py-3 px-4 text-center text-sm font-medium ${
                activeTab === 'table'
                  ? 'text-ipl-blue border-b-2 border-ipl-blue bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Points Table
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 py-3 px-4 text-center text-sm font-medium ${
                activeTab === 'schedule'
                  ? 'text-ipl-blue border-b-2 border-ipl-blue bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Schedule
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {data && (
            <>
              {/* Desktop Layout */}
              <div className="hidden md:block space-y-6">
                <LiveMatch 
                  liveMatch={getLiveMatch()} 
                  upcomingMatch={getUpcomingMatch()} 
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <PointsTable pointsTable={data.pointsTable} />
                  </div>
                  <div>
                    <MatchSchedule matches={data.matches} />
                  </div>
                </div>
              </div>

              {/* Mobile Layout with Tabs */}
              <div className="md:hidden">
                {activeTab === 'live' && (
                  <LiveMatch 
                    liveMatch={getLiveMatch()} 
                    upcomingMatch={getUpcomingMatch()} 
                  />
                )}
                
                {activeTab === 'table' && (
                  <PointsTable pointsTable={data.pointsTable} />
                )}
                
                {activeTab === 'schedule' && (
                  <MatchSchedule matches={data.matches} />
                )}
              </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <p className="text-sm">
                IPL T20 Dashboard • Live updates every 30 seconds
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Data updates automatically. Last refresh: {lastUpdated ? formatLastUpdated(lastUpdated) : 'Loading...'}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}