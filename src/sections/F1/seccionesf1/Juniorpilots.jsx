import React from 'react';

const JuniorFormulaLadder = () => {
  const juniorSeries = [
    {
      name: 'Fórmula 2 (FIA Formula 2 Championship)',
      history:
        'Anteriormente conocida como GP2 Series (2005-2016) y antes como Fórmula 3000 Internacional (1985-2004), la F2 es el principal escalón hacia la Fórmula 1. Ha sido la plataforma de lanzamiento para muchos campeones y pilotos de F1.',
      keyAspects: [
        'Monoplazas Dallara idénticos para todos los equipos, enfocándose en la habilidad del piloto.',
        'Fin de semana de carreras con dos carreras: una carrera larga con parada en boxes obligatoria y una carrera sprint más corta con parrilla invertida parcial.',
        'Puntos otorgados según el sistema de la FIA, con puntos adicionales por la pole position y la vuelta rápida.',
        'Campeonato altamente competitivo que evalúa la capacidad de los pilotos para gestionar carreras, neumáticos y estrategias.',
      ],
      notableAlumni: ['Lewis Hamilton', 'Nico Rosberg', 'Charles Leclerc', 'George Russell'],
      photos: [],
    },
    {
      name: 'Fórmula 3 (FIA Formula 3 Championship)',
      history:
        'Establecida en 2019 mediante la fusión de la GP3 Series y el Campeonato Europeo de Fórmula 3 de la FIA. La F3 se sitúa directamente debajo de la F2 en la escalera de monoplazas y es un paso crucial para los jóvenes talentos.',
      keyAspects: [
        'También utiliza chasis Dallara estandarizados, motores Mecachrome y neumáticos Pirelli.',
        'Fin de semana de carreras con dos carreras: una carrera larga y una carrera sprint con parrilla invertida parcial.',
        'Enfatiza el desarrollo de las habilidades de carrera en un entorno competitivo.',
        'Sirve como un campo de pruebas para pilotos que aspiran a la F2 y, finalmente, a la F1.',
      ],
      notableAlumni: ['Oscar Piastri', 'Frederik Vesti', 'Victor Martins'],
      photos: [],
    },
    {
      name: 'Fórmula 4 (FIA Formula 4)',
      history:
        'Una categoría de monoplazas creada por la FIA en 2014 para servir como el primer paso en las carreras de monoplazas para jóvenes pilotos que salen del karting. Hay varios campeonatos de F4 a nivel regional y nacional en todo el mundo.',
      keyAspects: [
        'Reglamentos técnicos estandarizados para controlar costos y garantizar la igualdad de condiciones.',
        'Diferentes fabricantes de chasis y motores permitidos en las distintas series de F4.',
        'Se centra en la educación de los jóvenes pilotos en los fundamentos de las carreras de monoplazas.',
        'Proporciona una plataforma para que los pilotos desarrollen sus habilidades antes de ascender a categorías superiores.',
      ],
      notableAlumni: ['Lando Norris', 'Yuki Tsunoda', 'Théo Pourchaire (campeón de F4 Alemania)'],
      photos: [],
    },
  ];

  const otherMotorSports = [
    {
      name: 'Fórmula E (ABB FIA Formula E World Championship)',
      history:
        'Un campeonato de carreras de monoplazas eléctricas fundado en 2011, con la primera temporada en 2014. Promueve la movilidad sostenible y la innovación en vehículos eléctricos.',
      keyAspects: [
        'Utiliza monoplazas eléctricos con tecnología de vanguardia.',
        'Carreras en circuitos urbanos de todo el mundo.',
        'Características únicas como el "Attack Mode" y el "Fanboost" para aumentar la emoción.',
        'Atrae a fabricantes de automóviles importantes que desarrollan y prueban tecnología EV.',
      ],
      notableDrivers: ['Sébastien Buemi', 'Lucas di Grassi', 'Stoffel Vandoorne'],
      photos: [],
    },
    {
      name: 'Campeonato Mundial de Resistencia de la FIA (FIA World Endurance Championship - WEC)',
      history:
        'Un campeonato de carreras de resistencia para prototipos deportivos y coches Gran Turismo (GT). Incluye la icónica carrera de las 24 Horas de Le Mans.',
      keyAspects: [
        'Carreras de larga duración (6 horas, 8 horas, 24 horas, etc.) que ponen a prueba la fiabilidad de los coches y la resistencia de los pilotos.',
        'Múltiples clases de coches compitiendo simultáneamente (Hipercoches, LMP2, LMGTE Pro, LMGTE Am).',
        'Importancia de la estrategia de carrera, la gestión del tráfico y la consistencia.',
        'Fabricantes importantes compiten por la gloria en Le Mans y el campeonato.',
      ],
      notableDrivers: ['Fernando Alonso', 'Kazuki Nakajima', 'André Lotterer'],
      photos: [],
    },
    {
      name: 'IndyCar Series (NTT IndyCar Series)',
      history:
        'El campeonato de carreras de monoplazas de primer nivel en América del Norte, con una rica historia que se remonta a principios del siglo XX. Incluye la famosa carrera de las 500 Millas de Indianápolis.',
      keyAspects: [
        'Combina carreras en óvalos de alta velocidad, circuitos callejeros y circuitos permanentes.',
        'Utiliza chasis Dallara con motores Chevrolet o Honda.',
        'Conocido por sus carreras emocionantes y competitivas, con frecuentes cambios de líder.',
        'Las 500 Millas de Indianápolis son una de las carreras más prestigiosas del mundo.',
      ],
      notableDrivers: ['Scott Dixon', 'Josef Newgarden', 'Álex Palou'],
      photos: [],
    },
    {
      name: 'Campeonato Mundial de Rally de la FIA (FIA World Rally Championship - WRC)',
      history:
        'La principal competición de rally a nivel mundial, donde los coches de rally especialmente preparados compiten en carreteras públicas cerradas en diversos terrenos.',
      keyAspects: [
        'Eventos en diferentes superficies (asfalto, grava, nieve, tierra).',
        'Pilotos y copilotos trabajando en equipo para navegar por etapas cronometradas.',
        'Coches potentes y ágiles diseñados para condiciones extremas.',
        'Habilidad del piloto para mantener la velocidad y el control en superficies resbaladizas y desafiantes.',
      ],
      notableDrivers: ['Sébastien Loeb', 'Sébastien Ogier', 'Kalle Rovanperä'],
      photos: [],
    },
  ];

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-white mb-6">La Escalera del Automovilismo y Más</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">La Escalera de Monoplazas hacia la F1</h3>
          {juniorSeries.map((series, index) => (
            <div key={index} className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-semibold text-white mb-2">{series.name}</h4>
              <p className="text-white mb-2">
                <span className="font-semibold">Historia:</span> {series.history}
              </p>
              {series.keyAspects.length > 0 && (
                <div className="mb-2">
                  <h5 className="text-lg font-semibold text-white">Aspectos Clave:</h5>
                  <ul className="list-disc list-inside text-white">
                    {series.keyAspects.map((aspect, i) => (
                      <li key={i}>{aspect}</li>
                    ))}
                  </ul>
                </div>
              )}
              {series.notableAlumni && series.notableAlumni.length > 0 && (
                <p className="text-white mb-2">
                  <span className="font-semibold">Pilotos Notables que pasaron por aquí:</span>{' '}
                  {series.notableAlumni.join(', ')}
                </p>
              )}

              {/* Sección para las fotos */}
              <div>
                <h6 className="text-lg font-semibold text-white mb-2">Fotos:</h6>
                <div className="flex space-x-4">
                  {series.photos.map((photoUrl, i) => (
                    <img
                      key={i}
                      src={photoUrl}
                      alt={series.name}
                      className="w-32 h-24 object-cover rounded-md shadow"
                    />
                  ))}
                  {series.photos.length === 0 && (
                    <p className="text-white">Aún no hay fotos disponibles para esta categoría.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-4">Otras Competiciones de Motor Relevantes</h3>
          {otherMotorSports.map((series, index) => (
            <div key={index} className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-semibold text-white mb-2">{series.name}</h4>
              <p className="text-white mb-2">
                <span className="font-semibold">Historia:</span> {series.history}
              </p>
              {series.keyAspects.length > 0 && (
                <div className="mb-2">
                  <h5 className="text-lg font-semibold text-white">Aspectos Clave:</h5>
                  <ul className="list-disc list-inside text-white">
                    {series.keyAspects.map((aspect, i) => (
                      <li key={i}>{aspect}</li>
                    ))}
                  </ul>
                </div>
              )}
              {series.notableDrivers && series.notableDrivers.length > 0 && (
                <p className="text-white mb-2">
                  <span className="font-semibold">Pilotos Notables:</span> {series.notableDrivers.join(', ')}
                </p>
              )}

              {/* Sección para las fotos */}
              <div>
                <h6 className="text-lg font-semibold text-white mb-2">Fotos:</h6>
                <div className="flex space-x-4">
                  {series.photos.map((photoUrl, i) => (
                    <img
                      key={i}
                      src={photoUrl}
                      alt={series.name}
                      className="w-32 h-24 object-cover rounded-md shadow"
                    />
                  ))}
                  {series.photos.length === 0 && (
                    <p className="text-white">Aún no hay fotos disponibles para esta categoría.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default JuniorFormulaLadder;