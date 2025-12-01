import { createContext, useContext, useReducer } from "react";

// --- 1. Define Types ---
export interface AppData {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  z: number;
  content: string;
}

interface OSState {
  apps: AppData[];
  maxZ: number;
  activeAppId: string | null;
}

// --- 2. Define Actions (The commands you can send) ---
type Action =
  | { type: "OPEN"; id: string }
  | { type: "CLOSE"; id: string }
  | { type: "MINIMIZE"; id: string }
  | { type: "MAXIMIZE"; id: string }
  | { type: "FOCUS"; id: string }
  | { type: "UPDATE_POS"; id: string; x: number; y: number };

// --- 3. Initial State ---
const initialApps: AppData[] = [
  {
    id: "safari",
    title: "Safari",
    icon: "safari.webp",
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    x: 100,
    y: 50,
    z: 1,
    content: "Safari Browser",
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "terminal.webp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 200,
    y: 150,
    z: 1,
    content: "Bash Terminal",
  },
  {
    id: "files",
    title: "Files",
    icon: "finder.webp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 300,
    y: 250,
    z: 1,
    content: "File Explorer",
  },
  {
    id: "mail",
    title: "Mail",
    icon: "mail.webp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 400,
    y: 350,
    z: 1,
    content: "Contact me",
  },
  {
    id: "notes",
    title: "Notes",
    icon: "notes.webp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 500,
    y: 450,
    z: 1,
    content: "Notes",
  },
  {
    id: "settings",
    title: "Settings",
    icon: "settings.webp",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 600,
    y: 550,
    z: 1,
    content: "System Settings",
  },
];

const initialState: OSState = {
  apps: initialApps,
  maxZ: 10,
  activeAppId: "safari",
};

// --- 4. The Reducer (The Brain) ---
const osReducer = (state: OSState, action: Action): OSState => {
  switch (action.type) {
    case "OPEN": {
      // Logic: If closed, open it. If minimized, restore. Always bring to front.
      const nextZ = state.maxZ + 1;
      return {
        ...state,
        maxZ: nextZ,
        activeAppId: action.id,
        apps: state.apps.map((app) =>
          app.id === action.id
            ? { ...app, isOpen: true, isMinimized: false, z: nextZ }
            : app
        ),
      };
    }
    case "CLOSE":
      return {
        ...state,
        activeAppId: null, // Reset active app
        apps: state.apps.map((app) =>
          app.id === action.id
            ? { ...app, isOpen: false, isMaximized: false }
            : app
        ),
      };
    case "MINIMIZE":
      return {
        ...state,
        activeAppId: null,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, isMinimized: true } : app
        ),
      };
    case "MAXIMIZE":
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, isMaximized: !app.isMaximized } : app
        ),
      };
    case "FOCUS": {
      const nextZ = state.maxZ + 1;
      return {
        ...state,
        maxZ: nextZ,
        activeAppId: action.id,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, z: nextZ } : app
        ),
      };
    }
    case "UPDATE_POS":
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === action.id ? { ...app, x: action.x, y: action.y } : app
        ),
      };
    default:
      return state;
  }
};

// --- 5. Create Context ---
const OSContext = createContext<
  { state: OSState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const OSProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(osReducer, initialState);

  return (
    <OSContext.Provider value={{ state, dispatch }}>
      {children}
    </OSContext.Provider>
  );
};

// Custom Hook for easy access
export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error("useOS must be used within an OSProvider");
  return context;
};
