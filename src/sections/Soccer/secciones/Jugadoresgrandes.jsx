import React from 'react';
import imgMessi from '../../../image/soccer/mejoresjugadores/messi.jpeg';
import imgMarta from '../../../image/soccer/mejoresjugadores/marta.jpeg';
import imgCristiano from '../../../image/soccer/mejoresjugadores/cristiano.jpeg';
import imgAlexia from '../../../image/soccer/mejoresjugadores/alexia.jpeg';

const MejoresJugadores = () => {
  const jugadores = [
    {
      nombre: 'Lionel Messi',
      categoria: 'Masculino',
      descripcion: 'Considerado uno de los mejores futbolistas de la historia, Messi ha ganado múltiples Balones de Oro y ha dejado huella en el FC Barcelona, PSG y la selección argentina.',
      img: imgMessi,
      color: 'border-blue-500'
    },
    {
      nombre: 'Marta Vieira da Silva',
      categoria: 'Femenino',
      descripcion: 'Máxima goleadora en Copas del Mundo y símbolo del fútbol femenino, Marta ha sido reconocida múltiples veces como la mejor jugadora del planeta.',
      img: imgMarta,
      color: 'border-pink-500'
    },
    {
      nombre: 'Cristiano Ronaldo',
      categoria: 'Masculino',
      descripcion: 'Con títulos en múltiples ligas europeas, récords de goles y una mentalidad ganadora única, Cristiano es una leyenda viva del fútbol moderno.',
      img: imgCristiano,
      color: 'border-blue-400'
    },
    {
      nombre: 'Alexia Putellas',
      categoria: 'Femenino',
      descripcion: 'Ganadora del Balón de Oro y referente del FC Barcelona, Alexia ha sido pieza clave en el crecimiento del fútbol femenino europeo.',
      img: imgAlexia,
      color: 'border-pink-400'
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-10 bg-gradient-to-b mt-24 tex">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">
        🌟 Mejores Jugadores del Fútbol Masculino y Femenino
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {jugadores.map((jugador, index) => (
          <div
            key={index}
            className={`rounded-2xl border-4 ${jugador.color} bg-white shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <img
              src={jugador.img}
              alt={jugador.nombre}
              className="w-full h-auto object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{jugador.nombre}</h3>
              <p className="text-sm text-gray-600 italic mb-2">{jugador.categoria}</p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {jugador.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MejoresJugadores;
