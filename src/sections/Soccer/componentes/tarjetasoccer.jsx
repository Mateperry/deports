import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../image/soccer/imgpsoccer/historiafutbol.png"
import img2 from "../../../image/soccer/imgpsoccer/grtandescompe.jpeg"
import img3 from "../../../image/soccer/imgpsoccer/jugadoreslen.jpeg"
import img4 from "../../../image/soccer/imgpsoccer/reglas.jpg"
import img5 from "../../../image/soccer/imgpsoccer/ligaespanolam.jpg"
import img6 from "../../../image/soccer/imgpsoccer/premierm.png"
import img7 from "../../../image/soccer/imgpsoccer/bundes.png"
import img8 from "../../../image/soccer/imgpsoccer/portuguesa.webp"
import img9 from "../../../image/soccer/imgpsoccer/ligue1.png"
import img10 from "../../../image/soccer/imgpsoccer/championsm.png"
import img11 from "../../../image/soccer/imgpsoccer/libertadores.jpeg"
import img12 from "../../../image/soccer/imgpsoccer/europale.png"
const sections = [
  {
    title: "Historia del Fútbol",
    description: "Descubre la evolución del fútbol, desde sus inicios hasta las competiciones actuales.",
    image: img1,
    link: "/historia_soccer"
  },
  {
    title: "Grandes Competiciones",
    description: "Explora la historia de los torneos más importantes a nivel mundial, desde la Copa del Mundo hasta la Champions League.",
    image: img2,
    link: "/competiciones_soccer"
  },
  {
    title: "Jugadores Legendarios",
    description: "Conoce a los futbolistas que marcaron historia y dejaron una huella imborrable en el deporte.",
    image: img3,
    link: "/jugadores_soccer"
  },
  {
    title: "Reglas del Juego",
    description: "Aprende sobre las normas y reglamentos oficiales que rigen el fútbol en todas sus competiciones.",
    image: img4,
    link: "/reglas_soccer"
  }
];

const ligasM =[
  {    
    title: "Liga Española",
    description: "Descubre las estadisticas de la Liga Española",
    image: img5,
    link: "/Liga_espanola"
    
  },
  {
  title: "Premier League",
  description: "Descubre las estadisticas de la Premier League ",
  image: img6,
  link: "/PremierLeagueHistory"
  },
  {
    title: "Bundesliga",
    description: "Descubre las estadisticas de la Bundesliga",
    image: img7,
    link: "/BundesligaHistory"
  },
  {
  title: "Liga Portugal",
  description: "Descubre las estadisticas de la Liga Portugal",
  image: img8,
  link: "/Liga_portuguesa"
  },
  {
    title: "Ligue 1",
    description: "Descubre las estadisticas de la Ligue 1",
    image: img9,
    link: "/Ligue1History"
  },
  {
    title: "Champions League",
    description: "Descubre las estadisticas de la Champions League",
    image: img10,
    link: "/"
  },
  {
    title: "Libertadores",
    description: "Descubre las estadisticas de la Libertadores",
    image: img11,
    link: "/"
  },
  {
    title: "Europa League",
    description: "Descubre las estadisticas de la Europa League",
    image: img12,
    link: "/"
  },
];


const Tarjetasoccer = () => {
  
  return (
<>
<div className="max-w-screen-xl mt-28 mx-auto p-6 bg-[#383838]  shadow-lg rounded-2xl" >
  {/* Seccion de historia */}
  <div className="max-w-7xl mt-1 mx-auto p-6  bg-[#252423] shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((section, index) => (
          <Link
            to={section.link}
            key={index}
            className="relative group block overflow-hidden rounded-xl shadow-lg"
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url('${section.image}')` }}
            ></div>

            {/* Capa oscura para mejor legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all"></div>

            {/* Contenido */}
            <div className="relative p-6 text-white flex flex-col items-center">
              <h2 className="text-xl font-bold text-center">{section.title}</h2>
              <p className="text-sm opacity-80 text-center">{section.description}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
                Ver más
              </button>
            </div>
          </Link>
        ))}
      </div>
      
  </div>

  {/* Seccion de Competiciones Masculinas Importantes */}
  <div className="max-w-7xl mt-5 mx-auto p-6 bg-[#252423] shadow-lg rounded-2xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {ligasM.map((liga, index) => (
      <Link
        to={liga.link}
        key={index}
        className="relative group block overflow-hidden rounded-xl shadow-lg"
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform scale-100 group-hover:scale-110"
          style={{ backgroundImage: `url('${liga.image}')` }}
        ></div>

        {/* Capa oscura para mejor legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all"></div>

        {/* Contenido */}
        <div className="relative p-6 text-white flex flex-col items-center">
          <h2 className="text-xl font-bold text-center">{liga.title}</h2>
          <p className="text-sm opacity-80 text-center">{liga.description}</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
                Ver más
              </button>
        </div>
      </Link>
    ))}
  </div>
  </div>




   

</div>
</>
  );
};


export default Tarjetasoccer;
