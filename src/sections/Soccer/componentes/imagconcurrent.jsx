import React,{useState,useEffect} from "react";

import img1 from "../../../image/soccer/image-soccer-header/campeonchampions.jfif"
import img2 from "../../../image/soccer/image-soccer-header/campeonchampionsfe.webp"
import img3 from "../../../image/soccer/image-soccer-header/campeonmundialm.avif"
import img4 from "../../../image/soccer/image-soccer-header/mundialf.webp"


const imagenes =[img1,img2,img3,img4];

const Imagconcurrent = () => {
  
   const [currentImage, setCurrentImage] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImage((prevIndex) => (prevIndex + 1) % imagenes.length);
     }, 4000);
     return () => clearInterval(interval);
   }, []);



    return (
  <>
  
  <div className="relative flex justify-center items-center w-full py-5">
  {/* Imagen rotativa de fondo */}
  <div className="absolute inset-0 w-full h-[600px] overflow-hidden">
    <img
      src={imagenes[currentImage]}
      alt="rotating background"
      className="w-full h-full object-cover opacity-70 transition duration-1000"
    />
  </div>

  {/* Texto encima de la imagen */}
  <div className="mt-28 bg-white text-black p-8 rounded-lg shadow-md max-w-3xl w-full opacity-80 z-10">
    <h1 className="text-3xl font-semibold mb-4 text-center">
      Últimos Campeones del Fútbol Mundial
    </h1>
    <p className="text-lg text-center mb-2">
      🏆 <span className="font-bold">Champions League Masculina:</span> Real Madrid (2024)
    </p>
    <p className="text-lg text-center mb-2">
      🏆 <span className="font-bold">Champions League Femenina:</span> FC Barcelona (2024)
    </p>
    <p className="text-lg text-center mb-2">
      🌍 <span className="font-bold">Mundial Masculino:</span> Argentina (2022)
    </p>
    <p className="text-lg text-center">
      🌍 <span className="font-bold">Mundial Femenino:</span> España (2023)
    </p>
    <div className="mt-8 flex flex-col items-center animate-bounce">
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <p className="mt-2 text-blue-700 font-semibold text-center">
        Mira las ligas y campeonatos más importantes
      </p>
    </div>
  </div>
  
</div>


    
  </>
    );
  };
  
  
  export default Imagconcurrent;