import React, { useState } from "react";

const QuienesSomos = () => {
  const [propuestaValor, setPropuestaValor] = useState(false);
const handleSomos = () => {
        setPropuestaValor(false)
}
const handleValor = () => {
    setPropuestaValor(true)
}
  return (
    <div className="mx-4 my-20" style={{maxHeight:"400px"}} id="quienessomos">
      <div className="menu  flex ">
        <button className={`p-4 text-2xl font-bold rounded-t-xl  border-2 border-gray-300 ${propuestaValor ? "text-black":"text-blue-500 bg-gray-200"}`} onClick={handleSomos}>¿QUIÉNES SOMOS?</button>
        <button className={`p-4 text-2xl font-bold rounded-t-xl  border-2 border-gray-300 ${propuestaValor ? "text-blue-500 bg-gray-200":"text-black"}`} onClick={handleValor}>PROPUESTA DE VALOR</button>
      </div>
      {!propuestaValor && (

      <div className="content_somos py-10 px-5 text-xl bg-gray-200">
        <p className="font-semibold text-xl mb-4 px-4">
          Somos Limpieza Reunidas S.A.C. Una empresa enfocada a la prestación de
          servicios de excelencia dedicada a la limpieza integral, saneamiento
          ambiental y mantenimiento en general, con una amplia experiencia de
          mas de 10 años en el Sector.
        </p>
        <ol className="list-disc pl-8">
          <li className="">
            Contamos con personal de gran experiencia que agregan valor a la
            necesidad de nuestros clientes.
          </li>
          <li>Nos destacamos por brindar un servicio personalizado.</li>
          <li>
            Nuestro trabajo se funda en los valores de la responsabilidad,
            puntualidad, calidad.
          </li>
          <li>
            Cumplimos con estándares altos de seguridad, bio-seguridad,
            preservación del medio ambiente y valorando a nuestro potencial
            humano.
          </li>
          <li>
            Nuestra labor está basada en una cultura con mucha responsabilidad
            social y el cuidado de nuestro entorno medio ambiental.
          </li>
        </ol>
      </div>
      )}
      {propuestaValor && (

      <div className="content_valor  text-2xl p-10 bg-gray-200">
        <p>
          Ofrecemos un <span className="font-semibold">servicio personalizado</span> , partiendo de un <span className="font-semibold">análisis</span>  de tus
          necesidades específicas en limpieza y mantenimiento que, junto a un
          <span className="font-semibold">asesoramiento especializado</span> , nos permite el logro de nuestro principal
          objetivo: brindarte un <span className="font-semibold">ambiente limpio y adecuado para la convivencia
          y el trabajo</span>
        </p>
      </div>

      )}
    </div>
  );
};

export default QuienesSomos;
