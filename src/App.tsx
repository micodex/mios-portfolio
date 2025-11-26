import "./App.css";
import Window from "./components/Window";
import { Terminal, Globe, type LucideIcon } from "lucide-react";

import { useState } from "react";

// types
interface AppData {
  id: string;
  title: string;
  icon: LucideIcon;
  isOpen: boolean;
  initialX: number;
  initialY: number;
  content: string;
  z: number;
}

function Desktop() {
  // State: Which apps exist and are they open?
  const [maxIndex, setMaxIndex] = useState(2);
  const [apps, setApps] = useState<AppData[]>([
    {
      id: "safari",
      title: "Safari",
      icon: Globe,
      isOpen: true,
      initialX: 100,
      initialY: 50,
      content: "Welcome to the internet!",
      z: 1,
    },
    {
      id: "terminal",
      title: "Terminal",
      icon: Terminal,
      isOpen: true,
      initialX: 200,
      initialY: 150,
      content: "echo 'Hello World'",
      z: 1,
    },

    {
      id: "Files",
      title: "files",
      icon: Terminal,
      isOpen: true,
      initialX: 200,
      initialY: 150,
      content: "echo 'Hello World'",
      z: 1,
    },
  ]);

  // Toggle App Function
  const toggleApp = (id: string) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, isOpen: !app.isOpen } : app))
    );
  };

  const bringToFront = (id: string) => {
    setMaxIndex((prevIndex) => {
      const zIndex = prevIndex + 1;
      setApps((prevApps) =>
        prevApps.map((app) => (app.id === id ? { ...app, z: zIndex } : app))
      );
      return zIndex;
    });
  };

  return (
    <div className="bg-violet-200  h-dvh">
      {/* Render Windows */}
      {apps.map((app) => (
        <Window
          key={app.id}
          id={app.id}
          title={app.title}
          x={app.initialX}
          y={app.initialY}
          isOpen={app.isOpen}
          content={app.content}
          onClose={toggleApp}
          onFocus={bringToFront}
          z={app.z}
        />
      ))}

      {/* Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex gap-4 shadow-xl">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => toggleApp(app.id)}
            className={`p-3 rounded-xl transition-all duration-200 ${
              app.isOpen
                ? "bg-white/40 shadow-inner"
                : "bg-transparent hover:bg-white/10 hover:-translate-y-2"
            }`}
          >
            <app.icon size={32} className="text-gray-500 drop-shadow-md" />
            {/* Simple dot indicator for open apps */}
            {app.isOpen && (
              <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1 shadow-sm" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Desktop;
