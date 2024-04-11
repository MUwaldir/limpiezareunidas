import React from "react";
import logonavbar from "../utils/logo-limpieza-reunidas-small.png";
const Navbar = () => {
  return (
    <div className="h-32 flex justify-between  mx-10 items-center">
      <div className="logo h-full flex items-center">
        <img src={logonavbar} className="h-20 " alt="" />
      </div>
      <div className="menu space-x-5 text-lg font-semibold ">
        <a
          href="#quienessomos"
          className="hover:text-blue-500 hover:border-b-4 hover:border-blue-500 p-2"
        >
          ¿Quiénes Somos?
        </a>
        <a
          href="#servicios"
          className="hover:text-blue-500 hover:border-b-4 hover:border-blue-500 p-2"
        >
          Servicios
        </a>
        <a
          href=""
          className="hover:text-blue-500 hover:border-b-4 hover:border-blue-500 p-2"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default Navbar;
