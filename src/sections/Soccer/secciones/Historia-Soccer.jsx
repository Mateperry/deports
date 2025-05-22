import React from "react";
{/*Imagenes de cuju */ }
import img1 from "../../../image/soccer/imghistoria/cuju1.jpeg";
import img2 from "../../../image/soccer/imghistoria/cuju2.jpeg";
import img3 from "../../../image/soccer/imghistoria/cuju3.jpeg";
{/*Imagenes de Grecua y roma */ }
import img4 from "../../../image/soccer/imghistoria/grecia1.jpeg";
import img5 from "../../../image/soccer/imghistoria/grecia2.jpeg";
import img6 from "../../../image/soccer/imghistoria/grecia3.jpeg";
{/*Imagenes de Inglaterra */ }
import img7 from "../../../image/soccer/imghistoria/inglaterra1.jpeg";
import img8 from "../../../image/soccer/imghistoria/inglaterra2.jpeg";
import img9 from "../../../image/soccer/imghistoria/inglaterra3.jpeg";
{/*Imagenes de Edad Media y evolucion hacia el futbol moderno*/}
import img10 from "../../../image/soccer/imghistoria/MobFootball1.jpeg";
{/*Imgenes de  fifa juegos olimpicos y mas*/}
import img11 from "../../../image/soccer/imghistoria/Fifa1.jpeg";
import img12 from "../../../image/soccer/imghistoria/Fifa2.jpeg";
import img13 from "../../../image/soccer/imghistoria/olimpicos.jpeg";
import img14 from "../../../image/soccer/imghistoria/mundial.jpeg";
import img15 from "../../../image/soccer/imghistoria/mundial1.jpeg";
import img16 from "../../../image/soccer/imghistoria/mundial2.jpeg";
import GaleriaProfesionalizacion from "../componentes/imghistoriagaleria";  
{/*Seccion de mujeres */}
import img17 from "../../../image/soccer/imghistoria/feme1.jpeg";
import img18 from "../../../image/soccer/imghistoria/feme2.jpeg";
import img19 from "../../../image/soccer/imghistoria/feme3.jpeg";
import img20 from "../../../image/soccer/imghistoria/feme4.jpeg";
import img21 from "../../../image/soccer/imghistoria/feme5.jpeg";
import img22 from "../../../image/soccer/imghistoria/feme6.jpeg";
import img23 from "../../../image/soccer/imghistoria/feme7.jpeg";

const Historia_soccer = () => {
  return (
    <div className="max-w-7xl mt-[150px] mx-auto p-6 bg-[#a79889] shadow-lg rounded-2xl">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        Historia del Fútbol
      </h1>
{/* Sección de Orígenes del Fútbol */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">
        🏆 Orígenes del Fútbol: De los Juegos Antiguos al Deporte Moderno
        </h2>
        <p className="text-black leading-relaxed">
        El fútbol moderno, tal como lo conocemos hoy, tiene sus orígenes en el siglo XIX en Inglaterra. Sin embargo, las raíces de este deporte se remontan a civilizaciones antiguas, donde existían juegos que involucraban el uso de pelotas y ciertas reglas que se asemejan al fútbol. A través de los siglos, estos juegos se fueron transformando hasta llegar a la versión moderna del deporte.
        </p>
        <p className="text-black leading-relaxed">
        ⚽ Orígenes del Fútbol: De los Juegos Antiguos al Deporte Moderno
        Aunque las formas de juego con pelota se han dado en distintas culturas y épocas, el fútbol tal como lo conocemos tiene una historia compleja con diversas influencias que provienen de varios continentes.</p>
<div className="mt-4"> 
{/* Sección de Cuju */}
<div className="p-4 border-l-4 border-blue-500 bg-[#252423] rounded-lg mb-5">
  <h3 className="text-lg font-semibold text-blue-700 text-center md:text-left">
    🏯 China: El Cuju (蹴鞠) – Siglo II a.C.
  </h3>

  <div className="text-white text-justify mt-2 space-y-2">
    <p>
      El Cuju es considerado por la FIFA como el precursor más antiguo del fútbol moderno. En el siglo II a.C., durante la dinastía Han, los soldados chinos practicaban este juego en el que la pelota se pasaba de un jugador a otro utilizando solo los pies, sin manos. La pelota estaba hecha de cuero, rellena de plumas y cabello, lo que le daba una textura más ligera y fácil de manejar. El objetivo era introducirla en una red pequeña, que se asemejaba a las metas en el fútbol actual, pero sin la presencia de porterías fijas.
    </p>
    <p>
      El Cuju se jugaba en campos al aire libre y con reglas que variaban de una región a otra. Con el paso de los siglos, este deporte fue extendiéndose por China y alcanzó gran popularidad, especialmente en la corte imperial. En el siglo VII, bajo la dinastía Tang, el Cuju era jugado tanto por nobles como por plebeyos, y se convirtió en parte de la cultura tradicional china.
    </p>
  </div>

  {/* Imágenes del Cuju */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[img1, img2, img3].map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg w-full h-72">
        <img
          src={img}
          alt={`cuju${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>


{/* Sección de Grecia y Roma: Episkyros y Harpastum */}
  <div className="p-4 mb-5 border-l-4 border-green-500 bg-[#252423] rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 text-center md:text-left">
            🏺 Grecia y Roma: Episkyros y Harpastum
            </h3>
            <p className="text-white text-justify space-y-2">
            En la antigua Grecia, un juego llamado Episkyros era jugado entre dos equipos, y se considera uno de los antecesores más directos del fútbol europeo. Se jugaba en un campo rectangular, con un balón esférico, y el objetivo era avanzar hacia el área del equipo contrario, utilizando las manos y los pies, aunque predominaba el uso de los pies. Este juego tenía reglas flexibles, pero su característica principal era la importancia del trabajo en equipo y la estrategia, similar al fútbol moderno.
            </p>
            <p className="text-white text-justify space-y-2">
            Los romanos, al expandir su imperio, adoptaron el Episkyros y lo transformaron en el Harpastum, un juego más dinámico y físico, que involucraba un balón más pequeño y se jugaba en campos más reducidos. El Harpastum fue popular entre las legiones romanas, y se dice que los soldados romanos lo utilizaban para mantenerse en forma durante sus viajes y conquistas. La influencia de este juego se extendió por el Imperio Romano y llegó a Britania, lo que sería una de las primeras influencias en el desarrollo del fútbol en las Islas Británicas. </p>
      
          {/* Imágenes del Grecia Y Roma */}
    <div className=" justify-center gap-2 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {[img4, img5, img6].map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg w-80 h-72">
          <img
            src={img}
            alt={`cuju${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>

  </div>

{/* Sección de Inglaterra: La Formalización del Fútbol Moderno */}
  <div className="p-4 border-l-4 border-purple-500 bg-[#252423] rounded-lg">
            <h3 className="text-lg font-semibold text-purple-500  text-center md:text-left">
            🏴 Inglaterra: La Formalización del Fútbol Moderno – Siglo XIX
            </h3>
            <p className="text-white text-justify space-y-2">
            Aunque el fútbol ya existía de manera informal en diversas culturas, fue en Inglaterra, durante el siglo XIX, cuando el deporte comenzó a tomar la forma que conocemos hoy en día. En las escuelas y universidades inglesas, surgieron diversas versiones locales del fútbol, como el fútbol de campo o el fútbol escolar, pero no fue sino hasta 1863 que se estableció la primera Football Association (FA) en Inglaterra, que redactó las primeras reglas formales del fútbol moderno. </p>
            <p className="text-white text-justify space-y-2">
            A partir de ahí, el fútbol se fue extendiendo rápidamente por Europa, y más tarde por el resto del mundo, con la creación de competiciones internacionales y la formación de asociaciones nacionales de fútbol. El fútbol, con su estructura y reglas definidas, pasó a ser considerado el deporte rey.</p>
  
                {/* Imágenes del Inglaterra  */}
    <div className="justify-center gap-2 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {[img7, img8, img9].map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg w-80 h-72">
          <img
            src={img}
            alt={`cuju${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  
  </div>


</div>
      </section>
      {/* Sección de El Fútbol en la Edad Media y la Evolución hacia el Fútbol Moderno */}
      <section className="mb-8 text-justify space-y-2">
        <h2 className="text-2xl font-semibold text-black mb-4">
          El Fútbol en la Edad Media y la Evolución hacia el Fútbol Moderno : El Caos del Mob Football  🛡️ 
        </h2>
        <p className="text-black leading-relaxed">
        Durante la Edad Media, especialmente entre los siglos XII y XIV, surgió en Inglaterra una forma primitiva de fútbol conocida como Mob Football (fútbol multitudinario), una tradición profundamente arraigada en las celebraciones populares, que se jugaba mayormente durante festividades religiosas o locales, como el Martes de Carnaval o el Shrove Tuesday.
        </p>
        <div className="p-4 border-l-4 border-yellow-500 bg-[#252423]  rounded-lg mt-4">
        <h3 className="text-lg font-semibold text-yellow-700">
            ⚔️ ¿En qué consistía el Mob Football?
         </h3>

<div className="flex flex-col md:flex-row gap-6 mt-2">
  {/* Texto */}
  <div className="flex-1 text-white text-justify">
    <p>
      A diferencia del fútbol moderno, el Mob Football no contaba con reglas estandarizadas. El juego enfrentaba a pueblos rivales o a dos grandes grupos de aldeanos dentro de una misma comunidad. Participaban desde campesinos hasta artesanos, sin límite de número de jugadores.
    </p>
    <ul className="list-disc list-inside space-y-3 mb-4 mt-3">
      <li>
        El objetivo era llevar una pelota (que solía ser una vejiga de cerdo inflada, envuelta en cuero) desde un punto del pueblo hasta otro, generalmente entre dos marcas simbólicas como árboles, puentes, puertas de iglesias o incluso ríos.
      </li>
      <li>
        No había una cancha delimitada: el campo de juego era el propio pueblo, y a menudo se extendía por calles, campos y ríos.
      </li>
      <li>
        Las formas de juego variaban: en algunos pueblos se permitía usar solo los pies, en otros se podía usar todo el cuerpo, y en algunos más se recurría a la fuerza bruta sin restricciones.
      </li>
      <li>
        Se permitía empujar, agarrar, golpear, cargar e incluso embestir a los jugadores contrarios.
      </li>
    </ul>
  </div>

  {/* Imagen a la derecha */}
  <div className="flex justify-center md:justify-end mt-4 md:mt-0">
    <div className="overflow-hidden rounded-lg w-80 h-72">
      <img
        src={img10}
        alt="mob-football"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  </div>
</div>


          <h3 className="text-lg font-semibold text-yellow-700">😱 ¿Por qué era tan violento?</h3>
          <p className="text-white text-justify">
          La ausencia de reglas claras y la participación masiva hacían que el Mob Football fuera extremadamente caótico y violento. Se registraban con frecuencia lesiones graves, destrucción de propiedades, y en algunos casos incluso muertes. Los comercios cerraban por miedo a saqueos y los edificios públicos eran protegidos con barricadas improvisadas.</p>
       
          <h3 className="text-lg font-semibold text-yellow-700">👑 Prohibiciones Reales</h3>
          <p className="text-white text-justify">
          Debido a su brutalidad y a la alteración del orden público, varios monarcas ingleses intentaron prohibir el Mob Football. Algunos de los más destacados fueron:</p>
          <ul className="list-disc list-inside space-y-3 mb-4 text-white text-justify">
               <li>
               Eduardo II (1314): Emitió un edicto que prohibía "ciertos juegos públicos de pelota" en Londres, alegando que provocaban tumultos.
              </li>
                <li>
                Eduardo III (1331): Reforzó la prohibición, preocupado porque el juego distraía a los jóvenes del entrenamiento con el arco, esencial para la guerra. </li>
                <li>
                Ricardo II y Enrique IV también intentaron suprimirlo sin éxito. </li>
          </ul>
          <p className="text-white text-justify">
          Pese a las repetidas prohibiciones, el juego persistió durante siglos como una expresión de identidad local y comunitaria, especialmente en zonas rurales.</p>

          <h3 className="text-lg font-semibold text-yellow-700">🏁 Legado del Mob Football</h3>
          <p className="text-white text-justify">
          Aunque el Mob Football no tenía una estructura organizada, sentó las bases culturales del fútbol moderno, en cuanto al uso de una pelota, la participación colectiva y la rivalidad entre equipos. Además, sirvió como inspiración para los juegos de pelota que posteriormente fueron regulados en las escuelas y universidades británicas, donde más adelante surgiría el fútbol formalizado.
          Incluso hoy en día, algunas localidades británicas continúan recreando versiones tradicionales del Mob Football como parte de sus festividades, conservando una conexión directa con sus raíces medievales.</p>
        </div>
      </section>
      {/* Sección de Del Renacimiento al Siglo XIX: La Evolución hacia el Fútbol Organizado */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">
        🎓 Del Renacimiento al Siglo XIX: La Evolución hacia el Fútbol Organizado
        </h2>
        <p className="text-black mb-5">Después de siglos de desorden y violencia con el Mob Football, el juego con pelota no desapareció, sino que evolucionó gradualmente. Durante el Renacimiento y los siglos posteriores, el fútbol comenzó a transformarse, especialmente en el contexto educativo de Inglaterra. Este proceso marcó el camino hacia el fútbol reglamentado que conocemos hoy.</p>
        <div className="p-4 border-l-4 border-red-500 bg-[#252423] rounded-lg">
          <h3 className="text-lg font-semibold text-red-700">
          🏫 Escuelas Públicas Inglesas: El Nacimiento del Fútbol Moderno (Siglos XVIII – XIX)
          </h3>
          <p className="text-white mb-5">
          A partir del siglo XVIII y con más fuerza en el XIX, las llamadas "public schools" (escuelas privadas de élite como Eton, Harrow, Rugby, Winchester y Charterhouse) comenzaron a adoptar y adaptar formas locales de juegos con pelota. Aunque cada institución tenía sus propias reglas, todas compartían ciertos elementos comunes:
          </p>
          <h3 className="text-white mb-2 text-lg">⚙️ Variantes escolares</h3>
          <ul className="list-disc list-inside space-y-3 mb-4 text-white">
               <li>
               Rugby School fomentaba una versión más física del juego, donde se permitía tomar el balón con las manos, lo que más adelante dio lugar al rugby.
              </li>
                <li>
                Eton prefería un juego más técnico, con énfasis en el uso de los pies, lo cual se acercaba más al fútbol moderno.
              </li>
                <li>
                En Harrow y Westminster, se jugaban variantes mixtas, pero con un control más estricto del comportamiento violento.
              </li>
          </ul>
          <p className="text-white mb-5">Estas instituciones consideraban que el deporte formaba carácter, enseñaba disciplina, cooperación y espíritu competitivo, por lo que se integró al currículo educativo. </p>
          <h3 className="text-white text-lg"> 📝 La necesidad de reglas comunes</h3>
          <p className="text-white mb-5 "> El problema era que cada escuela tenía sus propias normas, lo que hacía imposible jugar entre instituciones. Esto llevó a la necesidad de crear un reglamento unificado, especialmente cuando los estudiantes egresaban y se encontraban en universidades como Oxford y Cambridge, donde los estilos chocaban.</p>

        <h3 className="text-white mb-2 text-lg"> 📜 1863: Fundación de The Football Association (FA)</h3>
        <p className="text-white mb-3">El 26 de octubre de 1863, en la taberna Freemasons' Tavern de Londres, representantes de distintos clubes y escuelas se reunieron para establecer las primeras reglas formales del fútbol. De este encuentro nació la Football Association (FA), considerada la primera federación de fútbol del mundo.</p>
        <h3 className="text-white text-lg"> 🧾 Reglas clave establecidas por la FA:</h3>
        <ul className="list-disc list-inside space-y-3 mb-4 text-white">
               <li>
               Se prohibió el uso de las manos (excepto por el portero).
              </li>
                <li>
                Se definió el tamaño del campo y el balón.
              </li>
                <li>
                Se establecieron normas básicas de comportamiento.
              </li>
              <li>
              Se introdujeron conceptos como el fuera de juego y las faltas.
              </li>
        </ul>
        <h3 className="text-white mb-2 text-lg"> 🌍 Expansión Global</h3>
        <p className="text-white mb-3">Gracias al Imperio Británico y la influencia de sus comerciantes, diplomáticos, marinos y obreros, el fútbol comenzó a expandirse rápidamente a otros países de Europa, América Latina, Asia y África. Las reglas establecidas por la FA fueron adoptadas internacionalmente, y en muchas regiones el fútbol se convirtió en una pasión popular.</p>
        
       
       
       </div>

      </section>
      {/* Sección de El Fútbol se Internacionaliza: FIFA, Juegos Olímpicos y la Copa Mundial */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    🌐 El Fútbol se Internacionaliza: FIFA, Juegos Olímpicos y la Copa Mundial
  </h2>
  <p className="text-black mb-5">
    A medida que el fútbol reglamentado se extendía por el mundo, surgió la necesidad de organizar competiciones internacionales y de tener un órgano rector global que unificara criterios. Fue entonces cuando nació la FIFA y comenzó la era moderna del fútbol competitivo y profesional.
  </p>
  <div className="p-4 border-l-4 border-blue-500 bg-[#1e293b] rounded-lg">
<div>
    <h3 className="text-lg font-semibold text-blue-400">🏛️ 1904: Fundación de la FIFA</h3>
    <p className="text-white mb-4">
      El 21 de mayo de 1904, representantes de siete países europeos (Francia, Bélgica, Dinamarca, Países Bajos, España, Suecia y Suiza) se reunieron en París para fundar la FIFA, con el objetivo de supervisar los partidos internacionales y promover el fútbol en todo el mundo.
    </p>
    <p className="text-white mb-4">
      Su primer presidente fue Robert Guérin, un periodista deportivo francés. Inglaterra, inicialmente reacia a unirse, se integró más adelante, reconociendo la necesidad de un organismo global.
    </p>
    <p className="text-white mb-4">
      Con la FIFA como árbitro internacional, se establecieron estándares comunes y se organizó el primer reglamento oficial para las competiciones entre países.
    </p>
      {/* Imágenes de la Fifa */}
          <div className="mt-4 mx-12 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-1">
  {[img11, img12].map((img, idx) => (
    <div key={idx} className="overflow-hidden rounded-lg w-80 h-72">
      <img
        src={img}
        alt={`cuju${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  ))}
</div>

</div>
<div className="md:flex md:items-start md:justify-between gap-6 mt-5">
  {/* Contenido de texto */}
  <div className="md:w-2/3 text-justify">
    <h3 className="text-lg font-semibold text-blue-400">🥇 El Fútbol en los Juegos Olímpicos</h3>
    <p className="text-white mb-4">
      El fútbol fue incluido por primera vez en los Juegos Olímpicos de París en 1900, aunque de forma no oficial. Fue en 1908 cuando se convirtió en deporte olímpico oficial, bajo la organización del Comité Olímpico Internacional (COI) y la colaboración con la FIFA.
    </p>
    <p className="text-white mb-4">
      En sus inicios, solo participaban equipos amateurs, lo que generó ciertas tensiones con países que ya estaban profesionalizando sus ligas.
    </p>
    <p className="text-white mb-4">
      En los Juegos de 1924 (París) y 1928 (Ámsterdam), el torneo olímpico fue considerado el campeonato mundial más prestigioso, con Uruguay como gran protagonista al ganar ambos torneos.
    </p>
    <p className="text-white mb-4">
      El éxito de Uruguay motivó a la FIFA a organizar una competición propia, exclusiva y profesional.
    </p>
  </div>

  {/* Imagen a la derecha */}
  <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
    <div className="overflow-hidden rounded-lg w-80 h-72 bg-white">
      <img
        src={img13}
        alt="olimpicos"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  </div>
</div>


<div> 
    <h3 className="text-lg font-semibold text-blue-400">🌍 1930: Nace la Copa Mundial de la FIFA</h3>
    <p className="text-white mb-4">
      La Copa Mundial fue el sueño de Jules Rimet, presidente de la FIFA entre 1921 y 1954. Su visión era crear un torneo global donde los países compitieran más allá de los Juegos Olímpicos.
    </p>
    <p className="text-white mb-4">
      La primera Copa Mundial se celebró en Uruguay del 13 al 30 de julio de 1930, coincidiendo con el centenario de la independencia del país.
    </p>
    <p className="text-white mb-4">
      Participaron 13 selecciones (7 de América y 6 de Europa), en un torneo que sentó las bases de lo que sería el mayor espectáculo deportivo del planeta.
    </p>
    <p className="text-white mb-4">
      Uruguay fue el primer campeón del mundo, tras vencer a Argentina 4-2 en la final disputada en Montevideo.
    </p>
    <p className="text-white mb-4">
      Desde entonces, la Copa Mundial se ha celebrado cada cuatro años (excepto en 1942 y 1946 por la Segunda Guerra Mundial), convirtiéndose en el evento futbolístico más importante del mundo.
    </p>
  {/* Imágenes del Cuju */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[img14, img15, img16].map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg w-full h-72">
        <img
          src={img}
          alt={`cuju${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>
<GaleriaProfesionalizacion/>    

  </div>
      </section>
      {/* Sección de La Historia del Fútbol Femenino */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    👩‍🎤 La Historia del Fútbol Femenino: De la Prohibición al Reconocimiento Global
  </h2>
  <p className="text-black mb-5">
    Aunque durante mucho tiempo fue ignorado por la historia oficial del deporte, el fútbol femenino tiene raíces profundas, resiliencia admirable y una trayectoria que ha desafiado estigmas, censuras y barreras culturales.
  </p>

  <div className="p-4 border-l-4 border-yellow-800 bg-[#4b3621] rounded-lg">

  <div className="md:flex md:items-start md:justify-between gap-6 text-justify">
  {/* Contenido de texto */}
  <div className="md:w-2/3">
    <h3 className="text-lg font-semibold text-yellow-300">
      🏛️ Orígenes: Mujeres con el balón en los siglos XIX y XX
    </h3>
    <p className="text-white mb-5">
      En Inglaterra, ya desde finales del siglo XIX, existen registros de mujeres jugando al fútbol. Uno de los equipos pioneros fue el British Ladies Football Club, fundado en 1895 por Nettie Honeyball, una activista por los derechos de la mujer.
      <br /><br />
      Durante la Primera Guerra Mundial (1914-1918), con los hombres en el frente de batalla, muchas mujeres ocuparon sus puestos en fábricas y también en los campos de fútbol. Uno de los equipos más famosos fue el Dick, Kerr Ladies FC, que llegó a jugar frente a más de 50.000 espectadores en 1920 en Goodison Park.
    </p>
  </div>

  {/* Imagen a la derecha */}
  <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
    <div className="overflow-hidden rounded-lg w-auto h-auto bg-white">
      <img
        src={img17}
        alt="orígenes del fútbol femenino"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  </div>
  </div>

    <div className="md:flex md:items-start md:justify-between gap-6 mt-6 text-justify">
       {/* Imagen a la derecha */}
      <div className="md:w-2/3">
    <h3 className="text-lg font-semibold text-yellow-300">🚫 Prohibición y Represión (1921 - 1970s)</h3>
    <p className="text-white mb-5 ">
      A pesar del éxito, en 1921, la Football Association (FA) en Inglaterra prohibió a las mujeres jugar en estadios afiliados, bajo el argumento de que el fútbol era "inapropiado para el cuerpo femenino". Esta medida influyó en muchas otras federaciones del mundo.
      <br/><br/>
      En países como Alemania, Brasil, Francia, España y Argentina, el fútbol femenino fue limitado o directamente prohibido durante décadas.
      Las mujeres continuaron jugando en ligas no oficiales, parques y espacios clandestinos, manteniendo viva la pasión y el derecho a participar.
    </p>
    </div>
      {/* Imagen a la derecha */}
  <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
    <div className="overflow-hidden rounded-lg w-auto h-auto bg-white">
      <img
        src={img18}
        alt="orígenes del fútbol femenino"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  </div>
    </div>

    <div className="text-justify">
    <h3 className="text-lg font-semibold text-yellow-300">✊ Resurgimiento y Luchas por la Legalización (1970s - 1980s)</h3>
    <p className="text-white mb-5">
      Durante los años 70, influenciadas por los movimientos feministas y de derechos civiles, muchas mujeres comenzaron a organizarse para recuperar su espacio en el fútbol.
      En 1971, la FA en Inglaterra levantó la prohibición.
      Ese mismo año se celebró un Mundial no oficial en México, con asistencia de más de 100.000 personas en el Estadio Azteca, lo que demuestra el interés masivo por el fútbol femenino a pesar del abandono institucional.
    </p>
    </div>

    <div className="md:flex md:items-start md:justify-between gap-6 mt-6 text-justify">
    <div className="md:w-2/3">
    <h3 className="text-lg font-semibold text-yellow-300">🌍 1991: Primer Mundial Femenino de la FIFA</h3>
    <p className="text-white mb-5">
      Finalmente, tras décadas de presión, la FIFA organizó la primera Copa Mundial Femenina en China (1991), con 12 equipos participantes.
      El torneo fue ganado por Estados Unidos, que desde entonces se ha consolidado como una potencia mundial.
      <br/><br/>
      Esta edición fue un punto de inflexión que impulsó la creación de ligas, torneos y programas de desarrollo en todo el mundo.
    </p>
    </div>
          {/* Imagen a la derecha */}
  <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
    <div className="overflow-hidden rounded-lg w-auto h-auto bg-white">
      <img
        src={img19}
        alt="orígenes del fútbol femenino"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  </div>
    </div>

  <div className="md:flex md:items-start md:justify-between gap-6 mt-6 text-justify">
      <div className="md:w-2/3"> 
          <h3 className="text-lg font-semibold text-yellow-300">🏆 Fútbol Femenino en la Actualidad</h3>
          <p className="text-white mb-5">
             Hoy en día, la Copa Mundial Femenina (celebrada cada 4 años) es un evento global. La edición de 2019 en Francia atrajo a más de 1.000 millones de espectadores a nivel mundial.
               El fútbol femenino ha crecido en inversión, visibilidad y profesionalismo. Países como España, Inglaterra, Brasil, Estados Unidos, Francia y Japón han desarrollado ligas sólidas.
               En Sudamérica, el proceso ha sido más lento, pero países como Colombia, Argentina y Chile están impulsando el cambio con torneos profesionales y selección nacional fortalecida.
          </p>
      </div>
    {/* Imagen a la derecha */}
      <div className="mt-4 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
         <div className="overflow-hidden rounded-lg w-auto h-auto bg-white">
         <img
            src={img20}
            alt="orígenes del fútbol femenino"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
         />
        </div>
      </div>
  </div>
    <div className="text-justify">
    <h3 className="text-lg font-semibold text-yellow-300">💪 Principales hitos recientes:</h3>
    <ul className="list-disc list-inside space-y-1 mb-4 text-white">
      <li>Estados Unidos ha ganado 4 Copas del Mundo femeninas (1991, 1999, 2015, 2019).</li>
      <li>España ganó el Mundial 2023, demostrando el poder emergente de nuevas generaciones.</li>
      <li>La lucha por la igualdad salarial y de condiciones ha tomado fuerza, con jugadoras como Megan Rapinoe, Ada Hegerberg y Alexia Putellas alzando su voz por la equidad de género en el deporte.</li>
      <li>Los Juegos Olímpicos, la Champions League Femenina y nuevas ligas como la Liga F en España o la FA Women's Super League en Inglaterra, están impulsando un futuro más justo y visible.</li>
    </ul>
    <p className="text-white">
      El fútbol femenino ya no es una promesa: es una realidad en crecimiento, y su historia es tan apasionante como la del fútbol masculino.
    </p>
      
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[img21, img22, img23].map((img, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg w-full h-72">
        <img
          src={img}
          alt={`cuju${idx + 1}`}
          className="w-auto h-auto object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
    </div>
  </div>
      </section>



      {/* Sección de La Evolución Táctica y Técnica del Fútbol */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    🧠⚙️ La Evolución Táctica y Técnica del Fútbol: De la Improvisación al Juego de Alta Precisión
  </h2>
  <p className="text-black mb-4">
    El fútbol no solo ha cambiado en velocidad, reglas y profesionalismo, también ha evolucionado en cómo se piensa, se entrena y se ejecuta. Lo que antes era pura intuición y destreza individual, hoy es un entramado de esquemas, análisis de datos y preparación milimétrica.
  </p>

  <div className="p-4 border-l-4 border-teal-600 bg-[#254E58] rounded-lg space-y-6 text-white">

    <div>
      <h3 className="text-teal-300 font-semibold">⚽ 1. El Juego de Posiciones: De la Caótica Libertad a la Organización Estratégica</h3>
      <p>
        <strong>📌 Inicios (Finales del siglo XIX - 1920s):</strong> Formaciones ofensivas como el 2-3-5 y énfasis en el talento individual. <br/>
        <strong>📌 1930s – El Sistema WM:</strong> Herbert Chapman y el equilibrio 3-2-2-3 con conceptos como marcación por zona y mediocampo funcional.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🏋️‍♂️ 2. El Fútbol Físico y Defensivo (1950s - 1960s)</h3>
      <p>
        <strong>🧱 Catenaccio Italiano:</strong> Helenio Herrera, el “libero” y el arte de defender y contraatacar. <br/>
        <strong>🇧🇷 Técnica Sudamericana:</strong> Brasil apostó por creatividad y fluidez ofensiva, brillando en 1970 con el 4-3-3.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🌀 3. El "Fútbol Total" – Holanda 1974</h3>
      <p>
        <strong>Revolución:</strong> Rinus Michels y Johan Cruyff convirtieron a todos en piezas móviles. <br/>
        <strong>Legado:</strong> Aunque no ganaron, transformaron el juego para siempre.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🧠 4. El Cerebro en el Banquillo: Entrenadores como Arquitectos</h3>
      <p>
        <strong>🎓 Arrigo Sacchi (Milán – 1980s):</strong> Presión, línea adelantada y 4-4-2 compacto. <br/>
        <strong>🧭 Johan Cruyff (Barcelona – 1990s):</strong> Posición, paciencia y la base del Barça moderno.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">📊 5. El Fútbol Moderno (2000s - Presente): Datos, Pressing y Juego Posicional</h3>
      <p>
        <strong>🔍 Revolución Analítica:</strong> Estadísticas avanzadas, IA y tecnología redefinen la preparación táctica. <br/>
        <strong>🧨 Gegenpressing Alemán:</strong> Klopp y la presión tras pérdida como arma letal. <br/>
        <strong>🎨 Juego Posicional de Guardiola:</strong> Microespacios, dominio y rotaciones constantes.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🔄 6. El Renacimiento de los Tres Defensas</h3>
      <p>
        <strong>Ejemplos modernos:</strong> Chelsea de Tuchel, Italia de Mancini. <br/>
        <strong>Estrategia:</strong> Carrileros que permiten transiciones fluidas y variantes tácticas.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🌐 7. El Fútbol Híbrido de Hoy</h3>
      <p>
        <strong>Adaptabilidad:</strong> Los equipos combinan estilos según rivales y situaciones. <br/>
        <strong>Modelos mixtos:</strong> Posición (España, Guardiola), orden (Francia, Simeone), verticalidad (Liverpool, Brasil). <br/>
        <strong>Jugadores clave:</strong> 10 clásico, falso 9, portero-jugador.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">⚙️📚 Conclusión</h3>
      <p>
        La evolución táctica del fútbol es una historia de adaptación, creatividad y revolución. Cada década trae ideas que redefinen el juego. Hoy, el fútbol es más inteligente, complejo y bello que nunca.
      </p>
    </div>

  </div>
      </section>

      {/* Sección de Fútbol, Política y Sociedad: Mucho Más Que un Juego */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    🌍⚽ Fútbol, Política y Sociedad: Mucho Más Que un Juego
  </h2>
  <p className="text-black mb-4">
    El fútbol no es solo un deporte. Es una herramienta de identidad, un arma política, una forma de protesta, un símbolo de unión, y un reflejo de las pasiones y tensiones de cada época. A lo largo de la historia, ha sido protagonista de momentos sociales y políticos tan intensos como conmovedores.
  </p>
  <div className="p-4 border-l-4 border-yellow-600 bg-[#453D3D] rounded-lg space-y-6 text-white">
    
    <div>
      <h3 className="text-yellow-300 font-semibold">🏛️ 1. El Fútbol como Herramienta Política</h3>
      
      <p className="mt-2">
        <strong>🪖 La Guerra del Fútbol (1969) – El Salvador vs Honduras</strong><br/>
        <strong>Contexto:</strong> La tensión migratoria entre ambos países desembocó en violencia. En plena eliminatoria hacia el Mundial de México 70, la situación escaló hasta el punto de una guerra real. <br/>
        <strong>Hecho histórico:</strong> Tras el triunfo de El Salvador, se declaró la guerra a Honduras. Aunque el conflicto tenía raíces sociales profundas, el fútbol fue el catalizador inmediato. <br/>
        <strong>Impacto:</strong> Demuestra cómo un partido puede convertirse en detonante de tensiones nacionales latentes.
      </p>

      <p className="mt-4">
        <strong>🏴‍☠️ El Mundial de 1934 – Propaganda Fascista en Italia</strong><br/>
        Benito Mussolini utilizó la Copa del Mundo como vitrina del régimen fascista italiano. <br/>
        Italia ganó el torneo en casa y fue usada como herramienta de propaganda para exaltar el nacionalismo. <br/>
        El árbitro sueco, que dirigió la final, fue acusado de favorecer al equipo italiano bajo presiones del régimen.
      </p>

      <p className="mt-4">
        <strong>🇦🇷 El Mundial de 1978 – Una Copa manchada por la dictadura</strong><br/>
        En plena dictadura militar argentina, la Copa del Mundo fue organizada por la Junta como elemento distractor del terrorismo de Estado. <br/>
        Se ha acusado al gobierno de haber manipulado resultados para favorecer a la selección, como el polémico 6-0 frente a Perú. <br/>
        Mientras miles de personas eran desaparecidas, el estadio Monumental estallaba en festejos.
      </p>
    </div>

    <div>
      <h3 className="text-yellow-300 font-semibold">✊ 2. Fútbol como Forma de Protesta y Resistencia</h3>

      <p className="mt-2">
        <strong>🏳️ El Fútbol Femenino y su Lucha por el Reconocimiento</strong><br/>
        Durante décadas, el fútbol femenino fue prohibido o ignorado por federaciones y gobiernos (como en Inglaterra, donde estuvo vetado por 50 años). <br/>
        Hoy, las mujeres han ganado visibilidad y derechos, con selecciones como EE.UU. y España liderando la lucha por igualdad salarial y de condiciones.
      </p>

      <p className="mt-4">
        <strong>🇮🇷 Irán – Mujeres Luchando por Entrar al Estadio</strong><br/>
        Durante años, a las mujeres se les prohibió entrar a los estadios en Irán. <br/>
        En 2019, tras presión internacional, se permitió un acceso limitado al fútbol masculino. Muchas activistas usaron el deporte como plataforma de visibilidad y cambio social.
      </p>
    </div>

    <div>
      <h3 className="text-yellow-300 font-semibold">🎭 3. Fútbol y Cultura Popular: Música, Cine y Moda</h3>

      <p className="mt-2">
        <strong>🎵 El Fútbol en la Música</strong><br/>
        Himnos como "Waka Waka" de Shakira (Sudáfrica 2010) o "We Are the Champions" de Queen se han convertido en parte esencial del imaginario futbolero. <br/>
        Artistas como Rod Stewart, Bob Marley o Snoop Dogg han confesado su pasión futbolera, fusionando arte y deporte.
      </p>

      <p className="mt-4">
        <strong>🎬 Películas que Inmortalizaron el Fútbol</strong><br/>
        "Escape to Victory" (1981): Fútbol como escape en un campo nazi. <br/>
        "Maradona" (Kusturica) y "Pelé: Birth of a Legend". <br/>
        Documentales de Netflix, Amazon y Disney han narrado historias profundas: Messi, Neymar, Beckham, y clubes como el Sunderland o el Boca Juniors.
      </p>

      <p className="mt-4">
        <strong>👟 Fútbol y Moda Urbana</strong><br/>
        Las camisetas retro, los botines, las chaquetas de equipos y hasta los estilos de corte de cabello futbolero han marcado tendencia. <br/>
        Jugadores como David Beckham, Cristiano Ronaldo y Mbappé han sido íconos globales de la moda.
      </p>
    </div>

    <div>
      <h3 className="text-yellow-300 font-semibold">🌐 4. El Fútbol como Identidad Cultural y Nacional</h3>

      <p className="mt-2">
        <strong>🇧🇷 Brasil – El Jogo Bonito como símbolo nacional</strong><br/>
        El fútbol en Brasil es más que un deporte: es una expresión cultural. El estilo alegre, técnico y creativo representa la identidad de su gente. <br/>
        El “jogo bonito” es parte del alma brasileña, junto con la samba, el carnaval y la caipirinha.
      </p>

      <p className="mt-4">
        <strong>🇩🇪 Alemania – Disciplina, orden y eficiencia también en el campo</strong><br/>
        Tras la Segunda Guerra Mundial, el “Milagro de Berna” en 1954 no solo fue un triunfo deportivo, fue el renacimiento moral y emocional de un país.
      </p>

      <p className="mt-4">
        <strong>🇨🇲 Camerún y África – Orgullo continental</strong><br/>
        El Mundial de 1990 y la figura de Roger Milla pusieron a África en el mapa del fútbol competitivo. <br/>
        El fútbol se convirtió en una vía de escape, expresión de lucha y unidad para pueblos colonizados o marginados.
      </p>
    </div>

    <div>
      <h3 className="text-yellow-300 font-semibold">💖 5. El Fútbol como Lenguaje Universal</h3>

      <p className="mt-2">
        En campos de refugiados, prisiones, pueblos remotos y grandes metrópolis… siempre hay una pelota rodando. <br/>
        El fútbol es idioma común entre desconocidos, puente entre culturas y herramienta de integración y fraternidad.
      </p>
    </div>

    <div>
      <h3 className="text-yellow-300 font-semibold">📌 Conclusión</h3>
      <p className="mt-2">
        El fútbol es más que un deporte: es arte, es política, es historia, es rebeldía, es comunidad. Su poder simbólico y social ha tocado los rincones más oscuros y luminosos del ser humano. <br/><br/>
        Como decía Eduardo Galeano: <br/>
        <em>"El fútbol es la única religión que no tiene ateos."</em>
      </p>
    </div>

  </div>
      </section>
      {/* Sección de Organizaciones del Fútbol Mundial */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    🏢🌍 Organizaciones del Fútbol Mundial: Arquitectos del Deporte Rey
  </h2>
  <p className="text-black mb-4">
    A medida que el fútbol se profesionalizaba y cruzaba fronteras, fue necesaria la creación de organismos rectores encargados de organizar torneos, definir reglamentos, garantizar la equidad competitiva y fomentar el desarrollo del deporte a todos los niveles. A continuación, te presento las organizaciones más relevantes, su historia, estructura y función.
  </p>

  <div className="p-4 border-l-4 border-yellow-600 bg-[#453D3D] rounded-lg space-y-6 text-white">

    {/* FIFA */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🌐 1. FIFA – Fédération Internationale de Football Association</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 21 de mayo de 1904<br/>
        <strong>📍 Sede:</strong> Zúrich, Suiza<br/>
        <strong>🌎 Afiliados:</strong> 211 asociaciones nacionales (más que la ONU)<br/><br/>
        <strong>🎯 Funciones Principales:</strong><br/>
        - Organizar la Copa Mundial de Fútbol Masculino y Femenino.<br/>
        - Regular las reglas del juego junto con la IFAB.<br/>
        - Promover el fútbol en todos los continentes mediante programas de desarrollo.<br/>
        - Controlar las transferencias internacionales de jugadores.<br/>
        - Supervisar a las confederaciones continentales (UEFA, CONMEBOL, etc.).<br/><br/>
        <strong>🏆 Competiciones emblema:</strong> Copa Mundial FIFA (desde 1930), Mundial Femenino, Sub-20, Sub-17, Futsal, Fútbol Playa, Mundial de Clubes.<br/><br/>
        <strong>⚠️ Controversias:</strong> Casos de corrupción (FIFA Gate 2015), críticas por derechos humanos y explotación laboral en sedes como Qatar 2022.
      </p>
    </div>

    {/* UEFA */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🇪🇺 2. UEFA – Unión de Asociaciones Europeas de Fútbol</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 15 de junio de 1954<br/>
        <strong>📍 Sede:</strong> Nyon, Suiza<br/>
        <strong>Afiliados:</strong> 55 federaciones nacionales<br/><br/>
        <strong>🎯 Funciones Principales:</strong> Organiza torneos de clubes y selecciones. Administra Champions League, Eurocopa y otras.<br/><br/>
        <strong>🏆 Competiciones clave:</strong> Champions League, Euro, Conference League, Nations League.<br/>
        <strong>👔 Poder e influencia:</strong> Confederación más poderosa económica y deportivamente.
      </p>
    </div>

    {/* CONMEBOL */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🌎 3. CONMEBOL – Confederación Sudamericana de Fútbol</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 9 de julio de 1916<br/>
        <strong>📍 Sede:</strong> Luque, Paraguay<br/>
        <strong>Afiliados:</strong> 10 países<br/><br/>
        <strong>🎯 Funciones:</strong> Organiza la Libertadores, la Copa América, Sudamericana, etc.<br/>
        <strong>💥 Legado:</strong> Cuna de leyendas como Pelé, Maradona, Messi, entre otros.
      </p>
    </div>

    {/* CAF */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🌍 4. CAF – Confederación Africana de Fútbol</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 1957<br/>
        <strong>📍 Sede:</strong> El Cairo, Egipto<br/>
        <strong>Afiliados:</strong> 54 asociaciones<br/><br/>
        <strong>🏆 Competiciones:</strong> Copa Africana de Naciones, Liga de Campeones de África, torneos juveniles y futsal.<br/>
        <strong>📈 Relevancia:</strong> Mayor presencia de jugadores africanos en Europa. Estrellas como Drogba, Eto’o, Salah, Mané.
      </p>
    </div>

    {/* AFC */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🇦🇸 5. AFC – Confederación Asiática de Fútbol</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 1954<br/>
        <strong>📍 Sede:</strong> Kuala Lumpur, Malasia<br/>
        <strong>Afiliados:</strong> 47 (incluyendo Australia)<br/><br/>
        <strong>🏆 Competiciones:</strong> Copa Asiática, AFC Champions League, Clasificatorias al Mundial.<br/>
        <strong>🌐 Expansión:</strong> Japón, Corea del Sur y Catar han impulsado el desarrollo asiático. Catar 2022 fue el primer Mundial en Medio Oriente.
      </p>
    </div>

    {/* CONCACAF */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🏝️ 6. CONCACAF – Confederación de Norte, Centroamérica y el Caribe</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 1961<br/>
        <strong>📍 Sede:</strong> Miami, EE.UU.<br/>
        <strong>Afiliados:</strong> 41<br/><br/>
        <strong>🏆 Torneos:</strong> Copa Oro, Liga de Naciones, Champions League de la región.<br/>
        <strong>💸 Influencia:</strong> MLS ha crecido. En 2026, EE.UU., México y Canadá organizarán un Mundial con 48 selecciones.
      </p>
    </div>

    {/* OFC */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🧊 7. OFC – Confederación de Fútbol de Oceanía</h3>
      <p className="mt-2">
        <strong>📅 Fundación:</strong> 1966<br/>
        <strong>📍 Sede:</strong> Auckland, Nueva Zelanda<br/>
        <strong>Afiliados:</strong> 11<br/><br/>
        <strong>📌 Particularidades:</strong> Nivel competitivo bajo. Australia se unió a la AFC en 2006 para competir a mayor nivel.
      </p>
    </div>

    {/* IFAB */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🛠️ 8. IFAB – International Football Association Board</h3>
      <p className="mt-2">
        <strong>📍 Fundación:</strong> 1886<br/>
        <strong>Miembros:</strong> Inglaterra, Escocia, Gales, Irlanda del Norte y FIFA.<br/><br/>
        <strong>🧠 Función única:</strong> Único organismo que puede cambiar las reglas del juego. Introdujo el VAR, Goal Line, y tecnologías automatizadas.
      </p>
    </div>

    {/* Organismos complementarios */}
    <div>
      <h3 className="text-yellow-300 font-semibold">🧭 9. Organismos Complementarios</h3>
      <p className="mt-2">
        <strong>FIFPro:</strong> Defiende derechos laborales de los futbolistas.<br/>
        <strong>ECA:</strong> Representa a clubes ante FIFA y UEFA.<br/>
        <strong>Otros:</strong> Global Players Union, UEFA Foundation, Common Goal: promueven el fútbol con fines sociales y solidarios.
      </p>
    </div>

    {/* Conclusión */}
    <div>
      <h3 className="text-yellow-300 font-semibold">📌 Conclusión</h3>
      <p className="mt-2">
        El mundo del fútbol está sostenido por una red global de instituciones que lo regulan, lo promueven y, en muchos casos, también lo politizan. Estas organizaciones tienen el poder de decidir el destino del juego en el planeta, siendo al mismo tiempo guardianes de la pasión y fuerzas de influencia social y económica mundial.
      </p>
    </div>

  </div>
      </section>

      {/* Sección de Momentos Icónicos en la Historia del Fútbol */}
      <section className="mb-8 text-justify">
  <h2 className="text-2xl font-semibold text-black mb-4">
    🌟 Momentos Icónicos en la Historia del Fútbol
  </h2>
  <p className="text-black mb-4">
    El fútbol está lleno de partidos legendarios, goles inolvidables, gestas heroicas y situaciones tan humanas como extraordinarias. Aquí recopilamos los momentos que definieron épocas, emocionaron al planeta entero y dejaron huella para siempre.
  </p>
  <div className="p-4 border-l-4 border-teal-600 bg-[#254E58] rounded-lg space-y-3 text-white">
    
    <div>
      <h3 className="text-teal-300 font-semibold">🇺🇾 1930 – El Primer Mundial: Uruguay Campeón en Casa</h3>
      <p>
        <strong>Contexto:</strong> En conmemoración del centenario de su independencia, Uruguay fue sede del primer Mundial organizado por la FIFA. <br/>
        <strong>Dato curioso:</strong> A pesar de las dificultades logísticas, el torneo fue un éxito. <br/>
        <strong>Momento cumbre:</strong> Uruguay venció a Argentina 4-2 ante 93.000 espectadores. <br/>
        <strong>Impacto:</strong> Nació la leyenda del fútbol como evento global.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇧🇷 1958 – El Nacimiento del Rey Pelé</h3>
      <p>
        <strong>Contexto:</strong> Mundial de Suecia. Brasil llegó con una generación dorada y Pelé de 17 años. <br/>
        <strong>Momentos legendarios:</strong> Hat-trick en semifinales; en la final, control de pecho, sombrero y volea. <br/>
        <strong>Impacto:</strong> Brasil ganó su primer Mundial y Pelé deslumbró al mundo.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🏴‍☠️ 1966 – Inglaterra Campeona con Gol Fantasma</h3>
      <p>
        <strong>Contexto:</strong> Final del Mundial ante Alemania Federal. <br/>
        <strong>Hecho icónico:</strong> El famoso “gol fantasma” de Geoff Hurst en tiempo extra. <br/>
        <strong>Resultado:</strong> Inglaterra ganó 4-2. <br/>
        <strong>Controversia:</strong> El gol aún se debate hoy.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇧🇷 1970 – El Brasil de Pelé, el Fútbol en su Máxima Expresión</h3>
      <p>
        <strong>Contexto:</strong> México 1970, primer Mundial a color. <br/>
        <strong>Momento histórico:</strong> Gol colectivo finalizado por Carlos Alberto. <br/>
        <strong>Impacto:</strong> Brasil ganó su tercera Copa y conservó la Jules Rimet.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇦🇷 1986 – Maradona: Mano de Dios + Gol del Siglo</h3>
      <p>
        <strong>Contexto:</strong> Cuartos de final vs Inglaterra en plena tensión post-Malvinas. <br/>
        <strong>Momento 1:</strong> Gol con la mano. <br/>
        <strong>Momento 2:</strong> El mejor gol de la historia, dejando atrás a medio equipo inglés. <br/>
        <strong>Impacto:</strong> Argentina ganó el Mundial, y Maradona se convirtió en mito.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇫🇷 1998 – Zidane y Francia Campeones del Mundo</h3>
      <p>
        <strong>Contexto:</strong> Francia buscaba su primer título como anfitrión. <br/>
        <strong>Momento estelar:</strong> Zidane marcó dos goles de cabeza. <br/>
        <strong>Impacto:</strong> Victoria simbólica de una Francia multicultural.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇧🇷 2002 – Ronaldo, la Redención del Fenómeno</h3>
      <p>
        <strong>Contexto:</strong> Corea-Japón. Ronaldo regresó tras lesiones graves. <br/>
        <strong>El renacimiento:</strong> Máximo goleador y dos goles en la final. <br/>
        <strong>Impacto:</strong> Brasil pentacampeón. Ronaldo cerró un ciclo glorioso.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇪🇸 2010 – España y el Tiki-Taka Inmortal</h3>
      <p>
        <strong>Contexto:</strong> España llegó como campeona de Europa. <br/>
        <strong>Momento icónico:</strong> Iniesta marcó en el minuto 116. <br/>
        <strong>Impacto:</strong> Primer título mundial y legado táctico eterno.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇩🇪 2014 – Alemania Humilla a Brasil 7-1</h3>
      <p>
        <strong>Contexto:</strong> Semifinal sin Neymar ni Thiago Silva. <br/>
        <strong>Momento brutal:</strong> Alemania ganaba 5-0 en 29 minutos. <br/>
        <strong>Impacto:</strong> Brasil vivió su peor derrota. Alemania ganó el título.
      </p>
    </div>

    <div>
      <h3 className="text-teal-300 font-semibold">🇦🇷 2022 – Lionel Messi Completa su Leyenda</h3>
      <p>
        <strong>Contexto:</strong> Último Mundial de Messi. <br/>
        <strong>Final legendaria:</strong> Argentina vs Francia, 3-3, victoria por penales. <br/>
        <strong>Impacto:</strong> Messi levantó la Copa y cerró su historia con broche de oro.
      </p>
    </div>

  </div>
      </section>



    </div>
  );
  
};

export default Historia_soccer;