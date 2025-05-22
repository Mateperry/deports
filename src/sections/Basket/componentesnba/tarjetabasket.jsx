import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../image/basket/imgtarjetas/historianba.jpg";
import img2 from "../../../image/basket/imgtarjetas/trofeonba.png";
import img3 from "../../../image/basket/imgtarjetas/reglasnba.jpg";
import img4 from "../../../image/basket/imgtarjetas/jugadores.jpg";
import img5 from "../../../image/basket/imgtarjetas/equiposnba.jpg"; 
import img6 from "../../../image/basket/imgtarjetas/allstarnba.jpg";
const datos =[
  {
    title : "Historia de la NBA y WNBA",
    description :"Explora la rica historia de la NBA y la WNBA, desde sus inicios hasta su evolución actual.",
    image: img1,
    link: "/historia_basket"
  },
  {
    title : "Ultimos campeones de la NBA y WNBA",
    description :"Descubre quiénes son los últimos campeones de la NBA y la WNBA.",
    image: img2,
    link: "/campeones_basket"
  },
{
    title : "Reglas NBA y WNBA",
    description :"Aprende las reglas básicas de la NBA y la WNBA.",
    image: img3,
    link: "/rulesnba"
  },
]

const tarjetas =  [
{
    title : "Equipos NBA y WNBA",
    description :"Descubre los equipos que forman parte de la NBA y la WNBA.",
    image: img5,
    link: "/euiposnbaw"
  },{
    title : "All-Star y eventos especiales",
    description :"Explora los eventos especiales de la NBA y la WNBA, incluyendo el All-Star Game.",
    image: img6,
    link: "/AllStarAndSpecialEvents"
  },  {
    title : "Jugadores históricos de la NBA y WNBA",
    description :"Conoce a los jugadores que han dejado huella en la historia de la NBA y la WNBA.", 
    image: img4,
    link: "/JugadoresHistoricos"
  }
]
const Tarjetabasket = () => {
 // bg-[#252423]

  return (
    <>
<div className="max-w-screen-xl mt-28 mx-auto p-6 bg-[#363635]  shadow-lg rounded-2xl" >
   {/*Tarjetas de historia de nba y wnba*/}
    <div className="max-w-7xl mt-2 mx-auto p-6 bg-[#252423] shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {datos.map((dato , index)=>(
          <Link
           to={dato.link}
          key={index} 
          className="relative group block overflow-hidden rounded-xl shadow-lg"
          >
          <div
          className="absolute inset-0 bg-cover bg-center transition-transform scale-100 group-hover:scale-110"
          style={{ backgroundImage: `url('${dato.image}')` }}
          ></div>
           <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all"></div>

            {/* Contenido */}
            <div className="relative p-6 text-white flex flex-col items-center">
            <h2 className="text-xl font-bold text-center">{dato.title}</h2>
            <p className="text-sm opacity-80 text-center">{dato.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
                 Ver más
            </button>
            </div>
         </Link> 
        ))}
      </div>
    </div>
  {/*TARJETAS DE JUGADORES*/}
  <div className="max-w-7xl mt-2 mx-auto p-6 bg-[#252423] shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tarjetas.map((tarjeta , index)=>(
          <Link
           to={tarjeta.link}
          key={index} 
          className="relative group block overflow-hidden rounded-xl shadow-lg"
          >
          <div
          className="absolute inset-0 bg-cover bg-center transition-transform scale-100 group-hover:scale-110"
          style={{ backgroundImage: `url('${tarjeta.image}')` }}
          ></div>
           <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all"></div>

            {/* Contenido */}
            <div className="relative p-6 text-white flex flex-col items-center">
            <h2 className="text-xl font-bold text-center">{tarjeta.title}</h2>
            <p className="text-sm opacity-80 text-center">{tarjeta.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
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

export default Tarjetabasket;