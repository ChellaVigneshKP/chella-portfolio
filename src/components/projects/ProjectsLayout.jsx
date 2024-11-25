import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";
import { toast } from "react-toastify";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectsLayout = ({ name, description, date, demoLink }) => {
  const handleClick = useCallback(
    (e) => {
      if (!demoLink) {
        e.preventDefault();
        toast.error("Demo not available");
      }
    },
    [demoLink]
  );

  return (
    <ProjectLink
      variants={item}
      href={demoLink || "#"}
      target={demoLink ? "_blank" : "_self"}
      className={`text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg ${demoLink ? "" : "cursor-not-allowed"}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </ProjectLink>
  );
};

export default ProjectsLayout;
