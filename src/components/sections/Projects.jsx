import React from "react";
import ProjectCard from "../ProjectCard";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    ptitle: "Shopify Store",
    pdesc: "Design full costom theme from scratch to finish",
    plink: "https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3026s",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "SCSS"],
  },
  {
    ptitle: "Shopify Store",
    pdesc: "Design full costom theme from scratch to finish",
    plink: "https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3026s",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "SCSS"],
  },
  {
    ptitle: "Shopify Store",
    pdesc: "Design full costom theme from scratch to finish",
    plink: "https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3026s",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "SCSS"],
  },
  {
    ptitle: "Shopify Store",
    pdesc: "Design full costom theme from scratch to finish",
    plink: "https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3026s",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "SCSS"],
  },
  {
    ptitle: "Shopify Store",
    pdesc: "Design full costom theme from scratch to finish",
    plink: "https://www.youtube.com/watch?v=LGdPMf-SgBA&t=3026s",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "SCSS"],
  },
];

export const Projects = () => {
  return (
    <section
      id="work"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ ptitle, pdesc, plink, tech }, key) => (
              <ProjectCard
                key={key}
                ptitle={ptitle}
                pdesc={pdesc}
                plink={plink}
                tech={tech}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
