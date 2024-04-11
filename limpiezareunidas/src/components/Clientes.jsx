import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../utils/ADAS.png";
import image2 from "../utils/BANCO-DE-LA-NACION.png";
import image3 from "../utils/CAMARA-DE-COMERCIO.png";
import image4 from "../utils/CARTAVIO.png";
import image5 from "../utils/CGM-RENTAL.png";
import image6 from "../utils/CONTROL-SALUD.png";
import image7 from "../utils/EL-CUATRERO.png";
import image9 from "../utils/GOLF-Y-COUNTRY.png";
import image10 from "../utils/GRUPO-COAM.png";
import image11 from "../utils/GRUPOFG.png";
import image12 from "../utils/HIAS.png";
import image13 from "../utils/IPESA.png";
import image14 from "../utils/KAESER.png";
import image15 from "../utils/PENOLES.png";
import image16 from "../utils/REPUESTOS-MIGUELITOS.png";
import image17 from "../utils/SAVE-THE-CHILDREN.png";
import image18 from "../utils/SUNAT.png";
import image19 from "../utils/TRITON.png";
import image20 from "../utils/WORLD-VISION.png";

const Clientes = () => {
  const settings = {
    dots: true,
    arrows: true, // Habilitar flechas de navegación
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true, // Mostrar puntos en pantallas grandes
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true, // Mostrar puntos en pantallas medianas
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          dots: true, // Mostrar puntos en pantallas pequeñas
        },
      },
    ],
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];

  return (
    <div className="container mx-auto px-8 mt-10">
      <h2 className="text-center my-4 text-blue-500 font-bold text-4xl ">
        NUESTROS CLIENTES
      </h2>
      <div className="">
        <Slider {...settings} className="mb-10">
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`Cliente ${index + 1}`}
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clientes;
