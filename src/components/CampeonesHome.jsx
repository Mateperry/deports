import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CampeonesHome = () => {
  const [finalChampions, setFinalChampions] = useState(null);
  const [finalEuropa, setFinalEuropa] = useState(null);
  const [finalLibertadores, setFinalLibertadores] = useState(null);

  const API_KEY = "9fd571692f82a483ea8639b03945e3ee";
  const BASE_URL = "https://v3.football.api-sports.io";

  useEffect(() => {
    const fetchFinals = async () => {
      try {
        const [finalChampionsResponse, finalEuropaResponse, finalLibertadoresResponse] =
          await Promise.all([
            axios.get(`${BASE_URL}/fixtures?league=2&season=2023&round=Final`, {
              headers: { "x-apisports-key": API_KEY },
            }),
            axios.get(`${BASE_URL}/fixtures?league=3&season=2023&round=Final`, {
              headers: { "x-apisports-key": API_KEY },
            }),
            axios.get(`${BASE_URL}/fixtures?league=13&season=2023&round=Final`, {
              headers: { "x-apisports-key": API_KEY },
            }),
          ]);

        if (finalChampionsResponse.data.response.length > 0) {
          setFinalChampions(finalChampionsResponse.data.response[0]);
        }
        if (finalEuropaResponse.data.response.length > 0) {
          setFinalEuropa(finalEuropaResponse.data.response[0]);
        }
        if (finalLibertadoresResponse.data.response.length > 0) {
          setFinalLibertadores(finalLibertadoresResponse.data.response[0]);
        }
      } catch (error) {
        console.error("Error obteniendo datos de la API:", error);
      }
    };

    fetchFinals();
  }, []);

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      {[finalChampions, finalEuropa, finalLibertadores].map((final, index) =>
        final ? (
          <Link
            key={index}
            // Ruta dinámica según el campeonato
            className="bg-white p-4 rounded-lg shadow-md text-center w-80 block hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">
              Final {[
                "de la Champions",
                "de la Europa League",
                "de la Copa Libertadores",
              ][index]} {" "}2023
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex flex-col items-center">
                <img
                  src={final.teams.home.logo}
                  alt={final.teams.home.name}
                  className="w-16 h-16"
                />
                <p className="font-bold mt-2">{final.teams.home.name}</p>
                <p className="text-lg font-bold">{final.goals.home}</p>
              </div>
              <p className="text-lg font-bold">VS</p>
              <div className="flex flex-col items-center">
                <img
                  src={final.teams.away.logo}
                  alt={final.teams.away.name}
                  className="w-16 h-16"
                />
                <p className="font-bold mt-2">{final.teams.away.name}</p>
                <p className="text-lg font-bold">{final.goals.away}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              {new Date(final.fixture.date).toLocaleDateString()} - {" "}
              {new Date(final.fixture.date).toLocaleTimeString()}
            </p>
            <p className="mt-2 text-gray-600">Estadio: {final.fixture.venue.name}</p>
          </Link>
        ) : (
          <p key={index} className="text-gray-600 text-center mt-2">
            Cargando datos de la final...
          </p>
        )
      )}
    </div>
  );
};

export default CampeonesHome;
