import React from 'react';
import imgComp1 from '../../../image/soccer/grandescompeticiones/mundial1.jpeg';
import imgComp2 from '../../../image/soccer/grandescompeticiones/mundial2.jpeg';
import imgComp3 from '../../../image/soccer/grandescompeticiones/champions1.jpeg';
import imgComp4 from '../../../image/soccer/grandescompeticiones/champions2.jpeg';

const GrandsCompeticiones = () => {
  const competitions = [
    {
      title: '🌍 Copa Mundial de la FIFA (Masculina)',
      text: 'La Copa del Mundo es el torneo más prestigioso del fútbol. Fundado en 1930, se celebra cada cuatro años. Equipos como Brasil, Alemania, Argentina e Italia han marcado su legado con múltiples títulos.',
      img: imgComp1,
      color: 'from-yellow-500 to-yellow-700',
      bg: 'bg-[#1C1C2A]'
    },
    {
      title: '🌎 Copa Mundial Femenina de la FIFA',
      text: 'Desde su inicio en 1991, el Mundial Femenino ha ganado gran relevancia. Estados Unidos ha dominado la competición, pero selecciones como Japón, Alemania y España también han brillado.',
      img: imgComp2,
      color: 'from-pink-500 to-pink-700',
      bg: 'bg-[#2A1C1C]'
    },
    {
      title: '⭐ UEFA Champions League (Masculina)',
      text: 'Es la competición de clubes más importante de Europa. Real Madrid es el máximo campeón con 14 títulos. El torneo reúne a los mejores equipos del continente en partidos memorables.',
      img: imgComp3,
      color: 'from-blue-500 to-blue-700',
      bg: 'bg-[#1C2A1C]'
    },
    {
      title: '🌟 UEFA Women’s Champions League',
      text: 'Este torneo femenino ha sido dominado por clubes como Olympique de Lyon y FC Barcelona. Su crecimiento ha sido notable, atrayendo cada vez a más espectadores y elevando el nivel competitivo.',
      img: imgComp4,
      color: 'from-fuchsia-500 to-fuchsia-700',
      bg: 'bg-[#2A1C2A]'
    },
  ];

  return (
    <section className="mb-12 px-4 sm:px-10">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white mt-28">
        🏆 Grandes Competiciones del Fútbol Masculino y Femenino
      </h2>

      <div className="space-y-10">
        {competitions.map((comp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl text-white shadow-xl transition-transform hover:scale-[1.01] ${comp.bg} backdrop-blur-md`}
          >
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${comp.color} text-transparent bg-clip-text mb-3`}>
                {comp.title}
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">{comp.text}</p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <img
                src={comp.img}
                alt={comp.title}
                className="rounded-xl w-full max-w-md h-56 object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrandsCompeticiones;
