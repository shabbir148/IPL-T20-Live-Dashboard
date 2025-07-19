import { Team, Match, PointsTableEntry, LiveMatchDetails } from '../types';

export const teams: Team[] = [
  {
    id: 'csk',
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    logo: '🦁',
    color: '#FFFF00'
  },
  {
    id: 'mi',
    name: 'Mumbai Indians',
    shortName: 'MI',
    logo: '🔵',
    color: '#004BA0'
  },
  {
    id: 'rcb',
    name: 'Royal Challengers Bangalore',
    shortName: 'RCB',
    logo: '👑',
    color: '#EC1C24'
  },
  {
    id: 'kkr',
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    logo: '⚔️',
    color: '#3A225D'
  },
  {
    id: 'dc',
    name: 'Delhi Capitals',
    shortName: 'DC',
    logo: '🏛️',
    color: '#17479E'
  },
  {
    id: 'pbks',
    name: 'Punjab Kings',
    shortName: 'PBKS',
    logo: '👑',
    color: '#DD1F2D'
  },
  {
    id: 'rr',
    name: 'Rajasthan Royals',
    shortName: 'RR',
    logo: '👑',
    color: '#254AA5'
  },
  {
    id: 'srh',
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    logo: '🌅',
    color: '#FF822A'
  },
  {
    id: 'gt',
    name: 'Gujarat Titans',
    shortName: 'GT',
    logo: '⚡',
    color: '#1B2951'
  },
  {
    id: 'lsg',
    name: 'Lucknow Super Giants',
    shortName: 'LSG',
    logo: '🦸',
    color: '#00A9E0'
  }
];

export const pointsTable: PointsTableEntry[] = [
  {
    position: 1,
    team: teams[0], // CSK
    matchesPlayed: 10,
    wins: 8,
    losses: 2,
    noResult: 0,
    points: 16,
    netRunRate: '+1.325',
    recentForm: ['W', 'W', 'W', 'L', 'W']
  },
  {
    position: 2,
    team: teams[1], // MI
    matchesPlayed: 10,
    wins: 7,
    losses: 3,
    noResult: 0,
    points: 14,
    netRunRate: '+0.892',
    recentForm: ['W', 'L', 'W', 'W', 'W']
  },
  {
    position: 3,
    team: teams[8], // GT
    matchesPlayed: 10,
    wins: 7,
    losses: 3,
    noResult: 0,
    points: 14,
    netRunRate: '+0.654',
    recentForm: ['W', 'W', 'L', 'W', 'W']
  },
  {
    position: 4,
    team: teams[2], // RCB
    matchesPlayed: 10,
    wins: 6,
    losses: 4,
    noResult: 0,
    points: 12,
    netRunRate: '+0.321',
    recentForm: ['L', 'W', 'W', 'L', 'W']
  },
  {
    position: 5,
    team: teams[6], // RR
    matchesPlayed: 10,
    wins: 6,
    losses: 4,
    noResult: 0,
    points: 12,
    netRunRate: '+0.156',
    recentForm: ['W', 'L', 'W', 'W', 'L']
  },
  {
    position: 6,
    team: teams[3], // KKR
    matchesPlayed: 10,
    wins: 5,
    losses: 5,
    noResult: 0,
    points: 10,
    netRunRate: '-0.234',
    recentForm: ['L', 'L', 'W', 'L', 'W']
  },
  {
    position: 7,
    team: teams[4], // DC
    matchesPlayed: 10,
    wins: 4,
    losses: 6,
    noResult: 0,
    points: 8,
    netRunRate: '-0.456',
    recentForm: ['L', 'W', 'L', 'L', 'W']
  },
  {
    position: 8,
    team: teams[9], // LSG
    matchesPlayed: 10,
    wins: 4,
    losses: 6,
    noResult: 0,
    points: 8,
    netRunRate: '-0.678',
    recentForm: ['L', 'L', 'W', 'L', 'L']
  },
  {
    position: 9,
    team: teams[7], // SRH
    matchesPlayed: 10,
    wins: 3,
    losses: 7,
    noResult: 0,
    points: 6,
    netRunRate: '-0.891',
    recentForm: ['L', 'L', 'L', 'W', 'L']
  },
  {
    position: 10,
    team: teams[5], // PBKS
    matchesPlayed: 10,
    wins: 2,
    losses: 8,
    noResult: 0,
    points: 4,
    netRunRate: '-1.234',
    recentForm: ['L', 'L', 'L', 'L', 'W']
  }
];

export const matches: Match[] = [
  {
    id: 'match1',
    team1: teams[0], // CSK
    team2: teams[1], // MI
    date: '2025-07-19',
    time: '19:30',
    venue: 'M.A. Chidambaram Stadium, Chennai',
    status: 'live',
    currentScore: {
      team1Score: '165/4',
      team2Score: '78/3',
      overs: '12.4',
      currentBatting: 'MI'
    }
  },
  {
    id: 'match2',
    team1: teams[2], // RCB
    team2: teams[3], // KKR
    date: '2025-07-20',
    time: '15:30',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    status: 'upcoming'
  },
  {
    id: 'match3',
    team1: teams[4], // DC
    team2: teams[5], // PBKS
    date: '2025-07-20',
    time: '19:30',
    venue: 'Arun Jaitley Stadium, Delhi',
    status: 'upcoming'
  },
  {
    id: 'match4',
    team1: teams[6], // RR
    team2: teams[7], // SRH
    date: '2025-07-21',
    time: '19:30',
    venue: 'Sawai Mansingh Stadium, Jaipur',
    status: 'upcoming'
  },
  {
    id: 'match5',
    team1: teams[8], // GT
    team2: teams[9], // LSG
    date: '2025-07-22',
    time: '19:30',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    status: 'upcoming'
  }
];

export const liveMatchDetails: LiveMatchDetails = {
  match: matches[0],
  tossWinner: 'Chennai Super Kings',
  tossDecision: 'bat first',
  currentOver: '12.4',
  recentBalls: ['4', '1', '0', '6', '2', '1'],
  partnership: {
    runs: 45,
    balls: 32,
    batsmen: ['Rohit Sharma', 'Ishan Kishan']
  }
};