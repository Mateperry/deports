import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos del menú

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280); // Detecta si es menor a 1280px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header principal */}
      <header className="fixed left-1/2 top-5 transform -translate-x-1/2 z-20 w-[90%] xl:w-[80%] bg-transparent backdrop-blur-md p-4 rounded-full shadow-md flex items-center justify-between text-white">
       <h1 className="text-base sm:text-lg xl:text-xl font-bold">Bienvenido a la historia del deporte</h1>

        {/* Botón de menú hamburguesa en móviles */}
        {isMobile ? (
          <button className="text-3xl" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
        ) : (
          // Menú de escritorio
          <nav className="hidden xl:flex">
            <ul className="flex space-x-10 text-lg font-medium">
              <li><Link to="/home" className="hover:underline">Inicio</Link></li>
              <li><Link to="/soccer" className="hover:underline">Fútbol</Link></li>
              <li><Link to="/basket" className="hover:underline">NBA</Link></li>
              <li><Link to="/f1" className="hover:underline">Fórmula 1</Link></li>
            </ul>
          </nav>
        )}

        {/* Botón de portafolio (en todos los modos ahora) */}
        {!isMobile && (
          <button
            className="hidden xl:block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
            onClick={() => window.open("https://portfoliomateocastro.framer.website/", "_blank")}
          >
            Portafolio Mateo Castro
          </button>
        )}
      </header>

      {/* Menú lateral en móviles */}
      {isMobile && (
        <>
          {/* Fondo oscuro detrás del menú */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[9998] ${menuOpen ? "block" : "hidden"}`}
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menú lateral en móviles */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-[9999] ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button className="absolute top-4 right-4 text-3xl" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>
            <nav className="mt-16">
              <ul className="flex flex-col space-y-4 text-lg font-medium px-6">
                <li><Link to="/home" className="block py-2">Inicio</Link></li>
                <li><Link to="/soccer" className="block py-2">Fútbol</Link></li>
                <li><Link to="/basket" className="block py-2">NBA</Link></li>
                <li><Link to="/f1" className="block py-2">Fórmula 1</Link></li>
                <li><Link to="/tennis" className="block py-2">Tenis</Link></li>
              </ul>

              {/* Botón de portafolio en móviles */}
              <div className="mt-8 px-6">
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
                  onClick={() => window.open("https://portfoliomateocastro.framer.website/", "_blank")}
                >
                  Portafolio Mateo Castro
                </button>
              </div>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Header;
