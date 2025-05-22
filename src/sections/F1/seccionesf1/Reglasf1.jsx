import React from 'react';

// Ya no necesitamos la función formatTextForBold si solo queremos todo el contenido en negrita.
// Si hubieran partes específicas, la mantendríamos y combinaríamos, pero para todo el texto del li, es más sencillo con Tailwind.

const MotorsportsRules = () => {
  const f1Rules = [
    {
      title: 'Formato del Fin de Semana de Gran Premio',
      details: [
        'Prácticas Libres (FP1, FP2, FP3): Tres sesiones de 60 minutos cada una (o dos de 90 minutos en formato Sprint), donde los equipos prueban configuraciones y neumáticos.',
        'Clasificación: Una sesión de tres partes (Q1, Q2, Q3) para determinar la parrilla de salida. Los coches más lentos son eliminados en Q1 y Q2, y los diez más rápidos compiten por la pole position en Q3.',
        'Carrera Sprint (en fines de semana seleccionados): Una carrera más corta el sábado que otorga puntos a los ocho primeros y establece la parrilla para el Gran Premio del domingo. (El formato exacto puede variar anualmente).',
        'Gran Premio: La carrera principal del domingo, con una distancia fija (aproximadamente 305 km, salvo Mónaco) o un límite de tiempo (2 horas).',
      ],
    },
    {
      title: 'Sistema de Puntuación (F1)',
      details: [
        'Los diez primeros pilotos en la carrera principal obtienen puntos:',
        '1º: 25 puntos',
        '2º: 18 puntos',
        '3º: 15 puntos',
        '4º: 12 puntos',
        '5º: 10 puntos',
        '6º: 8 puntos',
        '7º: 6 puntos',
        '8º: 4 puntos',
        '9º: 2 puntos',
        '10º: 1 punto',
        'Punto Adicional: Se otorga un punto extra al piloto que logre la vuelta rápida de la carrera, siempre y cuando termine dentro de los diez primeros puestos.',
      ],
    },
    {
      title: 'Neumáticos (F1)',
      details: [
        'Tipos: Pirelli suministra tres compuestos de seco (duro, medio, blando) en cada evento, además de neumáticos intermedios y de lluvia extrema. Los compuestos son identificados por colores (blanco duro, amarillo medio, rojo blando).',
        'Asignación: Los equipos tienen una asignación limitada de juegos de neumáticos para todo el fin de semana.',
        'Uso Obligatorio: En la carrera principal, los pilotos deben usar al menos dos compuestos de seco diferentes, a menos que la carrera sea declarada "en mojado".',
      ],
    },
    {
      title: 'DRS (Drag Reduction System - F1)',
      details: [
        'Un ala trasera ajustable diseñada para aumentar las oportunidades de adelantamiento.',
        'Activación: Solo se puede activar en zonas predefinidas del circuito (zonas DRS) y solo si el piloto está a menos de un segundo del coche de delante en el punto de detección.',
        'Desactivación: Se desactiva automáticamente al frenar o al salir de la zona DRS.',
      ],
    },
    {
      title: 'Limitaciones y Penalizaciones (F1)',
      details: [
        'Límite de Presupuesto: Los equipos están sujetos a un límite de gasto anual para fomentar la igualdad y la sostenibilidad.',
        'Unidades de Potencia: Restricción en el número de componentes de la unidad de potencia (motor de combustión, turbo, MGU-K, MGU-H, batería, electrónica de control) que se pueden usar por temporada. Exceder este límite conlleva penalizaciones de parrilla.',
        'Límites de Pista: Los pilotos deben permanecer dentro de los límites de la pista. Salirse repetidamente o ganar ventaja puede resultar en advertencias o penalizaciones de tiempo.',
        'Banderas: El uso de banderas (amarilla, azul, roja, verde, cuadros, etc.) para comunicar condiciones de la pista o instrucciones a los pilotos.',
        'Safety Car y Virtual Safety Car (VSC): Se utilizan para neutralizar la carrera en caso de incidentes. El Safety Car físico reagrupa los coches, mientras que el VSC impone un delta de tiempo que los pilotos deben mantener.',
      ],
    },
  ];

  const otherCategoryRules = [
    {
      name: 'Fórmula 2 (FIA Formula 2 Championship)',
      rules: [
        'Monoplazas Estandarizados: Chasis Dallara F2 2018, motores Mecachrome V6 turbo y neumáticos Pirelli, lo que pone el énfasis en el piloto y la estrategia del equipo.',
        'Formato de Fin de Semana: Dos carreras por evento: una carrera sprint el sábado (parrilla invertida parcial de los 10 primeros de clasificación) y una carrera principal el domingo (parrilla según clasificación).',
        'Puntuación F2 (Carrera Principal): Similar a F1 (25-18-15-12-10-8-6-4-2-1). Puntos adicionales por pole (2) y vuelta rápida (1).',
        'Puntuación F2 (Carrera Sprint): Puntos para los 8 primeros (10-8-6-5-4-3-2-1). No hay puntos por pole o vuelta rápida en sprint.',
        'Pit Stops Obligatorios: En la carrera principal, hay un pit stop obligatorio para cambiar neumáticos. En la carrera sprint, no hay pit stops obligatorios.',
      ],
    },
    {
      name: 'Fórmula 3 (FIA Formula 3 Championship)',
      rules: [
        'Monoplazas Estandarizados: Chasis Dallara F3 2019, motores Mecachrome y neumáticos Pirelli, con un enfoque en el desarrollo de los jóvenes pilotos.',
        'Formato de Fin de Semana: Dos carreras por evento: una carrera sprint el sábado (parrilla invertida de los 12 primeros de clasificación) y una carrera principal el domingo (parrilla según clasificación).',
        'Puntuación F3 (Carrera Principal): Similar a F1 (25-18-15-12-10-8-6-4-2-1). Puntos adicionales por pole (2) y vuelta rápida (1).',
        'Puntuación F3 (Carrera Sprint): Puntos para los 10 primeros (10-9-8-7-6-5-4-3-2-1). No hay puntos por pole o vuelta rápida en sprint.',
        'Sin Pit Stops Obligatorios: Las carreras son más cortas y no requieren paradas en boxes para cambiar neumáticos.',
      ],
    },
    {
      name: 'Fórmula E (ABB FIA Formula E World Championship)',
      rules: [
        'Monoplazas Eléctricos: Uso exclusivo de vehículos eléctricos, con un enfoque en la eficiencia energética y la sostenibilidad.',
        'Circuitos Urbanos: Las carreras se disputan en circuitos callejeros temporales en el corazón de las ciudades, lo que crea un espectáculo único.',
        'Attack Mode: Los pilotos pueden activar un "Attack Mode" para un breve aumento de potencia en puntos designados de la pista, lo que añade estrategia y oportunidades de adelantamiento.',
        'Fanboost: Los aficionados pueden votar por sus pilotos favoritos, y los que reciban más votos obtienen un breve aumento de potencia adicional para usar durante la segunda mitad de la carrera.',
        'Carreras de Tiempo: Las carreras no tienen un número fijo de vueltas, sino una duración definida (por ejemplo, 45 minutos más una vuelta).',
      ],
    },
    {
      name: 'IndyCar Series (NTT IndyCar Series)',
      rules: [
        'Diversidad de Circuitos: Compite en una mezcla única de óvalos de alta velocidad, circuitos callejeros y circuitos permanentes.',
        'Motores con Suministrador Único: Actualmente Honda y Chevrolet son los únicos proveedores de motores.',
        'Push-to-Pass: Los pilotos tienen un botón para un aumento temporal de potencia, útil para adelantamientos o defender posición.',
        'Green Flag Pit Stops: Los pit stops se realizan bajo bandera verde (sin Safety Car), lo que añade una capa de estrategia a la gestión de combustible y neumáticos.',
        '500 Millas de Indianápolis: Una carrera legendaria con sus propias reglas específicas de calificación y carrera, destacando por su formato de "coche alado" y alta velocidad en óvalo.',
      ],
    },
  ];

  return (
    <div className=" py-8 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Reglamentos Clave en el Automovilismo de Competición</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Reglas Fundamentales de la Fórmula 1</h3>
          {f1Rules.map((ruleSet, index) => (
            <div key={index} className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-semibold text-white mb-2">{ruleSet.title}</h4>
              <ul className="list-disc list-inside text-white">
                {ruleSet.details.map((detail, i) => (
                  // Aplicamos la clase de Tailwind directamente al <li>
                  <li key={i} className="font-semibold">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-4">Reglas Destacadas de Otras Categorías</h3>
          {otherCategoryRules.map((category, index) => (
            <div key={index} className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
              <h4 className="text-xl font-semibold text-white mb-2">{category.name}</h4>
              <ul className="list-disc list-inside text-white">
                {category.rules.map((rule, i) => (
                  // Aplicamos la clase de Tailwind directamente al <li>
                  <li key={i} className="font-semibold">{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MotorsportsRules;