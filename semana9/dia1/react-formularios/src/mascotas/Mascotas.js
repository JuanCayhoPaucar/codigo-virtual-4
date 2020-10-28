import React, { useEffect, useState } from "react";
import MascotasForm from "./MascotasForm";
import MascotasTabla from "./MascotasTabla";
import { getMascotas } from "./services/mascota";

const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]);

  const traerMascotas = async () => {
    const data = await getMascotas();
    console.log(data);
    setMascotas(data);
  };

  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <>
      <MascotasForm traerMascotas={traerMascotas} />
      <MascotasTabla mascotas={mascotas} traerMascotas={traerMascotas} />
    </>
  );
};

export default Mascotas;
