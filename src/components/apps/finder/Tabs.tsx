import ProjectCard from "./ProjectCard";
import { MY_SKILLS, PROJECTS } from "@/data/finder";
import { ArrowUpRight, Download } from "lucide-react";

export const AboutTab = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 text-gray-500 space-y-4">
      <div className="w-24 h-24 overflow-hidden rounded-full flex items-center justify-center mb-4">
        <img
          draggable={false}
          loading="lazy"
          src="src/assets/images/profile.jpg"
          alt="profile image"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Milad Gharibi</h2>
      <p className="max-w-md">
        I am a creative developer building interfaces that feel alive. Welcome
        to my digital garden.
      </p>
      <button className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer mt-4">
        Read full bio <ArrowUpRight size={14} />
      </button>
    </div>
  );
};

// ---

export const ProjectsTab = () => (
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
);

// ---

export const SkillsTab = () => (
  <div className="space-y-6">
    {MY_SKILLS.map(({ category, skills }) => (
      <div key={category}>
        <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
          {category}
        </h3>

        {/* skills in a category */}
        <div className="grid grid-cols-7">
          {skills.map(({ label, icon, level }) => (
            <div
              key={label}
              className="group flex flex-col gap-2 items-center p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-16">
                <img
                  draggable={false}
                  src={`src/assets/files/${icon}`}
                  alt={`${label} icon`}
                  loading="lazy"
                />
              </div>
              <div className="text-sm font-medium text-gray-700 text-center">
                <span className="block group-hover:text-blue-600">{label}</span>
                <span className="text-xs text-gray-400">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ---

export const ResumeTab = () => (
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
        <span className="text-sm font-medium text-gray-700">{file}</span>
        <span className="text-xs text-gray-400 ml-auto">2.4 MB</span>
      </div>
    ))}
  </div>
);
