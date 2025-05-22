import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '9fd571692f82a483ea8639b03945e3ee'; // Reemplaza con tu clave de API
const API_URL = 'https://v1.formula-1.api-sports.io/';
const SEASON = 2023;

const F1Stats = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const response = await axios.get(`${API_URL}/rankings/drivers`, {
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'v1.formula-1.api-sports.io',
          },
          params: {
            season: SEASON,
          },
        });
        setDriverStandings(response.data.response);
      } catch (err) {
        setError('Error al cargar la tabla de pilotos.');
        console.error(err);
      }
    };

    const fetchConstructorStandings = async () => {
      try {
        const response = await axios.get(`${API_URL}/rankings/teams`, {
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'v1.formula-1.api-sports.io',
          },
          params: {
            season: SEASON,
          },
        });
        setConstructorStandings(response.data.response);
      } catch (err) {
        setError('Error al cargar la tabla de constructores.');
        console.error(err);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchDriverStandings(), fetchConstructorStandings()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Cargando estadísticas...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className=" text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8 mt-20">
          Estadísticas de la Fórmula 1 - Temporada {SEASON}
        </h2>

        {/* Tabla de Puntos del Campeonato de Pilotos */}
        <section className="bg-[#252323] rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
            🏆 Campeonato de Pilotos
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-700 text-white uppercase">
                <tr>
                  <th className="px-4 py-2 text-left">Pos</th>
                  <th className="px-4 py-2 text-left">Piloto</th>
                  <th className="px-4 py-2 text-left sm:text-right">Equipo</th>
                  <th className="px-4 py-2 text-left sm:text-right">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {driverStandings.map((driver, index) => (
                  <tr key={driver.driver.id} className="border-b border-gray-600">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{driver.driver.name}</td>
                    <td className="px-4 py-2 sm:text-right">{driver.team.name}</td>
                    <td className="px-4 py-2 sm:text-right font-semibold">{driver.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tabla de Puntos del Campeonato de Constructores */}
        <section className="bg-[#252323] rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">
            🏎️ Campeonato de Constructores
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-700 text-white uppercase">
                <tr>
                  <th className="px-4 py-2 text-left">Pos</th>
                  <th className="px-4 py-2 text-left">Equipo</th>
                  <th className="px-4 py-2 text-left sm:text-right">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((constructor, index) => (
                  <tr key={constructor.team.id} className="border-b border-gray-600">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{constructor.team.name}</td>
                    <td className="px-4 py-2 sm:text-right font-semibold">{constructor.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default F1Stats;