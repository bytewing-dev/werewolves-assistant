# 5. React Components - Simplified Version

## 5.1 Project Structure

### Basic Layout
```
components/
├── layout/
│   ├── Header.tsx
│   └── Layout.tsx
├── game/
│   ├── PlayerList.tsx
│   ├── RoleCard.tsx
│   ├── GameTimer.tsx
│   └── PhaseControl.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    └── Modal.tsx
```

### Pages Structure
```
pages/
├── index.tsx                # Homepage
├── games/
│   ├── new.tsx             # Create new game
│   └── [id].tsx            # Game view
└── _app.tsx                # App wrapper
```

## 5.2 Core Components

### Layout Components
```typescript
// components/layout/Layout.tsx
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};
```

### Game Components

#### PlayerList
```typescript
interface Player {
  id: string;
  name: string;
  isAlive: boolean;
}

const PlayerList = ({ 
  players,
  onPlayerClick
}: { 
  players: Player[];
  onPlayerClick?: (player: Player) => void;
}) => {
  return (
    <div className="space-y-2">
      {players.map(player => (
        <div 
          key={player.id}
          className={`p-2 border rounded ${!player.isAlive ? 'bg-gray-200' : ''}`}
          onClick={() => onPlayerClick?.(player)}
        >
          {player.name} {!player.isAlive && '(Dead)'}
        </div>
      ))}
    </div>
  );
};
```

#### RoleCard
```typescript
interface RoleCardProps {
  role: {
    name: string;
    description: string;
  };
  isRevealed: boolean;
  onReveal?: () => void;
}

const RoleCard = ({ role, isRevealed, onReveal }: RoleCardProps) => {
  return (
    <div 
      className="border rounded p-4 cursor-pointer"
      onClick={onReveal}
    >
      {isRevealed ? (
        <>
          <h3 className="font-bold">{role.name}</h3>
          <p>{role.description}</p>
        </>
      ) : (
        <div className="text-center">Click to reveal role</div>
      )}
    </div>
  );
};
```

#### GameTimer
```typescript
const GameTimer = ({ 
  duration,
  onTimeUp 
}: { 
  duration: number;
  onTimeUp: () => void;
}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeUp]);

  return <div>Time: {time}s</div>;
};
```

### UI Components

#### Button
```typescript
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded disabled:opacity-50";
  const variantStyle = variant === 'primary' 
    ? "bg-blue-500 text-white" 
    : "bg-gray-200 text-gray-800";

  return (
    <button
      className={`${baseStyle} ${variantStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

#### Modal
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-4 max-w-md w-full">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};
```

## 5.3 Game State Management

### Simple Context
```typescript
interface GameState {
  players: Player[];
  phase: 'day' | 'night';
  isGameActive: boolean;
}

const GameContext = React.createContext<{
  state: GameState;
  actions: {
    addPlayer: (player: Player) => void;
    togglePhase: () => void;
    eliminatePlayer: (playerId: string) => void;
  };
} | null>(null);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<GameState>({
    players: [],
    phase: 'day',
    isGameActive: false
  });

  const actions = {
    addPlayer: (player: Player) => {
      setState(prev => ({
        ...prev,
        players: [...prev.players, player]
      }));
    },
    togglePhase: () => {
      setState(prev => ({
        ...prev,
        phase: prev.phase === 'day' ? 'night' : 'day'
      }));
    },
    eliminatePlayer: (playerId: string) => {
      setState(prev => ({
        ...prev,
        players: prev.players.map(p => 
          p.id === playerId ? { ...p, isAlive: false } : p
        )
      }));
    }
  };

  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  );
};
```

## 5.4 Component Usage Example

```typescript
// pages/games/[id].tsx
const GamePage = () => {
  const { state, actions } = useContext(GameContext);
  
  return (
    <Layout>
      <div className="space-y-4">
        <PlayerList 
          players={state.players}
          onPlayerClick={actions.eliminatePlayer}
        />
        
        <GameTimer 
          duration={300}
          onTimeUp={actions.togglePhase}
        />
        
        <Button 
          onClick={actions.togglePhase}
          variant="primary"
        >
          Next Phase
        </Button>
      </div>
    </Layout>
  );
};
```