import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../image/soccer/image-acordion/futbolh-acordion.avif";
import img2 from "../image/soccer/image-acordion/futbole-acordion.jpg";
import img3 from "../image/soccer/image-acordion/basketh-acordion.jpg";
import img4 from "../image/soccer/image-acordion/baskete-acordion.jpg";
import img5 from "../image/soccer/image-acordion/f1h-acordion.jpg";
import img6 from "../image/soccer/image-acordion/f1e-acordion.jpg";


const sectionsimg = [
  { 
    title: "Historia del futbol",
    image: img1, 
    description: "Viajemos a la historia del futbol",
    link: "/historia_soccer"
  },
  {
    title: "Resultados y Estadisticas de Futbol",
    image: img2,
    link: "/soccer"
  },
  { 
    title: "Historia del baloncesto",
    image: img3,
    link: "/historia_basket"
  },
  {
    title: "Resultados y Estadisticas de Basloncesto",
    image: img4,
    link: "/basket"
  },
  { 
    title: "Historia de la formula 1 ",
    image: img5,
    link: "/historia_f1"
  },
  {
    title: "Resultados y Estadisticas de formula 1",
    image: img6,
    link: "/estadisticas"
  },

];

const AccordionImage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-36 w-full px-2 py-5 flex flex-wrap justify-center items-center gap-2">
      {sectionsimg.map((sectionimg, index) => (
        <Link
          to={sectionimg.link}
          key={index}
          className="relative group block overflow-hidden rounded-xl shadow-lg"
        >
          <div
            className="relative overflow-hidden transition-all duration-500 cursor-pointer rounded-xl"
            onClick={() => handleToggle(index)}
          >
            <div
              className={`relative overflow-hidden transition-all duration-500
                ${
                  activeIndex === index
                    ? "w-[260px] h-[350px] sm:w-[300px] sm:h-[400px]"
                    : "w-[120px] h-[200px] sm:w-[150px] sm:h-[400px]"
                }
                md:group-hover:w-[180px] md:group-hover:h-[420px]`}
            >
              <img
                src={sectionimg.image}
                alt={`accordion-image-${index}`}
                className="w-full h-full object-cover transition-all duration-500 rounded-xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 md:hover:bg-opacity-60 transition-opacity duration-300">
              <h3 className="text-white text-sm sm:text-[15px] font-semibold text-center px-2">
                {sectionimg.title}
              </h3>
            </div>
          </div>


        </Link>
      ))}
    </div>
  );
};

export default AccordionImage;
