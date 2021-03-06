import React, { useContext } from 'react'
import ContadorContext from '../context/contador/ContadorContext';
import Boton from './Boton';

const Formulario = () => {

    // Consumir una variable de estado GLOBAL
    // estamos creando una variable llamada "localContadorContext" que represente al contexto del contador

    const localContadorContext = useContext(ContadorContext);
    console.log(localContadorContext);

    return (
        <div>
            Componente Formulario
            <strong> Cuenta: </strong>{localContadorContext.cuenta}
            <hr />
            <Boton />
        </div>
    )
}

export default Formulario;
