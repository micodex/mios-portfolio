import { PROJECTS } from "@/data/finder";
import { FAVORITES, type FaveLink } from "@/data/safari";

import { ChevronRight, LayoutGrid } from "lucide-react";
import { type HistoryItem } from "./SafariApp";

interface HomePageProps {
  onNavigate: (newItem: HistoryItem) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => (
  <div className="flex flex-col items-center py-16">
    <div className="mb-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 drop-shadow-sm">
        Favorites
      </h1>
    </div>

    {/* Grid of Favorites */}
    <div className="grid grid-cols-4 gap-6 w-full max-w-3xl">
      {FAVORITES.map((fav: FaveLink) => (
        <button
          key={fav.id}
          onClick={() => onNavigate({ type: "404", url: fav.url })} // Mock link
          className="group flex flex-col items-center gap-3 p-4"
        >
          <div
            className={`w-16 h-16 rounded-2xl ${fav.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-transform hover:scale-120 active:scale-90 cursor-pointer`}
          >
            <fav.icon size={32} className="text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">{fav.title}</span>
        </button>
      ))}
    </div>

    {/* Projects Section */}
    <div className="mt-12 w-full max-w-3xl">
      <h2 className="text-xl font-bold text-gray-800 mb-6 px-2">
        Recent Projects
      </h2>
      <div className="space-y-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              onNavigate({
                type: "project",
                url: `project://${project.id}`,
                data: project,
              })
            }
            className="flex items-center gap-4 p-3 rounded-xl bg-white/90 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}
            >
              <LayoutGrid size={18} className="text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-800 truncate">
                {project.title}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {project.desc}
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-gray-300 group-hover:text-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;
