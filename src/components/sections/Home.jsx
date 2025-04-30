import React from "react";

export const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-500 leading-right">
          Hi, I'm Abdurrahimkhan
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-[43rem] mx-auto">
          A frontend Shopify developer and UI/UX designer. I create fast and
          good-looking online stores that work well on all devices. I make
          custom Shopify themes and focus on easy-to-use design to help
          businesses grow.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
