import React from 'react';

const JugadoresHistoricos = () => {
  // Aquí podríamos tener la lógica para obtener los datos de los jugadores
const jugadoresNBA = [
  {
    nombre: 'Michael Jordan',
    epoca: '1984-1993, 1995-1998, 2001-2003',
    equipos: ['Chicago Bulls', 'Washington Wizards'],
    logros: '6 Campeonatos de la NBA (1991-1993/1996-1998), 5 MVP de la NBA (1988/1991/1992/1996/1998), 6 MVP de las Finales NBA (1991-1993/1996-1998), 14 veces All-Star de la NBA, 10 veces Líder en Anotación de la NBA, 3 veces Líder en Robos de la NBA, Jugador Defensivo del Año (1988).',
    descripcion: 'Considerado por muchos como el mejor jugador de baloncesto de todos los tiempos. Su impacto cultural y deportivo fue trascendental.',
  },
  {
    nombre: 'LeBron James',
    epoca: '2003-Presente',
    equipos: ['Cleveland Cavaliers', 'Miami Heat', 'Los Angeles Lakers'],
    logros: '4 Campeonatos de la NBA (2012/2013/2016/2020), 4 MVP de la NBA (2009/2010/2012/2013), 4 MVP de las Finales NBA (2012/2013/2016/2020), Máximo anotador de todos los tiempos de la NBA, Máximo ladrón de balones en playoffs de la NBA, 20 veces All-Star de la NBA, Novato del Año (2004).',
    descripcion: 'Un atleta excepcional y un jugador dominante en ambas canastas. Su longevidad y versatilidad son incomparables.',
  },
  {
    nombre: 'Kareem Abdul-Jabbar',
    epoca: '1969-1989',
    equipos: ['Milwaukee Bucks', 'Los Angeles Lakers'],
    logros: '6 Campeonatos de la NBA (1971/1980/1982/1985/1987/1988), 6 MVP NBA (1971/1972/1974/1976/1977/1980), 2 MVP de las Finales NBA (1971/1985), 19 veces All-Star de la NBA, Máximo anotador de la temporada regular en múltiples ocasiones.',
    descripcion: 'Conocido por su imparable "skyhook". Un pívot dominante con una carrera legendaria llena de récords.',
  },
  {
    nombre: 'Bill Russell',
    epoca: '1956-1969',
    equipos: ['Boston Celtics'],
    logros: '11 Campeonatos de la NBA (1957/1959-1966/1968/1969), 5 MVP de la NBA (1958/1961-1963/1965), 12 veces All-Star de la NBA. Su enfoque en el juego en equipo y la defensa fue clave para la dinastía de los Celtics.',
    descripcion: 'Un defensor formidable y un líder inspirador. El jugador con más campeonatos de la NBA en la historia.',
  },
  {
    nombre: 'Wilt Chamberlain',
    epoca: '1959-1973',
    equipos: ['Philadelphia/San Francisco Warriors', 'Philadelphia 76ers', 'Los Angeles Lakers'],
    logros: '2 Campeonatos de la NBA (1967/1972), 4 MVP de la NBA (1960/1966-1968), 7 veces Líder en Anotación de la NBA, 11 veces Líder en Rebotes de la NBA. Posee numerosos récords de la NBA, incluyendo 100 puntos en un solo partido.',
    descripcion: 'Un gigante dominante con estadísticas asombrosas. Su fuerza y atletismo eran incomparables para su época.',
  },
  {
    nombre: 'Kobe Bryant',
    epoca: '1996-2016',
    equipos: ['Los Angeles Lakers'],
    logros: '5 Campeonatos de la NBA (2000-2002/2009/2010), 1 MVP de la NBA (2008), 2 MVP de las Finales de la NBA (2009/2010), 18 veces All-Star de la NBA, 2 veces Líder en Anotación de la NBA. Conocido por su ética de trabajo implacable y su mentalidad competitiva ("Mamba Mentality").',
    descripcion: 'Un anotador prolífico y un competidor feroz. Su legado inspiró a una generación de jugadores.',
  },
  {
    nombre: 'Magic Johnson',
    epoca: '1979-1991, 1996',
    equipos: ['Los Angeles Lakers'],
    logros: '5 Campeonatos de la NBA (1980/1982/1985/1987/1988), 3 MVP de la NBA (1987/1989/1990), 3 MVP de las Finales de la NBA (1980/1982/1987), 12 veces All-Star de la NBA, 4 veces Líder en Asistencias de la NBA, 2 veces Líder en Robos de la NBA.',
    descripcion: 'Un base único con una visión de juego excepcional y un carisma contagioso. Su rivalidad con Larry Bird revitalizó la NBA.',
  },
  {
    nombre: 'Larry Bird',
    epoca: '1979-1992',
    equipos: ['Boston Celtics'],
    logros: '3 Campeonatos de la NBA (1981/1984/1986), 3 MVP de la NBA (1984-1986), 2 MVP de las Finales de la NBA (1984/1986), 12 veces All-Star de la NBA, 3 veces Campeón del Concurso de Triples.',
    descripcion: 'Un tirador excepcional y un competidor implacable. Su inteligencia y versatilidad lo convirtieron en una leyenda.',
  },
  {
    nombre: 'Shaquille O\'Neal',
    epoca: '1992-2011',
    equipos: ['Orlando Magic', 'Los Angeles Lakers', 'Miami Heat', 'Phoenix Suns', 'Cleveland Cavaliers', 'Boston Celtics'],
    logros: '4 Campeonatos de la NBA (2000-2002/2006), 1 MVP de la NBA (2000), 3 MVP de las Finales de la NBA (2000-2002), 15 veces All-Star de la NBA, 2 veces Líder en Anotación de la NBA.',
    descripcion: 'Un pívot dominante con una fuerza física imparable. Su impacto fue inmediato en cada equipo en el que jugó.',
  },
  {
    nombre: 'Hakeem Olajuwon',
    epoca: '1984-2002',
    equipos: ['Houston Rockets', 'Toronto Raptors'],
    logros: '2 Campeonatos de la NBA (1994/1995), 1 MVP de la NBA (1994), 2 MVP de las Finales de la NBA (1994/1995), 12 veces All-Star de la NBA, 2 veces Jugador Defensivo del Año, Líder histórico en tapones de la NBA.',
    descripcion: 'Un pívot ágil y talentoso con una increíble variedad de movimientos ofensivos y una gran presencia defensiva.',
  },
  {
    nombre: 'Stephen Curry',
    epoca: '2009-Presente',
    equipos: ['Golden State Warriors'],
    logros: '4 Campeonatos de la NBA (2015/2017/2018/2022), 2 MVP de la NBA (2015/2016), 1 MVP de las Finales de la NBA (2022), 10 veces All-Star de la NBA, Líder de triples anotados en la historia de la NBA, 2 veces Líder en Anotación de la NBA.',
    descripcion: 'Revolucionó el juego con su increíble habilidad para lanzar triples y su manejo de balón. Un jugador fundamental en la dinastía de los Warriors.',
  },
  {
    nombre: 'Tim Duncan',
    epoca: '1997-2016',
    equipos: ['San Antonio Spurs'],
    logros: '5 Campeonatos de la NBA (1999/2003/2005/2007/2014), 2 MVP de la NBA (2002/2003), 3 MVP de las Finales de la NBA (1999/2003/2005), 15 veces All-Star de la NBA, Jugador Defensivo del Año en múltiples ocasiones.',
    descripcion: 'Un ala-pívot fundamentalmente sólido y un líder tranquilo. Su consistencia y eficiencia fueron clave para el éxito de los Spurs durante dos décadas.',
  },
  {
    nombre: 'Kevin Garnett',
    epoca: '1995-2016',
    equipos: ['Minnesota Timberwolves', 'Boston Celtics', 'Brooklyn Nets'],
    logros: '1 Campeonato de la NBA (2008), 1 MVP de la NBA (2004), Jugador Defensivo del Año (2008), 15 veces All-Star de la NBA, 4 veces Líder en Rebotes de la NBA.',
    descripcion: 'Un ala-pívot apasionado y versátil con una gran intensidad defensiva y habilidades ofensivas completas.',
  },
  {
    nombre: 'Dirk Nowitzki',
    epoca: '1998-2019',
    equipos: ['Dallas Mavericks'],
    logros: '1 Campeonato de la NBA (2011), 1 MVP de las Finales de la NBA (2011), 1 MVP de la NBA (2007), 14 veces All-Star de la NBA, Sexto máximo anotador en la historia de la NBA.',
    descripcion: 'Un ala-pívot con un tiro distintivo y una habilidad única para anotar. Lideró a los Mavericks a su único campeonato.',
  },
];

const jugadorasWNBA = [
  {
    nombre: 'Lisa Leslie',
    epoca: '1997-2009',
    equipos: ['Los Angeles Sparks'],
    logros: '2 Campeonatos de la WNBA (2001/2002), 3 MVP de la WNBA (2001/2004/2006), 3 MVP de las Finales de la WNBA (2001/2002), 8 All-Star de la WNBA, 2 veces Líder en Puntos de la WNBA, 4 veces Líder en Rebotes de la WNBA.',
    descripcion: 'Pívot dominante conocida por su habilidad para anotar y rebotear. Fue una de las pioneras de la WNBA y una figura clave en el éxito de las Sparks.',
  },
  {
    nombre: 'Diana Taurasi',
    epoca: '2004-Presente',
    equipos: ['Phoenix Mercury'],
    logros: '3 Campeonatos de la WNBA (2007/2009/2014), 1 MVP de la WNBA (2009), 2 MVP de las Finales de la WNBA (2009/2014), Máxima anotadora de todos los tiempos de la WNBA, 10 veces All-Star de la WNBA, 5 veces Líder en Puntos de la WNBA.',
    descripcion: 'Escolta anotadora prolífica y una competidora feroz. Considerada una de las mejores jugadoras de baloncesto de todos los tiempos.',
  },
  {
    nombre: 'Sue Bird',
    epoca: '2002-2022',
    equipos: ['Seattle Storm'],
    logros: '4 Campeonatos de la WNBA (2004/2010/2018/2020), Máxima asistente de todos los tiempos de la WNBA, 13 veces All-Star de la WNBA, 5 veces en el Mejor Quinteto de la WNBA.',
    descripcion: 'Base excepcional con una visión de juego increíble y una capacidad de liderazgo inigualable. Una leyenda de la Storm y de la liga.',
  },
  {
    nombre: 'Candace Parker',
    epoca: '2008-Presente',
    equipos: ['Los Angeles Sparks', 'Chicago Sky', 'Las Vegas Aces'],
    logros: '3 MVP de la WNBA (2008/2013/2021), 2 Campeonatos de la WNBA (2016/2021), 1 MVP de las Finales de la WNBA (2016), Novata del Año de la WNBA (2008), 3 veces Líder en Rebotes de la WNBA, 2 veces Líder en Tapones de la WNBA, 7 veces All-Star de la WNBA.',
    descripcion: 'Ala-pívot versátil con habilidades en todos los aspectos del juego. Una de las jugadoras más completas en la historia de la WNBA.',
  },
  {
    nombre: 'Tamika Catchings',
    epoca: '2002-2016',
    equipos: ['Indiana Fever'],
    logros: '1 Campeonato de la WNBA (2012), 1 MVP de la WNBA (2011), 1 MVP de las Finales de la WNBA (2012), 5 veces Jugadora Defensiva del Año de la WNBA, Máxima ladrona de balones de todos los tiempos de la WNBA, 10 veces All-Star de la WNBA.',
    descripcion: 'Ala defensora implacable con una gran capacidad para anotar y rebotear. Una líder dentro y fuera de la cancha.',
  },
  {
    nombre: 'Yolanda Griffith',
    epoca: '1999-2009',
    equipos: ['Sacramento Monarchs', 'Seattle Storm'],
    logros: '1 Campeonato de la WNBA (2005), 1 MVP de la WNBA (1999), 1 MVP de las Finales de la WNBA (2005), 7 veces All-Star de la WNBA, 1 vez Jugadora Defensiva del Año de la WNBA, 1 vez Líder en Rebotes de la WNBA.',
    descripcion: 'Pívot fuerte y reboteadora dominante que lideró a las Monarchs a su único campeonato.',
  },
  {
    nombre: 'Lauren Jackson',
    epoca: '2001-2012',
    equipos: ['Seattle Storm'],
    logros: '2 Campeonatos de la WNBA (2004/2010), 3 MVP de la WNBA (2003/2007/2010), 3 veces Máxima anotadora de la WNBA, 4 veces Líder en Rebotes de la WNBA, 7 veces All-Star de la WNBA.',
    descripcion: 'Ala-pívot australiana con una gran capacidad para anotar y una presencia física imponente. Una de las grandes estrellas internacionales de la WNBA.',
  },
  {
    nombre: 'Dawn Staley',
    epoca: '1996-2005',
    equipos: ['Charlotte Sting', 'Houston Comets'],
    logros: '6 veces All-Star de la WNBA, Líder en Asistencias de la WNBA en dos ocasiones. Aunque no ganó campeonatos como jugadora en la WNBA, su impacto y liderazgo fueron fundamentales.',
    descripcion: 'Base talentosa y líder carismática que sentó las bases para muchas jugadoras futuras. Ahora es una exitosa entrenadora universitaria.',
  },
  {
    nombre: 'Tina Thompson',
    epoca: '1997-2013',
    equipos: ['Houston Comets', 'Los Angeles Sparks', 'Seattle Storm'],
    logros: '4 Campeonatos de la WNBA (1997/1998/1999/2000), 9 veces All-Star de la WNBA, Primera selección general en el Draft de la WNBA.',
    descripcion: 'Ala-pívot versátil y una anotadora consistente que fue clave en la dinastía de las Comets.',
  },
  {
    nombre: 'Breanna Stewart',
    epoca: '2016-Presente',
    equipos: ['Seattle Storm', 'New York Liberty'],
    logros: '2 Campeonatos de la WNBA (2018/2020), 2 MVP de las Finales de la WNBA (2018/2020), 1 MVP de la WNBA (2018), Novata del Año de la WNBA (2016), 4 veces All-Star de la WNBA, 1 vez Máxima anotadora de la WNBA.',
    descripcion: 'Ala talentosa con una gran habilidad para anotar y un impacto significativo en ambos extremos de la cancha.',
  },
];

  return (
<div className="py-12 mt-20 bg-[#171717] text-white"> {/* Cambié el bg del contenedor principal a un gris oscuro y el texto a blanco para mejor contraste con las cajas oscuras */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-8"> {/* Ajusté el color del título */}
      Jugadores históricos de la NBA y WNBA
    </h2>
    <p className="mt-2 text-lg text-gray-400 text-center mb-10"> {/* Ajusté el color del subtítulo */}
      Conoce a los jugadores que han dejado huella en la historia de la NBA y la WNBA.
    </p>

    {/* Sección NBA */}
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-gray-300 mb-4">Leyendas de la NBA</h3> {/* Ajusté el color del subtítulo de la sección */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduje un poco el gap para que las cajas estén más juntas */}
        {jugadoresNBA.map((jugador, index) => (
          <div key={index} className="bg-[#252323] shadow-md rounded-lg overflow-hidden"> {/* Cambié el bg a bg-[#252323] */}
            <div className="p-5"> {/* Reduje un poco el padding interior */}
              <h4 className="text-xl font-semibold text-gray-100 mb-2">{jugador.nombre}</h4> {/* Ajusté el color del nombre */}
              <p className="text-gray-400 mb-2">Época: {jugador.epoca}</p> {/* Ajusté el color de la época */}
              <div>
                <p className="text-gray-300 font-semibold mb-1">Logros destacados:</p> {/* Ajusté el color del título de los logros */}
                <ul className="list-disc list-inside text-gray-400 text-sm"> {/* Ajusté el color de la lista de logros */}
                  {jugador.logros.split(', ').map((logro, i) => (
                    <li key={i}>{logro}</li>
                  ))}
                </ul>
              </div>
              {/* Aquí podrías añadir una imagen del jugador */}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Sección WNBA */}
    <div>
      <h3 className="text-2xl font-bold text-gray-300 mb-4">Estrellas de la WNBA</h3> {/* Ajusté el color del subtítulo de la sección */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduje un poco el gap para que las cajas estén más juntas */}
        {jugadorasWNBA.map((jugadora, index) => (
          <div key={index} className="bg-[#252323] shadow-md rounded-lg overflow-hidden"> {/* Cambié el bg a bg-[#252323] */}
            <div className="p-5"> {/* Reduje un poco el padding interior */}
              <h4 className="text-xl font-semibold text-gray-100 mb-2">{jugadora.nombre}</h4> {/* Ajusté el color del nombre */}
              <p className="text-gray-400 mb-2">Época: {jugadora.epoca}</p> {/* Ajusté el color de la época */}
              <div>
                <p className="text-gray-300 font-semibold mb-1">Logros destacados:</p> {/* Ajusté el color del título de los logros */}
                <ul className="list-disc list-inside text-gray-400 text-sm"> {/* Ajusté el color de la lista de logros */}
                  {jugadora.logros.split(', ').map((logro, i) => (
                    <li key={i}>{logro}</li>
                  ))}
                </ul>
              </div>
              {/* Aquí podrías añadir una imagen de la jugadora */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default JugadoresHistoricos;