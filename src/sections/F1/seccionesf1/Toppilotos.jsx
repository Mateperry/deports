import React from 'react';
import img1 from '../../../image/f1/pilotos/michael1.png'
import img2 from '../../../image/f1/pilotos/michael2.png'
import img3 from '../../../image/f1/pilotos/michael3.png'
import img4 from '../../../image/f1/pilotos/michael4.png'
import img5 from '../../../image/f1/pilotos/hamilton1.png'
import img6 from '../../../image/f1/pilotos/hamilton2.png'
import img7 from '../../../image/f1/pilotos/hamilton3.png'
import img8 from '../../../image/f1/pilotos/hamilton4.png'
import img9 from '../../../image/f1/pilotos/senna1.png'
import img10 from '../../../image/f1/pilotos/senna2.png'
import img11 from '../../../image/f1/pilotos/senna3.png'
import img12 from '../../../image/f1/pilotos/senna4.png'
import img13 from '../../../image/f1/pilotos/alan1.png'
import img14 from '../../../image/f1/pilotos/alan2.png'
import img15 from '../../../image/f1/pilotos/alan3.png'
import img16 from '../../../image/f1/pilotos/alan4.png'
import img17 from '../../../image/f1/pilotos/fangio1.png'
import img18 from '../../../image/f1/pilotos/fangio2.png'
import img19 from '../../../image/f1/pilotos/fangio3.png'
import img20 from '../../../image/f1/pilotos/fangio4.png'
const TopF1Pilots = () => {
  const topPilots = [
    {
      name: 'Michael Schumacher',
      nationality: 'Alemán',
      titles: 7,
      wins: 91,
      notableRaces: [
        'GP de Bélgica de 1992: Primera victoria en F1 bajo la lluvia.',
        'Temporada 2000: Primer título con Ferrari tras duelo con Häkkinen.',
        'GP de Japón de 2000: Campeonato asegurado en intensa batalla.',
        'Temporada 2004: Récord de 13 victorias.',
      ],
      legacy: 'Ampliamente considerado uno de los más grandes, récords y era dorada de Ferrari.',
      photos: [img1,img2,img3,img4], // Aquí irán las URLs de las fotos
    },
    {
      name: 'Lewis Hamilton',
      nationality: 'Británico',
      titles: 7,
      wins: 103,
      notableRaces: [
        'GP de Brasil de 2008: Campeonato ganado en la última curva.',
        'Temporada 2017: Superó a Vettel por el título.',
        'GP de Portugal de 2020: Superó el récord de victorias de Schumacher.',
      ],
      legacy: 'Talento generacional, velocidad excepcional y defensor de la diversidad.',
      photos: [img5,img6,img7,img8],
    },
    {
      name: 'Ayrton Senna',
      nationality: 'Brasileño',
      titles: 3,
      wins: 41,
      notableRaces: [
        'GP de Brasil de 1991: Victoria en casa con caja de cambios fallando.',
        'GP de Europa 1993: Vuelta de apertura legendaria bajo la lluvia.',
        'Duelos con Alain Prost: Rivalidad que definió una era.',
      ],
      legacy: 'Reverenciado por su habilidad, especialmente en lluvia, y conexión emocional.',
      photos: [img9,img10,img11,img12],
    },
    {
      name: 'Alain Prost',
      nationality: 'Francés',
      titles: 4,
      wins: 51,
      notableRaces: [
        'Campeonato de 1986: Lucha cerrada decidida en la última carrera.',
        'Rivalidad con Ayrton Senna: Intensa y compleja.',
        'GP de Australia de 1993: Última victoria y despedida con título.',
      ],
      legacy: 'Conocido como "El Profesor" por su enfoque metódico e inteligente.',
      photos: [img13,img14,img15,img16],
    },
    {
      name: 'Juan Manuel Fangio',
      nationality: 'Argentino',
      titles: 5,
      wins: 24,
      notableRaces: [
        'GP de Alemania de 1957: Remontada épica por el título.',
        'Dominio en los 50: Campeonatos con cuatro equipos diferentes.',
      ],
      legacy: 'Primer gran maestro de la F1, habilidad y deportividad en una era peligrosa.',
      photos: [img17,img18,img19,img20],
    },
  ];

  return (
    <div className=" py-8 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Leyendas de la Fórmula 1</h2>
        {topPilots.map((pilot, index) => (
          <div key={index} className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">{pilot.name}</h3>
            <p className="text-white mb-2">
              <span className="font-semibold">Nacionalidad:</span> {pilot.nationality}
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">Títulos Mundiales:</span> {pilot.titles}
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">Victorias en Grandes Premios:</span> {pilot.wins}
            </p>
            {pilot.notableRaces.length > 0 && (
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-white">Carreras Destacadas:</h4>
                <ul className="list-disc list-inside text-white">
                  {pilot.notableRaces.map((race, i) => (
                    <li key={i}>{race}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-white mb-4">
              <span className="font-semibold">Legado:</span> {pilot.legacy}
            </p>

            {/* Sección para las fotos */}
<div>
  <h4 className="text-lg font-semibold text-white mb-2">Fotos:</h4>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> {/* <-- Contenedor de la grilla */}
    {pilot.photos.length > 0 ? ( // Usamos un operador ternario para renderizar condicionalmente
      pilot.photos.map((photoUrl, i) => (
        <img
          key={i}
          src={photoUrl}
          alt={pilot.name}
          
          className="w-full h-44 object-cover rounded-md shadow" 
        />
      ))
    ) : (
      // Mensaje si no hay fotos
      <p className="text-white col-span-full">Aún no hay fotos disponibles para este piloto.</p>
    )}
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopF1Pilots;