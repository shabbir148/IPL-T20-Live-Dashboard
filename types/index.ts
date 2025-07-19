export interface Team {
    id: string;
    name: string;
    shortName: string;
    logo: string;
    color: string;
  }
  
  export interface Match {
    id: string;
    team1: Team;
    team2: Team;
    date: string;
    time: string;
    venue: string;
    status: 'upcoming' | 'live' | 'completed';
    result?: string;
    currentScore?: {
      team1Score?: string;
      team2Score?: string;
      overs?: string;
      currentBatting?: string;
    };
  }
  
  export interface PointsTableEntry {
    position: number;
    team: Team;
    matchesPlayed: number;
    wins: number;
    losses: number;
    noResult: number;
    points: number;
    netRunRate: string;
    recentForm: ('W' | 'L' | 'NR')[];
  }
  
  export interface LiveMatchDetails {
    match: Match;
    tossWinner?: string;
    tossDecision?: string;
    currentOver?: string;
    recentBalls?: string[];
    partnership?: {
      runs: number;
      balls: number;
      batsmen: string[];
    };
  }