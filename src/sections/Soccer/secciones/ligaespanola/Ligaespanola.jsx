import React, { useEffect, useState } from 'react';
import TablaLaLiga from './tablaespanola';
import TablaLaLigaF from './Tabladelaligaf';

const Ligaespanola = () => {
  return (
    <>
    {/*Historia de LaLiga y LaLigaF*/ }
    <section className="bg-gradient-to-b  py-10 px-4 md:px-16 lg:px-24 mt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Historia de La Liga Española</h2>

        {/* Masculina */}
        <article className="mb-12 text-white">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">La Liga Masculina</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpP6MMY8qXR6Obd5hO91ISbpDoR4TlAUNzBw&s"
            alt="Logo La Liga Masculina"
            className="w-60 mx-auto mb-6"
          />
          <p className="text-lg text-justify mb-4 ">
            La Liga Española masculina, conocida como "LaLiga", es el campeonato profesional de fútbol más importante de España.
            Fue fundada en 1929 y desde entonces ha sido uno de los torneos más competitivos y prestigiosos del mundo.
            El torneo fue dominado durante décadas por el Real Madrid y el FC Barcelona, aunque clubes como el Atlético de Madrid,
            Valencia CF, y el Athletic Club también han tenido épocas de gloria.
          </p>
          <p className="text-lg text-justify mb-4">
            A lo largo de su historia, LaLiga ha contado con figuras legendarias como Alfredo Di Stéfano, Johan Cruyff, Zinedine Zidane,
            Ronaldinho, Cristiano Ronaldo y Lionel Messi, quienes marcaron época en sus respectivos equipos.
          </p>
          <p className="text-lg text-justify">
            Actualmente, LaLiga sigue siendo una de las competiciones más vistas a nivel mundial, destacando por su intensidad,
            calidad técnica y rivalidades históricas como el "El Clásico" entre Real Madrid y Barcelona.
          </p>
        </article>

        {/* Femenina */}
        <article className=' text-white'>
          <h3 className="text-3xl font-semibold text-pink-600 mb-4">La Liga Femenina</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbQgIJ_gD6s0NiHu0eH1v5Jg1eSPMt31Kmg&s"
            alt="Logo Liga F"
            className="w-60 mx-auto mb-6"
          />
          <p className="text-lg text-justify mb-4">
            La Liga Femenina de España, conocida actualmente como "Liga F", ha tenido un desarrollo progresivo desde sus inicios en 1988.
            Aunque inicialmente recibió poca cobertura mediática, ha ganado gran popularidad y profesionalización en los últimos años,
            especialmente tras los éxitos de la selección española y de clubes como el FC Barcelona Femení.
          </p>
          <p className="text-lg text-justify mb-4">
            La profesionalización de la liga llegó oficialmente en la temporada 2021-2022, convirtiéndose en una de las pocas ligas femeninas profesionales de Europa.
            Desde entonces, ha atraído más inversión, mayor audiencia y un nivel competitivo en constante crecimiento.
          </p>
          <p className="text-lg text-justify">
            La Liga F ha sido clave para el desarrollo del fútbol femenino en España, destacando talentos como Alexia Putellas, Irene Paredes,
            Jenni Hermoso, y Aitana Bonmatí, quienes también han brillado a nivel internacional.
          </p>
        </article>
      </div>
    </section>
    <h3 className="text-3xl font-semibold  px-4 md:px-16 lg:px-24 mt-24  text-blue-600 mb-4">Tabla Ultima Temprada LaLiga</h3>
      <TablaLaLiga />
      <h3 className="text-3xl font-semibold  px-4 md:px-16 lg:px-24 mt-24  text-pink-600 mb-4">Tabla Ultima Temprada LaLigaF</h3>
      <TablaLaLigaF />
    </>
  );
};

export default Ligaespanola;

