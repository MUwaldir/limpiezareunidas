import React from "react";
import imagelimpieza from "../utils/limpieza-integral.jpg";
import imagealtura from "../utils/limpieza-en-altura.jpg";
import imagemuebles from "../utils/limpieza_de_muebles.jpg";
import imagesaneamiento from "../utils/saneamiento-ambiental.jpg";
import imageconserjeria from "../utils/consergeria-1.jpg";
import imageserviciogeneral from "../utils/servicios-generales.jpg";

const Servicios = () => {
  const data = [
    {
      id: 1,
      image: imagelimpieza,
      titulo: "Limpieza integral de ambientes",
      contenido: [
        "Limpieza general de empresas, viviendas, condominios y oficinas.",
        "Limpieza de naves industriales",
        "Limpieza de centros hospitalarios y educativos",
      ],
    },
    {
      id: 2,
      image: imagealtura,
      titulo: "Limpieza en altura y vidriería",
      contenido: [
        "Limpieza de cristales y fachadas en edificios.",
        "Limpieza de lunas (casas, dpto. y negocios).",
        "Colocación y mantenimiento de sistema directo.",
      ],
    },
    {
      id: 3,
      image: imagemuebles,
      titulo: "Limpieza de muebles",
      contenido: [
        "Lavado y mantenimiento de muebles, sofá, colchones y afines.",
        "Lavado de alfombras, tapizones y afines.",
        "Lavado general de automóviles",
      ],
    },
    {
      id: 4,
      image: imagesaneamiento,
      titulo: "Saneamiento ambiental",
      contenido: [
        "Servicio de desinfección.",
        "Servicio de desinsectación (fumigación).",
        "Servicio de desratización.",
        "Limpieza y desinfección de cisterna y tanque elevado de agua.",
      ],
    },
    {
      id: 5,
      image: imageconserjeria,
      titulo: "Conserjería",
      contenido: [
        "Recepción de documentos.",
        "El cuidado del condominio.",
        "Atención amable, respetuosa y cordial.",
        "Reporte de incidencias.",
      ],
    },
    {
      id: 6,
      image: imageserviciogeneral,
      titulo: "Servicios generales",
      contenido: [
        "Recuperación de pisos.",
        "Servicio de empastado y pintura.",
        "Servicios eléctricos básicos.",
        "Mantenimiento en general.",
      ],
    },
  ];

  const handleHover = (event) => {
    event.currentTarget.style.transform = "scale(1.1)";
  };

  const handleLeave = (event) => {
    event.currentTarget.style.transform = "scale(1)";
  };
  return (
    <div className="w-full pb-20 bg-gray-200" id="servicios">
      <p className="text-center text-blue-500 text-4xl font-bold py-10">NUESTROS SERVICIOS</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col shadow-md bg-white  overflow-hidden "
          >
            <img src={item.image} onMouseEnter={handleHover}
          onMouseLeave={handleLeave} alt="" className="object-cover h-64 md:h-auto rounded-lg transform transition-all duration-300" />
            <div className="p-6">
              <p className=" text-2xl text-blue-500 font-bold text-center">{item.titulo}</p>
              <ul className="list-disc list-outside mt-10 px-8">
                {item.contenido.map((it, index) => (
                  <li className="my-4 text-lg leading-loose font-medium" key={index}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
