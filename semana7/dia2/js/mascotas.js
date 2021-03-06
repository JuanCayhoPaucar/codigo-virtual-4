import { getRazas } from "./services/raza-service.js";

const selectRaza = document.getElementById("selectRaza");

const llenarRazas = () => {
  getRazas().then((peticion) => {
    peticion.json().then((razas) => {
      console.log(razas);
      if (razas.length > 0) {
        razas.forEach((raza) => {
          let option = document.createElement("option");
          option.innerText = raza.raza_nombre;
          option.value = raza.raza_id;
          selectRaza.appendChild(option);
        });

        // IMPLEMENTAMOS SELECT2
        $("#selectRaza").select2();
      }
    });
  });
};

llenarRazas();
