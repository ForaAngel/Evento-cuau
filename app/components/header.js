// /components/Navbar.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full fixed top-0 bg-white shadow-md z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo o título a la izquierda */}
        <div className="text-xl font-bold text-gray-900">Guardián Sierra</div>

        {/* Menú hamburguesa en móviles */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Enlaces a la derecha (versión desktop) */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <a href="#about" className="hover:text-green-600 transition-colors">
            About
          </a>
          <a href="#video" className="hover:text-green-600 transition-colors">
            Video
          </a>
          <a href="#info" className="hover:text-green-600 transition-colors">
            Información
          </a>
        </div>

        {/* Menú desplegable en móviles */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
            <a href="#about" className="text-gray-900 hover:text-green-600">
              About
            </a>
            <a href="#video" className="text-gray-900 hover:text-green-600">
              Video
            </a>
            <a href="#info" className="text-gray-900 hover:text-green-600">
              Información
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
