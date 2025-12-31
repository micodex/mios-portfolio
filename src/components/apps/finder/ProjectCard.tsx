import ImageSkeleton from "@/components/ui/ImageSkeleton";
import folderImage from "@/assets/images/folder.png";
import { type Project } from "@/data/finder";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="group flex flex-col justify-center gap-2 p-2 
      rounded-xl hover:bg-blue-50 cursor-pointer transition-colors
      duration-100 hover:outline-2 outline-blue-100 ease-in"
    >
      {/* thumbnail */}
      <a
        href={project.github || undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex flex-1 mb-2">
          {project.image ? (
            <ImageSkeleton
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={`${project.title} thumbnail`}
              className="w-80 self-center aspect-4/3 shadow-md"
            />
          ) : (
            // if no image, use default folder image
            <div className="flex flex-1">
              <ImageSkeleton
                src={folderImage}
                alt="thumbnail"
                className="w-40 self-center aspect-square"
              />
            </div>
          )}
        </div>

        {/* text info */}
        <div className="mt-auto flex flex-col ml-2">
          <span className="text-md font-semibold text-gray-700 truncate group-hover:text-blue-600">
            {project.title}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              {" "}
              ↗
            </span>
          </span>
          <span className="text-sm text-gray-500 line-clamp-2">
            {project.desc}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
