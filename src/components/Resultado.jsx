import React from 'react';
import styled from "@emotion/styled";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Mensaje = styled.p`
background-color: rgb(127,224,237);
margin-top: 2rem;
padding: 1rem;
text-align: center;
border: 1px solid transparent;
border-radius: 0.50em;
`

const TextoCotizacion = styled.span`
color: #FFF;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0;
`

const ResultadoCotizacion = styled.div`
text-align: center;
padding: 0.5rem;
border: 1px solid #26C6DA;
background-color: #26C6DA;
margin-top: 1rem;
position: relative;
border-radius: 0.5em;
`

const Resultado = ({cotizacion}) => {
    return (
        (cotizacion === undefined)
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            : <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>

    );
};

export default Resultado;