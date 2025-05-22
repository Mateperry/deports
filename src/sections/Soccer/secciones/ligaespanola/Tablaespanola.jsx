import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TablaLaLiga = () => {
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
            league: 140,
            season: 2023
          },
          headers
        });
        const standings = tablaRes.data.response?.[0]?.league?.standings?.[0];
        setTabla(standings || []);

        // Goleadores
        const golesRes = await axios.get('https://v3.football.api-sports.io/players/topscorers', {
          params: {
            league: 140,
            season: 2023
          },
          headers
        });
        setGoleadores(golesRes.data.response || []);

        // Asistencias
        const asistenciasRes = await axios.get('https://v3.football.api-sports.io/players/topassists', {
          params: {
            league: 140,
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
    <section className="max-w-6xl mx-auto px-4 py-10 mt-10 bg-[#383838] text-white rounded-3xl ">
      {/* Tabla de Posiciones */}
      <h2 className="text-3xl font-bold text-center mb-8">
        🏆 Tabla de Posiciones - LaLiga 2023
      </h2> 
      <div className="overflow-x-auto mb-16 rounded-sm ">
        <table className="w-full text-sm text-left text-gray-700 border shadow-md ">
          <thead className="text-xs text-white uppercase bg-blue-500">
            <tr>
              <th className="px-4 py-2">Pos</th>
              <th className="px-4 py-2">Equipo</th>
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
              <tr
                key={team.team.id}
                className="bg-[#383838] border-b  transition text-white"
              >
                <td className="px-4 py-2 font-medium">{team.rank}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={team.team.logo} alt={team.team.name} className="w-5 h-5" />
                  {team.team.name}
                </td>
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
      <div className="grid grid-cols-2 gap-4 p-4 text-white">
  {/* Columna Goleadores */}
  <div>
    <h2 className="text-2xl font-semibold mb-4">⚽ Máximos Goleadores</h2>
    <ul className="space-y-2 mb-12">
      {goleadores.slice(0,5).map((player, index) => (
        <li key={player.player.id} className="  rounded p-3 shadow">
          {index + 1}. {player.player.name} - {player.statistics[0].goals.total} goles ({player.statistics[0].team.name})
        </li>
      ))}
    </ul>
  </div>

  {/* Columna Asistencias */}
  <div>
    <h2 className="text-2xl font-semibold mb-4">🎯 Máximos Asistentes</h2>
    <ul className="space-y-2">
      {asistencias.slice(0,5).map((player, index) => (
        <li key={player.player.id} className="  rounded p-3 shadow">
          {index + 1}. {player.player.name} - {player.statistics[0].goals.assists || 0} asistencias ({player.statistics[0].team.name})
        </li>
      ))}
    </ul>
  </div>
</div>

    </section>
    
  );
};

export default TablaLaLiga;
