import React from 'react';
import styled from "@emotion/styled";
import {primeraMayuscula} from "../helper";

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color:#00838F ;
color: #FFF;
margin-top: 1rem;
border: 1px solid transparent;
border-radius: 0.5em;
`

const Resumen = ({resumen}) => {
    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primeraMayuscula(resumen.datos.marca)}</li>
                <li>Plan: {primeraMayuscula(resumen.datos.plan)}</li>
                <li>Año del Auto: {resumen.datos.year}</li>
            </ul>
        </ContenedorResumen>


    );
};

export default Resumen;