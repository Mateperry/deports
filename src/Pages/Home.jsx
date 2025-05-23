import React, { useState, useEffect } from "react";
import AccordionImage from "../componets/AccordionImage";
import CampeonesHome from "../componets/Campeoneshome";
import axios from "axios";
import img1 from "../image/image-home/f1homeinicio.jpeg";
import img2 from "../image/image-home/basketiniciohome.jpg";
import img3 from "../image/image-home/futboliniciohome.avif";
import img4 from "../image/image-home/tennis-iniciohome.jpg";

const API_KEY = "9fd571692f82a483ea8639b03945e3ee";
const BASE_URL = "https://v3.football.api-sports.io";

const images = [img1, img2, img3, img4];

const Home = () => {
  // Definir el estado para la imagen rotativa
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className="relative flex justify-center items-center w-full py-16">
        <div className="absolute inset-0 w-full h-[600px] overflow-hidden">
          <img
            src={images[currentImage]}
            alt="rotating background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="mt-28 bg-white text-black p-8 rounded-lg shadow-md max-w-3xl w-full opacity-80 z-9">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            ¡Bienvenido a la mejor página de Deportes!
          </h1>
          <p className="text-lg text-center mb-4">
            Descubre la historia y los últimos resultados de deportes como{" "}
            <span className="font-bold">Fútbol, Baloncesto</span> y{" "}
            <span className="font-bold">Fórmula 1</span>.
          </p>
          <p className="text-base text-center">
            Mantente al tanto de los próximos eventos y vive la emoción del
            deporte con nosotros.
          </p>
        </div>
      </div>
      <AccordionImage />
      <CampeonesHome/>
    </>
  );
};

export default Home;

