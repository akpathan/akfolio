import React, { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { label: "Home", link: "#home", className: "h1" },
    { label: "About", link: "#about" },
    { label: "Projects", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-3xl font-bold text-white">
            A<span className="text-blue-500">K</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, link, className }, index) => (
              <a
                href={link}
                key={index}
                className={`text-gray-300 hover:text-white transition-colors ${className}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
