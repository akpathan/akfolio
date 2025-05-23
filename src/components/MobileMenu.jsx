import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { label: "Home", link: "#home", className: "h1" },
    { label: "About", link: "#about" },
    { label: "Projects", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-blue-500 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer text-2xl"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${className} ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
