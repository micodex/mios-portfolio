import { useState } from "react";
import { motion } from "motion/react";

// icons
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Lock,
  Share2,
  Plus,
  LayoutGrid,
  Globe,
} from "lucide-react";

// components
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

// types
import { type Project } from "@/data/finder";
export interface HistoryItem {
  type: "start" | "project" | "404";
  url: string;
  data?: Project; // To store project data if on a project page
}

const SafariApp = () => {
  // --- Navigation State ---
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "start", url: "start://favorites" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("start://favorites");
  const [isLoading, setIsLoading] = useState(false);
  const currentItem = history[currentIndex];

  // --- Navigation Logic ---

  const navigateTo = (newItem: HistoryItem) => {
    setIsLoading(true);
    // Slice history if we are in the middle of the stack and navigating to a new page
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newItem);

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setInputValue(newItem.url);

    // Fake loading delay
    setTimeout(() => setIsLoading(false), 700);
    console.log(history);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setInputValue(history[currentIndex - 1].url);
    }
  };

  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setInputValue(history[currentIndex + 1].url);
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock navigation
    navigateTo({ type: "404", url: inputValue });
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5F7]/92 backdrop-blur-xl">
      {/* Safari Toolbar */}
      <div className="h-12 bg-[#F5F5F7] border-b border-gray-300/50 flex items-center px-4 gap-4 shrink-0 z-10 relative">
        {/* -- navigation controls */}
        <div className="flex gap-4 p-1 text-gray-600 bg-gray-200 rounded-full">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="hover:bg-gray-300 hover:text-white active:scale-95 p-1 rounded-full transition-colors disabled:opacity-30 cursor-pointer "
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={handleForward}
            disabled={currentIndex === history.length - 1}
            className="hover:bg-gray-300 hover:text-white active:scale-95 p-1 rounded-full transition-colors disabled:opacity-30 cursor-pointer "
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>

        {/* -- adress bar */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex justify-center max-w-xl mx-auto"
        >
          <div className="group relative w-full h-8 bg-gray-300/30 hover:bg-gray-300/50 focus-within:bg-white focus-within:shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 rounded-full flex items-center justify-center transition-all cursor-text text-sm text-gray-700">
            {/* Lock Icon */}
            <div className="absolute left-4 text-gray-500">
              {isLoading ? (
                <RotateCw size={12} className="animate-spin" />
              ) : (
                <Lock size={12} className="group-focus-within:hidden" />
              )}
            </div>

            {/* Input */}
            <input
              className="bg-transparent border-none outline-none text-center w-full px-8 focus:text-left group-focus-within:text-left placeholder-gray-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={(e) => e.target.select()}
            />

            {/* Reload Icon (Right) */}
            <button
              type="button"
              onClick={handleRefresh}
              className="absolute right-4 p-0.5 rounded-md hover:bg-black/5 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-all"
            >
              <RotateCw size={12} className="text-gray-500" />
            </button>
          </div>
        </form>

        {/* -- right actions */}
        <div className="flex gap-3 text-gray-600">
          <Share2
            size={18}
            className="hover:text-blue-500 cursor-pointer transition-colors"
          />
          <Plus
            size={18}
            className="hover:text-blue-500 cursor-pointer transition-colors"
          />
          <LayoutGrid
            size={18}
            className="hover:text-blue-500 cursor-pointer transition-colors"
          />
        </div>
      </div>

      {/* browser content */}
      <div className="flex-1 overflow-y-auto relative scroll-smooth">
        {/* fake progress bar */}
        {isLoading && (
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200 z-50">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: ["10%", "30%", "100%"] }}
              className="h-full bg-blue-500"
            />
          </div>
        )}

        {currentItem.type === "start" && <HomePage onNavigate={navigateTo} />}
        {currentItem.type === "project" && (
          <ProjectPage project={currentItem.data as Project} />
        )}

        {/* 404 - External Link Mock */}
        {currentItem.type === "404" && (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8 text-center">
            <Globe size={64} className="mb-4 opacity-50" />
            <h2 className="text-xl font-bold text-gray-600 mb-2">
              Cannot connect to server
            </h2>
            <p className="max-w-md">
              Safari cannot open the page "{currentItem.url}" because the server
              where this page is located is not responding.
              <br />
              <br />
              (This is a mock browser. Only local project links work fully.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafariApp;
