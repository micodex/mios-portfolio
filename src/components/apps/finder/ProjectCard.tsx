import { type Project } from "@/data/finder";
import folderImage from "@/assets/images/folder.png";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="group flex flex-col justify-center gap-2 p-2 
      rounded-xl hover:bg-blue-50 cursor-pointer transition-colors
      duration-100 hover:outline-2 outline-blue-100 ease-in"
    >
      {/* thumbnail */}
      {project.image ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1"
        >
          <ImageSkeleton
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={`${project.title} thumbnail`}
            className="w-80 self-center"
          />
        </a>
      ) : (
        // if no image, use default folder image
        <div className="flex flex-1">
          <ImageSkeleton
            src={folderImage}
            alt="thumbnail"
            className="w-40 self-center"
          />
        </div>
      )}

      {/* text info */}
      <div className="mt-auto flex flex-col ml-2">
        <span className="text-sm font-semibold text-gray-700 truncate group-hover:text-blue-600">
          {project.title}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            {" "}
            ↗
          </span>
        </span>
        <span className="text-xs text-gray-500 line-clamp-2">
          {project.desc}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
