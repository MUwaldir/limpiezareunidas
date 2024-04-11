import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { RiMapPin2Line } from 'react-icons/ri';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import imagereclamaciones from '../utils/libro-de-reclamaciones-white.png';

const Contacto = () => {
  return (
    <div className='flex justify-between bg-blue-500 py-4 px-8 text-white h-44'>
        <div className='w-1/3'>

      <img src={imagereclamaciones} alt="Libro de reclamaciones" className="w-40 h-20 mr-4" />
        </div>
      <div className="datos flex flex-col w-1/3">
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2" />
          <p>ventas@limpiezareunidas.com</p>
        </div>
        <div className="flex items-center mb-2">
          <FaWhatsapp className="mr-2" />
          <p>+51 952 860 001</p>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2" />
          <p>+51 936 691 126</p>
        </div>
        <div className="flex items-center">
          <RiMapPin2Line className="mr-2" />
          <p>Av. Dos de Mayo 196-A Bs.As.Norte (costado policía Canina) Trujillo, Perú</p>
        </div>
      </div>
      <div className="redes ml-auto flex flex-col items-start w-1/3">
        <p className="mb-2">Nuestras Redes Sociales</p>
        <div className="flex">
          <button className="mr-2 bg-transparent border-none outline-none ">
            <AiFillFacebook size={32} />
          </button>
          <button className="bg-transparent border-none outline-none">
            <AiFillInstagram size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
