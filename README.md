# IPL T20 Live Dashboard

A responsive web application that displays real-time IPL T20 match information, points table, and match schedule. Built with Next.js, TypeScript, and Tailwind CSS with a mobile-first design approach.

## Features

- **Live Match Updates**: Real-time display of ongoing matches with scores, overs, and match details
- **Points Table**: Complete team standings with wins, losses, points, and net run rate
- **Match Schedule**: Comprehensive schedule view with upcoming and completed matches
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Auto-refresh**: Data updates automatically every 30 seconds
- **Mobile Tabs**: Easy navigation on mobile devices with tabbed interface

## Tech Stack

- **Next.js 14** - React framework with SSR/SSG capabilities
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js API Routes** - Backend API endpoints
- **Dummy Data** - Realistic IPL data for demonstration

## Project Structure

```
ipl-dashboard/
├── components/
│   ├── LiveMatch.tsx          # Live/upcoming match component
│   ├── PointsTable.tsx        # Points table component
│   ├── MatchSchedule.tsx      # Match schedule component
│   └── Loading.tsx            # Loading component
├── data/
│   └── dummyData.ts          # Dummy IPL data
├── pages/
│   ├── api/
│   │   └── scrape.ts         # API endpoint for data
│   ├── _app.tsx              # Next.js app wrapper
│   └── index.tsx             # Main dashboard page
├── styles/
│   └── globals.css           # Global styles
├── types/
│   └── index.ts              # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Create the project directory**:
   ```bash
   mkdir ipl-dashboard
   cd ipl-dashboard
   ```

2. **Create all the files** as provided in the artifacts above. Make sure to create the correct folder structure:
   - Create `components/` folder and add all component files
   - Create `data/` folder and add `dummyData.ts`
   - Create `pages/` folder with `index.tsx` and `_app.tsx`
   - Create `pages/api/` folder and add `scrape.ts`
   - Create `styles/` folder and add `globals.css`
   - Create `types/` folder and add `index.ts`
   - Add all config files in the root directory

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### GET `/api/scrape`

Returns IPL data including:
- Teams information
- Points table
- Match schedule
- Live match details

**Response Format**:
```json
{
  "success": true,
  "data": {
    "teams": [...],
    "pointsTable": [...],
    "matches": [...],
    "liveMatchDetails": {...},
    "lastUpdated": "2025-07-19T..."
  },
  "message": "IPL data fetched successfully"
}
```

## Features Breakdown

### 1. Live Match Display
- Shows current live match with real-time scores
- Displays upcoming match if no live match
- Live indicator with pulsing animation
- Recent balls and partnership details
- Toss information and current batting team

### 2. Points Table
- Complete team standings
- Color-coded positioning (green for playoffs, red for elimination)
- Recent form indicators
- Responsive design for mobile and desktop
- Net run rate with color coding

### 3. Match Schedule
- All matches with dates, times, and venues
- Status indicators (Live, Upcoming, Completed)
- Team logos and names
- Live scores for ongoing matches
- Mobile-optimized layout

### 4. Mobile-First Design
- Tabbed navigation on mobile devices
- Responsive components that adapt to screen size
- Touch-friendly interface
- Optimized for various screen sizes

## Data Structure

The application uses TypeScript interfaces for type safety:

- `Team` - Team information and branding
- `Match` - Match details and scores
- `PointsTableEntry` - Team standings
- `LiveMatchDetails` - Extended live match information

## Customization

### Adding Real Data Source
To connect to real IPL data:

1. Modify `/pages/api/scrape.ts` to fetch from actual IPL API
2. Update data parsing logic to match real API response
3. Adjust refresh intervals as needed

### Styling
- Colors can be customized in `tailwind.config.js`
- IPL brand colors are defined as custom colors
- Components use Tailwind utility classes for consistent styling

### Features
- Add more match statistics
- Include player information
- Add historical data
- Implement user preferences

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Auto-refresh every 30 seconds for live updates
- Efficient re-renders with React
- Optimized bundle size with Next.js
- Fast loading with static generation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. IPL is a trademark of the Board of Control for Cricket in India (BCCI).