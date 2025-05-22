import React from 'react';
import Galeriallstarnba from '../componentesnba/Allstar'
import Galeriallstarwnba from '../componentesnba/Allstarwnba'
import Otrascompeticionesfrom from '../componentesnba/Otrascompeticiones'

const AllStarAndSpecialEvents = () => {
  return (
    <div className=" bg-[#252323] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Estrellas y Momentos Únicos: All-Star y Eventos Especiales
        </h2>

        {/* Sección del NBA All-Star */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            NBA All-Star Weekend
          </h3>
          <p className="text-gray-400 mb-4">
            Cada febrero, la NBA se detiene para celebrar el talento y la emoción del baloncesto en el fin de semana del All-Star. Este evento de varios días reúne a los mejores jugadores de las Conferencias Este y Oeste en una serie de emocionantes competiciones y espectáculos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                El Juego de las Estrellas
              </h4>
              <p className="text-gray-400">
                El plato fuerte del fin de semana, donde los jugadores más votados por los fanáticos, los medios y los propios jugadores se enfrentan en un partido lleno de jugadas espectaculares y momentos inolvidables.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Concursos de Habilidades
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                <li>Concurso de Triples: Los mejores tiradores compiten por la corona del triple.</li>
                <li>Concurso de Clavadas: Un espectáculo de creatividad y atletismo con clavadas impresionantes.</li>
                <li>Desafío de Habilidades: Una prueba de agilidad, pase y tiro para equipos de jugadores.</li>
              </ul>
            </div>
          </div>
            <Galeriallstarnba/>
        </div>

        {/* Sección del WNBA All-Star */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            WNBA All-Star Game
          </h3>
          <p className="text-gray-400 mb-4">
            La WNBA también celebra a sus jugadoras más destacadas en el Juego de las Estrellas, un evento que destaca el creciente talento y la emoción de la liga femenina.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Celebrando a las Estrellas de la WNBA
              </h4>
              <p className="text-gray-400">
                El Juego de las Estrellas de la WNBA es una oportunidad para ver a las mejores jugadoras del mundo competir en un ambiente festivo y lleno de energía.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Eventos y Reconocimientos
              </h4>
              <p className="text-gray-400">
                Además del juego, el fin de semana del All-Star de la WNBA a menudo incluye eventos comunitarios, clínicas de baloncesto y reconocimientos a las leyendas del deporte.
              </p>
            </div>
          </div>
                <Galeriallstarwnba />
        </div>

        {/* Sección de Otros Eventos Especiales (Opcional) */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Otros Eventos Especiales
          </h3>
          <p className="text-gray-400 mb-4">
            Más allá de los All-Stars, tanto la NBA como la WNBA organizan otros eventos especiales a lo largo del año que capturan la atención de los fanáticos.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li><strong>NBA Playoffs y Finales:</strong> La culminación de la temporada, llena de partidos de alta intensidad.</li>
            <li><strong>WNBA Playoffs y Finales:</strong> La batalla por el campeonato de la WNBA.</li>
            <li><strong>NBA Draft:</strong> El evento donde los equipos seleccionan a los jóvenes talentos que darán forma al futuro de la liga.</li>
            <li><strong>WNBA Draft:</strong> Similar al de la NBA, pero para la liga femenina.</li>
            <li><strong>NBA Summer League:</strong> Una oportunidad para ver a los novatos, jugadores de segundo año y agentes libres competir.</li>
           <Otrascompeticionesfrom />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllStarAndSpecialEvents;