import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../../image/basket/Allstar/img11.png';
import img2 from '../../../image/basket/Allstar/img12.png';
import img3 from '../../../image/basket/Allstar/img13.png';
import img4 from '../../../image/basket/Allstar/img14.png';
import img5 from '../../../image/basket/Allstar/img15.png';
const Otrascompeticiones= () => {
  const imagenes = [
    img1, img2, img3, img4, img5,
   
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [totalVisible, setTotalVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTotalVisible(1);
      } else {
        setTotalVisible(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="text-white mb-10 mx-4 md:mx-8">
      <div className="relative flex items-center">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-0 z-10 p-2 rounded-full shadow ${
            startIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <ChevronLeft />
        </button>

        <div className="overflow-hidden w-full mx-auto md:mx-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${imagenes.length * 100 / totalVisible}%`,
              transform: `translateX(-${(startIndex * 100) / imagenes.length}%)`
            }}
          >
            {imagenes.map((src, index) => (
              <div key={index} className={`w-full md:w-1/3 flex justify-center items-center p-2`}>
                <img
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-48 md:h-64 object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>

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

export default Otrascompeticiones;