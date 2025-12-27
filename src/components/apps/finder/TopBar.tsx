import { ChevronRight, LayoutGrid, List, Search } from "lucide-react";

interface TopBarProps {
  activeTab: string;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const TopBar = ({ viewMode, onViewModeChange, activeTab }: TopBarProps) => {
  return (
    <div className="sticky top-0 h-12 border-b border-gray-200 flex items-center bg-white justify-between px-4">
      <div className="flex items-center gap-2 text-gray-500">
        <ChevronRight size={18} className="text-gray-300" />
        <span className="font-semibold text-gray-700 capitalize">
          {activeTab}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1 rounded transition-colors ${
              viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-200"
            }`}
          >
            <LayoutGrid size={14} className="text-gray-600" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-1 rounded transition-colors ${
              viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-200"
            }`}
          >
            <List size={14} className="text-gray-600" />
          </button>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-2 top-1.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs w-32 focus:w-48 transition-all outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
