import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../../image/f1/imagenes-header-f1/primera.jpg";    
import img2 from "../../../image/f1/imagenes-header-f1/segunda.jpg";
import img3 from "../../../image/f1/imagenes-header-f1/tercera.jpg";
import img4 from "../../../image/f1/imagenes-header-f1/cuarta.jpg";

const imagenes = [img1, img2, img3, img4];

const Imagenescurrentf1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagenes.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex justify-center items-center overflow-hidden mb-10">
      {/* Imagen rotativa con animación */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={imagenes[currentImage]}
          alt="Fondo de F1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Texto encima */}
      <div className="z-10 bg-white bg-opacity-80 text-black p-6 md:p-8 rounded-xl shadow-lg max-w-3xl w-[90%] text-center mt-32">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">🏁 Últimos Campeones de la F1</h1>
        <p className="text-lg md:text-xl mb-2">
          🏆 <span className="font-semibold">F1:</span> Max Verstappen (2024)
        </p>
        <p className="text-lg md:text-xl mb-2">
          🌍 <span className="font-semibold">MVP:</span> Max Verstappen (2024)
        </p>

        <div className="mt-6 animate-bounce flex justify-center">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Imagenescurrentf1;
