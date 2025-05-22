import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../../image/f1/imagenestarjetasf1/Historiaaf1.jpg";
import img2 from "../../../image/f1/imagenestarjetasf1/Historiaf1.jpg";
import img3 from "../../../image/f1/imagenestarjetasf1/pilotosf1.jpg";
import img4 from "../../../image/f1/imagenestarjetasf1/otrasf1.jpg";
import img5 from "../../../image/f1/imagenestarjetasf1/reglasf1.jpg";
const infors = [
  {
    title: "Historia de la F1",
    description: "Descubre lo mejor de la historia de la Formula 1",
    image: img1,
    link: "/historia_f1"
  },
  {
    title: "Últimas Estadísticas de F1",
    description: "Explora las estadísticas de la F1",
    image: img2,
    link: "/estadisticas"
  },
  {
    title: "Mejores pilotos F1",
    description: "Mira quienes son los mejores pilotos de la Fórmula 1",
    image: img3,
    link: "/toppilotos"
  },
  {
    title: "Categorías F2, F3, F4 Y MÁS",
    description: "Revisa más categorías relacionadas a la F1",
    image: img4,
    link: "/juniorpilots"
  },
  {
    title: "Reglas de la F1",
    description: "Descubre las reglas de la Fórmula 1",
    image: img5,
    link: "/reglasf1"
  }
];

const Tarjetasf1 = () => {
  return (
    <div className="max-w-5xl mt-2 mx-auto p-6 bg-black shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {infors.map((infor, index) => (
          <Link
            to={infor.link}
            key={index}
            className="relative group block overflow-hidden rounded-xl shadow-lg"
          >
            {/* Imagen de fondo (más grande ahora) */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
              style={{
                backgroundImage: `url('${infor.image}')`
              }}
            ></div>

            {/* Capa de oscuridad */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-500"></div>

            {/* Contenido */}
            <div className="relative z-10 p-6 text-white flex flex-col justify-center items-center min-h-[280px]">
              <h2 className="text-2xl font-bold text-center">{infor.title}</h2>
              <p className="text-sm opacity-90 text-center mt-2">{infor.description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                Ver más
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tarjetasf1;
