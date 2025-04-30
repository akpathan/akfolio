import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-500 leading-right">
            Hi, I'm Abdurrahimkhan
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-[43rem] mx-auto">
            I design simple, fast, and beautiful Shopify stores.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white py-3 px-6 rounded-[7px] font-medium transition relative overflow-hidden hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-600/50 text-blue-600 py-3 px-6 rounded-[7px] font-medium transition-all duration-200 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
