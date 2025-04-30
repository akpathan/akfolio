import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Liquid",
    "UI/UX",
    "SCSS",
    "Tailwindcss",
    "Wordpress",
    "Adobe Illustrator",
    "Figma",
    "ReactJs",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:hover:bg-white/5 transition-all">
            <p className="text-gray-300 mb-6">
              A frontend Shopify developer and UI/UX designer. I create fast and
              good-looking online stores that work well on all devices. I make
              custom Shopify themes and focus on easy-to-use design to help
              businesses grow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {Skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border ">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Computer Applications</strong> - Vidyabharti
                  Trust college of MCA & MBA ( 2021 - 2023 )
                </li>
                <li>
                  <strong>Bachelor of Computer Applications</strong> -
                  Vidyabharti Trust College of Business, Computer Science &
                  Research ( 2018 - 2021 )
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border ">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Shopify Frontend Developer at Dynamic Dreamz ( 2025 -
                    Present )
                  </h4>
                  <p>
                    I build custom Shopify storefronts, optimize user
                    interfaces, and turn designs into fast, responsive eCommerce
                    experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Freelance Developer ( 2023 - 2025 )
                  </h4>
                  <p>
                    I build custom, easy-to-use Shopify stores that help
                    businesses succeed online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
