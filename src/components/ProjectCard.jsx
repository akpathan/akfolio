import React from "react";

const ProjectCard = ({ ptitle, pdesc, plink, tech }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      <h3 className="text-xl font-bold mb-2">{ptitle}</h3>
      <p className="text-gray-400 mb-4">{pdesc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((skill, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a
          href={plink}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project ➡
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
