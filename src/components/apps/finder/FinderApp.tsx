import {
  ArrowUpRight,
  ChevronRight,
  Download,
  LayoutGrid,
  List,
  Search,
  User,
} from "lucide-react";

import { useState } from "react";
import { PROJECTS, SIDEBAR_ITEMS } from "@/data/finder";

import { customScrollbar } from "@/lib/scrollbar";
import ProjectCard from "./ProjectCard";
import SkillsView from "./SkillsView";

const FinderApp = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex h-full w-full text-gray-900 bg-white/70 backdrop-blur-2xl">
      {/* --- side bar --- */}
      <aside className="w-49 px-2 py-4 h-full">
        {SIDEBAR_ITEMS.map(({ category, items }) => (
          <div key={category} className="mb-4 px-2 select-none">
            <h3 className="mb-1 pl-3 text-[10px] text-gray-400 font-bold tracking-wide uppercase">
              {category}
            </h3>
            {items.map(({ label, id, icon: Icon, color }) => (
              <button
                key={id}
                id="item"
                onClick={() => setActiveTab(id)}
                className={`
                    w-full px-3 py-1.5 flex items-center gap-2.5 text-sm transition-colors rounded-lg
                    ${
                      activeTab === id
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:bg-black/5 active:bg-black/10"
                    }
                  `}
              >
                <Icon
                  size={16}
                  className={activeTab === id ? "text-white" : color}
                />
                <span>{label}</span>
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* --- main --- */}
      <div className="flex flex-1 flex-col bg-white/90">
        {/* fiexed toolabr */}
        <div className="h-12 border-b border-gray-200 flex items-center bg-white/50 justify-between px-4 sticky top-0">
          <div className="flex items-center gap-2 text-gray-500">
            <ChevronRight size={18} className="text-gray-300" />
            <span className="font-semibold text-gray-700 capitalize">
              {activeTab}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 p-0.5 rounded-lg border border-gray-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                <LayoutGrid size={14} className="text-gray-600" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                <List size={14} className="text-gray-600" />
              </button>
            </div>
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2 top-1.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                className="pl-7 pr-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs w-32 focus:w-48 transition-all outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/*  tab content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${customScrollbar} flex-1 p-4 overflow-y-auto`}
        >
          {/* render tabs */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-gray-500 text-xs font-bold mb-4 px-1">
                  2025 Projects
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {PROJECTS.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-gray-500 text-xs font-bold mb-4 px-1">
                  Mini Projects
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-70">
                  {PROJECTS.slice(0, 2).map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && <SkillsView />}

          {activeTab === "about" && (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500 space-y-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <User size={48} className="text-gray-300" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Milad Gharibi
              </h2>
              <p className="max-w-md">
                I am a creative developer building interfaces that feel alive.
                Welcome to my digital garden.
              </p>
              <button className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-4">
                Read full bio <ArrowUpRight size={14} />
              </button>
            </div>
          )}

          {activeTab === "resume" && (
            <div className="flex flex-col gap-2">
              {[
                "Resume_2025.pdf",
                "Cover_Letter.docx",
                "Portfolio_Assets.zip",
                "Assets.zip",
              ].map((file, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg cursor-pointer group even:bg-gray-100"
                >
                  <Download
                    size={20}
                    className="text-gray-400 group-hover:text-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {file}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">2.4 MB</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinderApp;
