import React, {useState, Fragment} from 'react';
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`

const ContenedorFormulario = styled.div`
background-color: #FFFFFF;
padding: 3rem;
border: 1px solid transparent;
border-radius: 0.50em;
`

function App() {

    const [resumen, guardarResumen] = useState({});
    const [cargando, guardarCargando] = useState(false)
    const {cotizacion, datos} = resumen

    return (
        <Contenedor>
            <Header
                titulo={'Cotizador de Seguros'}
            />
            <ContenedorFormulario>
                <Formulario
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />
                {cargando ? <Spiner/> : null}

                {datos && !cargando ?
                    <Resumen
                        resumen={resumen}
                    />
                    :
                    null
                }
                {!cargando ?
                    <Resultado
                        cotizacion={cotizacion}
                    />
                    : null}

                    </ContenedorFormulario>
                    </Contenedor>
                    );
                    }

                    export default App;
