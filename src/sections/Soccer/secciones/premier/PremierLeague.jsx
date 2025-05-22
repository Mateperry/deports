
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from "../../../../image/soccer/imgpsoccer/premierm.png"
const PremierLeagueHistory = () => {
    const [tabla, setTabla] = useState([]);
  const [goleadores, setGoleadores] = useState([]);
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'x-apisports-key': '9fd571692f82a483ea8639b03945e3ee' // 🔁 Reemplaza con tu API Key
      };

      try {
        // Tabla de posiciones
        const tablaRes = await axios.get('https://v3.football.api-sports.io/standings', {
          params: {
            league: 39,
            season: 2023
          },
          headers
        });
        const standings = tablaRes.data.response?.[0]?.league?.standings?.[0];
        setTabla(standings || []);

        // Goleadores
        const golesRes = await axios.get('https://v3.football.api-sports.io/players/topscorers', {
          params: {
            league: 39,
            season: 2023
          },
          headers
        });
        setGoleadores(golesRes.data.response || []);

        // Asistencias
        const asistenciasRes = await axios.get('https://v3.football.api-sports.io/players/topassists', {
          params: {
            league: 39,
            season: 2023
          },
          headers
        });
        setAsistencias(asistenciasRes.data.response || []);

      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
        <div className="space-y-12 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12 text-white mt-24 max-w-7xl mx-auto4">
      {/* Introducción */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Historia de la Premier League</h2>
        <p className="text-lg">
          La Premier League, conocida como la liga más competitiva del mundo, fue fundada en 1992 tras la creación de la Football Premier League, separándose de la Football League. Desde entonces, ha sido el hogar de algunos de los mejores futbolistas y equipos del mundo.
        </p>
      </section>

      {/* Equipos Importantes */}
      <section className='flex flex-col md:flex-row items-start md:items-center gap-6 flex-wrap'>
        <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">Equipos más importantes</h3>
        <ul className="list-disc pl-8">
          <li>Manchester United</li>
          <li>Manchester City</li>
          <li>Liverpool</li>
          <li>Arsenal</li>
          <li>Chelsea</li>
        </ul>
        </div>
        <div className="flex-1">
        <img 
          src= {img1} 
          alt="Premier League" 
          className="w-60 h-auto  rounded-lg shadow-lg"
        />
        </div>
      </section>

      {/* Momentos Icónicos */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Momentos Icónicos</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">La remontada del Manchester United en 1999</h4>
            <p>
              En la final de la UEFA Champions League de 1999, el Manchester United logró una histórica remontada en los últimos minutos, venciendo al Bayern de Múnich 2-1 y ganando la Champions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">La temporada invicta del Arsenal en 2004</h4>
            <p>
              El Arsenal, bajo el mando de Arsène Wenger, hizo historia al conseguir una temporada invicta, ganando el título de la Premier League 2003-2004 sin perder un solo partido.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas importantes */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Estadísticas importantes</h3>
        <ul className="list-disc pl-8">
          <li>Mayor cantidad de títulos: Manchester United (20)</li>
          <li>Mayor cantidad de goles en una temporada: 106 (Manchester City, 2017-2018)</li>
          <li>Mayor cantidad de puntos en una temporada: 100 (Manchester City, 2017-2018)</li>
        </ul>
      </section>


    </div>
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto mt-10 px-4">
  {/* Tabla de Posiciones */}
  <section className="flex-1 bg-[#383838] text-white rounded-3xl px-6 py-8 shadow-lg">
    <h2 className="text-3xl font-bold text-center mb-8">
      🏆 Tabla de Posiciones - Ligue 1 2023
    </h2>

    <div className="flex overflow-x-auto text-sm border rounded-md">
      {/* Columna fija */}
      <table className="min-w-max bg-gray-700 text-white sticky left-0 z-10">
        <thead className="bg-blue-600">
          <tr>
            <th className="px-4 py-2">Pos</th>
            <th className="px-4 py-2">Equipo</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((team) => (
            <tr key={team.team.id} className="border-b border-gray-600">
              <td className="px-4 py-2 font-medium">{team.rank}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={team.team.logo} alt={team.team.name} className="w-5 h-5" />
                {team.team.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Parte deslizable */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#383838] text-white">
          <thead className="bg-blue-500 text-white uppercase">
            <tr>
              <th className="px-4 py-2">Pts</th>
              <th className="px-4 py-2">PJ</th>
              <th className="px-4 py-2">G</th>
              <th className="px-4 py-2">E</th>
              <th className="px-4 py-2">P</th>
              <th className="px-4 py-2">GF</th>
              <th className="px-4 py-2">GC</th>
              <th className="px-4 py-2">DIF</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((team) => (
              <tr key={team.team.id} className="border-b border-gray-600">
                <td className="px-4 py-2">{team.points}</td>
                <td className="px-4 py-2">{team.all.played}</td>
                <td className="px-4 py-2">{team.all.win}</td>
                <td className="px-4 py-2">{team.all.draw}</td>
                <td className="px-4 py-2">{team.all.lose}</td>
                <td className="px-4 py-2">{team.all.goals.for}</td>
                <td className="px-4 py-2">{team.all.goals.against}</td>
                <td className="px-4 py-2">{team.goalsDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  {/* Tabla de Goleadores y Asistencias */}
<section className="flex-1 bg-[#383838] text-white rounded-3xl px-6 py-8 shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-8">📊 Estadísticas Individuales</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Columna Goleadores */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">⚽ Máximos Goleadores</h3>
      <ul className="space-y-2 mb-4">
        {goleadores.slice(0, 5).map((player, index) => (
          <li key={player.player.id} className="rounded p-3 bg-gray-700 shadow">
            {index + 1}. {player.player.name} - {player.statistics[0].goals.total} goles ({player.statistics[0].team.name})
          </li>
        ))}
      </ul>
    </div>

    {/* Columna Asistencias */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">🎯 Máximos Asistentes</h3>
      <ul className="space-y-2">
        {asistencias.slice(0, 5).map((player, index) => (
          <li key={player.player.id} className="rounded p-3 bg-gray-700 shadow">
            {index + 1}. {player.player.name} - {player.statistics[0].goals.assists || 0} asistencias ({player.statistics[0].team.name})
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

</div>
  </>
  );
};

export default PremierLeagueHistory;
