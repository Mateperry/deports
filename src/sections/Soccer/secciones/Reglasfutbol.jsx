import React from "react";

const reglas = [
  {
    titulo: "1. El terreno de juego",
    descripcion:
      "El campo debe ser rectangular, con medidas específicas (90-120 m de largo por 45-90 m de ancho). Debe tener líneas de banda, líneas de gol, un área penal y un círculo central. El césped debe estar en buen estado y puede ser natural o artificial.",
  },
  {
    titulo: "2. El balón",
    descripcion:
      "Debe ser esférico, con una circunferencia entre 68 y 70 cm y un peso entre 410 y 450 g. Debe estar fabricado con materiales aprobados por la FIFA y mantenerse en buenas condiciones durante el partido.",
  },
  {
    titulo: "3. Número de jugadores",
    descripcion:
      "Cada equipo debe tener un máximo de 11 jugadores (incluido el portero) y un mínimo de 7 para continuar el partido. Los cambios varían según el torneo, pero generalmente se permiten hasta 5 sustituciones.",
  },
  {
    titulo: "4. Equipamiento de los jugadores",
    descripcion:
      "Cada jugador debe usar camiseta, pantalón corto, medias, espinilleras y calzado. Los colores del uniforme deben diferenciarse claramente del rival y del árbitro. El uso de joyas está prohibido por seguridad.",
  },
  {
    titulo: "5. El árbitro",
    descripcion:
      "Es la máxima autoridad en el campo. Su función es aplicar las reglas, tomar decisiones disciplinarias y controlar el tiempo de juego. Está asistido por árbitros asistentes y, en competiciones importantes, por el VAR.",
  },
  {
    titulo: "6. Árbitros asistentes",
    descripcion:
      "Dos árbitros que ayudan al principal señalando fuera de juego, saques de banda, y faltas cercanas a sus líneas. En el VAR, se utilizan asistentes para revisar jugadas clave.",
  },
  {
    titulo: "7. Duración del partido",
    descripcion:
      "Dos tiempos de 45 minutos, con un descanso de 15 minutos. El árbitro puede añadir tiempo adicional por interrupciones (tiempo de compensación). En eliminatorias, puede haber prórroga y penales.",
  },
  {
    titulo: "8. Inicio y reanudación del juego",
    descripcion:
      "El partido comienza con un saque desde el centro del campo. Las reanudaciones incluyen saques de banda, saques de esquina, saques de portería y balón a tierra si se detuvo por razones especiales.",
  },
  {
    titulo: "9. Balón en juego o fuera de juego",
    descripcion:
      "El balón está en juego mientras no haya salido completamente por las líneas de banda o gol, o no haya sido detenido por el árbitro. Está fuera de juego si cruza totalmente estas líneas.",
  },
  {
    titulo: "10. Gol marcado",
    descripcion:
      "Es gol válido si el balón cruza completamente la línea de gol entre los postes y debajo del travesaño, sin infracciones previas del equipo anotador.",
  },
  {
    titulo: "11. Fuera de juego",
    descripcion:
      "Un jugador está en fuera de juego si está más cerca del arco rival que el penúltimo defensor cuando recibe un pase, salvo que esté en su campo o no participe activamente en la jugada.",
  },
  {
    titulo: "12. Faltas y conducta incorrecta",
    descripcion:
      "Incluye empujar, sujetar, patear al rival, uso de mano intencional, juego peligroso y lenguaje ofensivo. Se sancionan con tiros libres, penales, amonestaciones (amarilla) o expulsiones (roja).",
  },
  {
    titulo: "13. Tiros libres",
    descripcion:
      "Pueden ser directos (se puede marcar gol directamente) o indirectos (otro jugador debe tocar el balón antes del gol). El rival debe estar al menos a 9,15 m.",
  },
  {
    titulo: "14. Penalti",
    descripcion:
      "Se concede por faltas dentro del área. El ejecutor debe disparar desde el punto penal con el portero en la línea. Todos los demás jugadores deben estar fuera del área.",
  },
  {
    titulo: "15. Saque de banda",
    descripcion:
      "Se otorga al equipo contrario cuando el balón cruza completamente la línea de banda. El jugador debe lanzar con ambas manos desde atrás y por encima de la cabeza, con ambos pies en el suelo.",
  },
  {
    titulo: "16. Saque de esquina",
    descripcion:
      "Se concede cuando el balón cruza la línea de gol y fue tocado por el equipo defensor. Se ejecuta desde la esquina del campo para intentar anotar.",
  },
  {
    titulo: "17. Saque de portería",
    descripcion:
      "Se concede cuando el equipo atacante envía el balón fuera por la línea de gol sin marcar. El portero lo reinicia desde el área, sin que los rivales puedan entrar hasta que el balón esté en juego.",
  },
];

const ReglasFutbol = () => {
  return (
    <section className="px-6 py-12  text-gray-800 max-w-5xl mx-auto mt-24 bg-[#383838] ">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        ⚽ Reglas Oficiales del Fútbol según la FIFA
      </h2>
      <div className="space-y-8">
        {reglas.map((regla, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 bg-gray-100 p-6 rounded-md shadow-md transition-all hover:scale-[1.01]"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {regla.titulo}
            </h3>
            <p className="text-gray-700 leading-relaxed">{regla.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReglasFutbol;
