import React from "react";

const rules = {
  nba: [
    { title: "Duración del juego", content: "4 cuartos de 12 minutos. Prórrogas de 5 minutos en caso de empate." },
    { title: "Tamaño del balón", content: "Circunferencia de 29.5 pulgadas (tamaño 7)." },
    { title: "Duración del descanso", content: "15 minutos entre el segundo y tercer cuarto." },
    { title: "Tiempo de posesión", content: "24 segundos por jugada. 14 segundos si hay rebote ofensivo." },
    { title: "Violaciones comunes", content: "Caminar, dobles, 3 segundos en la zona, 8 segundos para cruzar la media cancha, 24 segundos, interferencia, balón fuera." },
    { title: "Faltas personales", content: "6 faltas para ser expulsado. 5 faltas por cuarto en equipo implican tiros libres." },
    { title: "Faltas técnicas", content: "Acumulación de 2 técnicas implica expulsión." },
    { title: "Faltas flagrantes", content: "Tipo 1: contacto excesivo. Tipo 2: expulsión directa." },
    { title: "Tiempos fuera", content: "7 tiempos fuera por equipo, incluyendo 2 en los últimos 3 minutos." },
    { title: "Número de jugadores", content: "5 jugadores en cancha, hasta 15 en el equipo." },
    { title: "Regla de los 3 segundos", content: "Ningún jugador ofensivo puede permanecer más de 3 segundos consecutivos en la llave." },
    { title: "Regla de los 8 segundos", content: "El equipo ofensivo tiene 8 segundos para cruzar la media cancha." },
    { title: "Reglas de playoffs", content: "Series al mejor de 7. Clasifican 8 equipos por conferencia." }
  ],
  wnba: [
    { title: "Duración del juego", content: "4 cuartos de 10 minutos. Prórrogas de 5 minutos en caso de empate." },
    { title: "Tamaño del balón", content: "Circunferencia de 28.5 pulgadas (tamaño 6)." },
    { title: "Duración del descanso", content: "15 minutos entre el segundo y tercer cuarto." },
    { title: "Tiempo de posesión", content: "24 segundos por jugada. 14 segundos si hay rebote ofensivo." },
    { title: "Violaciones comunes", content: "Caminar, dobles, 3 segundos en la zona, 8 segundos para cruzar la media cancha, 24 segundos, interferencia, balón fuera." },
    { title: "Faltas personales", content: "6 faltas para ser expulsado. 5 faltas por cuarto en equipo implican tiros libres." },
    { title: "Faltas técnicas", content: "Acumulación de 2 técnicas implica expulsión." },
    { title: "Faltas flagrantes", content: "Tipo 1: contacto excesivo. Tipo 2: expulsión directa." },
    { title: "Tiempos fuera", content: "6 tiempos fuera por equipo." },
    { title: "Número de jugadores", content: "5 jugadores en cancha, hasta 12 en el equipo." },
    { title: "Regla de los 3 segundos", content: "Ningún jugador ofensivo puede permanecer más de 3 segundos consecutivos en la llave." },
    { title: "Regla de los 8 segundos", content: "El equipo ofensivo tiene 8 segundos para cruzar la media cancha." },
    { title: "Reglas de playoffs", content: "Primera ronda al mejor de 3. Semifinales y Finales al mejor de 5. Clasifican 8 equipos sin importar conferencia." }
  ]
};

const Section = ({ league, data }) => (
  <section className=" rounded-2xl shadow p-6 w-full mt-20">
    <h2 className="text-2xl font-bold mb-4 text-red-600 uppercase">{league}</h2>
    <ul className="space-y-3">
      {data.map((rule, idx) => (
        <li key={idx}>
          <h3 className="text-base font-semibold text-white">{rule.title}</h3>
          <p className="text-sm text-white">{rule.content}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default function NbaWnbaRules() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section league="NBA" data={rules.nba} />
        <Section league="WNBA" data={rules.wnba} />
      </div>
    </main>
  );
}
