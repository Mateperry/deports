import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../../image/soccer/imghistoria/Galeria/img1.jpeg';
import img2 from '../../../image/soccer/imghistoria/Galeria/img2.jpeg';
import img3 from '../../../image/soccer/imghistoria/Galeria/img3.jpeg';
import img4 from '../../../image/soccer/imghistoria/Galeria/img4.jpeg';
import img5 from '../../../image/soccer/imghistoria/Galeria/img5.jpeg';
import img6 from '../../../image/soccer/imghistoria/Galeria/img6.jpeg';
import img7 from '../../../image/soccer/imghistoria/Galeria/img7.jpeg';
import img8 from '../../../image/soccer/imghistoria/Galeria/img8.jpeg';     
import img9 from '../../../image/soccer/imghistoria/Galeria/img9.jpeg';
import img10 from '../../../image/soccer/imghistoria/Galeria/img10.jpeg';

const GaleriaProfesionalizacion = () => {
  const imagenes = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10                 
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalVisible = 3;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + totalVisible < imagenes.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="text-white mb-10">
      <h3 className="text-lg font-semibold text-blue-400">📈 Profesionalización y Globalización</h3>
      <p className="mb-4">
        Durante el siglo XX, el fútbol vivió una expansión sin precedentes:
      </p>
      <ul className="list-disc list-inside space-y-3 mb-4">
        <li>Se fundaron federaciones nacionales en casi todos los países.</li>
        <li>Surgieron ligas profesionales en Europa, América, Asia y África.</li>
        <li>La FIFA organizó nuevos torneos, como el Mundial Juvenil, el Mundial Femenino (1991), y la Copa Confederaciones.</li>
        <li>Se establecieron competiciones continentales como la Eurocopa, la Copa América, la Copa Africana de Naciones, la Copa Asiática y la Concacaf Gold Cup.</li>
      </ul>
      <p className="mb-6">
        La televisión, el patrocinio y la publicidad transformaron el fútbol en un fenómeno cultural, político y económico de escala mundial.
      </p>

      {/* Galería */}
      <div className="relative flex items-center ">
        {/* Botón izquierdo */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-0 z-10 p-2 rounded-full shadow ${
            startIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <ChevronLeft />
        </button>

        {/* Contenedor de imágenes */}
        <div className="overflow-hidden w-full mx-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${imagenes.length * 100 / totalVisible}%`,
              transform: `translateX(-${(startIndex * 100) / imagenes.length}%)`
            }}
          >
            {imagenes.map((src, index) => (
              <div key={index} className="w-1/3 flex justify-center items-center p-2">
                <img
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-64 object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botón derecho */}
        <button
          onClick={handleNext}
          disabled={startIndex + totalVisible >= imagenes.length}
          className={`absolute right-0 z-10 p-2 rounded-full shadow ${
            startIndex + totalVisible >= imagenes.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GaleriaProfesionalizacion;
