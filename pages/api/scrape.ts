import { NextApiRequest, NextApiResponse } from 'next';
import { teams, pointsTable, matches, liveMatchDetails } from '../../data/dummyData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Simulate API delay
    const delay = Math.random() * 1000 + 500; // 0.5-1.5 seconds
    
    setTimeout(() => {
      const data = {
        teams,
        pointsTable,
        matches,
        liveMatchDetails,
        lastUpdated: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        data,
        message: 'IPL data fetched successfully'
      });
    }, delay);

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch IPL data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}