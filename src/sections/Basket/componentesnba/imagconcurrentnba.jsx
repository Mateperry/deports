import React, { useEffect, useState } from "react";

import img1 from "../../../image/basket/image-basket-header/masganador.jpg";
import img2 from "../../../image/basket/image-basket-header/mejoresjugadores.jpg";
import img3 from "../../../image/basket/image-basket-header/ultimocampeonnba.jpg";
import img4 from "../../../image/basket/image-basket-header/wnba.jpg";

const imagenesnba = [img1, img2, img3, img4];

const Imagconcurrentnba = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imagenesnba.length);
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <>
            <div className="relative flex justify-center items-center w-full py-5">
                {/* Imagen rotativa de fondo */}
                <div className="absolute inset-0 w-full h-[600px] overflow-hidden">
                    <img
                        src={imagenesnba[currentImage]}
                        alt="rotating background"
                        className="w-full h-full object-cover opacity-70 transition duration-1000"
                    />
                </div>

                {/* Texto encima de la imagen */}
                <div className="mt-28 bg-white text-black p-8 rounded-lg shadow-md max-w-3xl w-full opacity-80 z-10">
                    <h1 className="text-3xl font-semibold mb-4 text-center">
                        Últimos Campeones de la NBA
                    </h1>
                    <p className="text-lg text-center mb-2">
                        🏆 <span className="font-bold">NBA Masculina:</span> Boston Celtics. (2024)
                    </p>
                    <p className="text-lg text-center mb-2">
                        🏆 <span className="font-bold">NBA Femenina:</span> Las Vegas Aces (2024)
                    </p>
                    <p className="text-lg text-center mb-2">
                        🌍 <span className="font-bold">MVP Masculino:</span> Nikola Jokic (2024)
                    </p>
                    <p className="text-lg text-center mb-2">
                        🌍 <span className="font-bold">MVP Femenino:</span> A'ja Wilson (2024)
                    </p>
                    <div className="mt-8 flex flex-col items-center animate-bounce">
                        <svg
                            className="w-8 h-8 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 4v16m0 0l4-4m-4 4l-4-4" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-500">Desliza para más información</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Imagconcurrentnba;


















