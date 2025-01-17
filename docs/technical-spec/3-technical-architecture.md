# 3. Technical Architecture - Simplified Version

## 3.1 Frontend Architecture

### Next.js Setup
- Use Pages Router (simpler than App Router)
- Simple file-based routing
- Basic page structure

```
pages/
├── index.tsx                # Homepage
├── games/
│   ├── new.tsx             # New game creation
│   └── [id].tsx            # Game view
└── _app.tsx                # Main app wrapper
```

### UI Components
1. **Basic Components**
   ```typescript
   // Simple button component
   const Button = ({ 
     onClick, 
     children 
   }: { 
     onClick: () => void; 
     children: React.ReactNode 
   }) => (
     <button
       onClick={onClick}
       className="px-4 py-2 bg-blue-500 text-white rounded"
     >
       {children}
     </button>
   );
   ```

2. **Tailwind Usage**
   - Focus on basic utility classes
   - Simple responsive design
   - Standard color palette

### State Management
1. **React useState for Local State**
   ```typescript
   // Example game state
   const [players, setPlayers] = useState<Player[]>([]);
   const [currentPhase, setCurrentPhase] = useState<'day' | 'night'>('day');
   ```

2. **React Context for Global State**
   ```typescript
   // Simple game context
   interface GameState {
     players: Player[];
     phase: 'day' | 'night';
     isGameActive: boolean;
   }
   ```

## 3.2 Backend Architecture

### API Routes
1. **Simple Endpoints**
   ```typescript
   // pages/api/games/index.ts
   export default async function handler(req, res) {
     if (req.method === 'POST') {
       // Create new game
       const game = await prisma.game.create({
         data: req.body
       });
       return res.json(game);
     }
     // Get games list
     const games = await prisma.game.findMany();
     return res.json(games);
   }
   ```

2. **Basic CRUD Operations**
   - Create game
   - Update game state
   - Get game details
   - List active games

### Database
1. **Prisma Setup**
   - Basic schema
   - Simple relationships
   - Essential models only

2. **Data Operations**
   ```typescript
   // Example database operation
   const createGame = async (data) => {
     try {
       return await prisma.game.create({
         data: data
       });
     } catch (error) {
       console.error('Error creating game:', error);
       throw error;
     }
   };
   ```

## 3.3 Deployment

### Vercel Setup
1. **Basic Configuration**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/next"
       }
     ]
   }
   ```

2. **Environment Variables**
   ```env
   DATABASE_URL="your-database-url"
   NEXT_PUBLIC_APP_URL="your-app-url"
   ```

### Database Hosting
1. **Vercel Postgres**
   - Free tier usage
   - Basic configuration
   - Simple connection

2. **Data Backup**
   - Manual backups initially
   - Basic data safety

## 3.4 Development Tools

### Essential Tools
1. **VS Code Extensions**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

2. **Development Scripts**
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint"
     }
   }
   ```

### Error Handling
1. **Basic Error States**
   ```typescript
   interface BaseError {
     message: string;
     code?: string;
   }
   ```

2. **Simple Error Display**
   ```typescript
   const ErrorMessage = ({ message }: { message: string }) => (
     <div className="text-red-500 p-2">
       Error: {message}
     </div>
   );
   ```