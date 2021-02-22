import React, { Fragment, useEffect, useState } from 'react';
import './Candidatos.css';
import Preguntas from '../../../src/Preguntas.json';
import FormCandidatos from '../../../src/Candidatos.json'
import { useLocation } from 'react-router-dom';

const preguntas = Preguntas;
const formCandidatos = FormCandidatos;

function Candidatos(props) {
    const location = useLocation();

//console.log(location.state.ciudad);

    const [pregunta, setPregunta] = useState([])

    /* let selCandidatos = formCandidatos.map((item) => (
        item.id
    )) */
        useEffect(()=>{
            setPregunta(preguntas)
        },[])

    return (
        <Fragment>
            <div className="preguntas">
                <div>
                    <h1>Preguntas</h1>
                    {/* <h3>Seleccione una pregunta</h3> */}
                </div>
                <div class="form-floating">
                    <select name="preguntaC" id="selPregunta" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="default" placeholder="Seleccione Pregunta"></option>
                        {
                            pregunta.map((item) => (
                                <option value="">{item.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="candidatos" display="none">
                <div>
                    <h1>Candidatos por {location.state.ciudad} </h1>
                    <h3>Seleccione un candidato</h3>
                </div>
                <div className="btnCandidatos">
                    {
                        formCandidatos.map((item) => (
                            item.entities.map((res) => (
                                <button type="button" class="btn btn-outline-secondary">{res.name}</button>
                            ))
                        ))

                    }
                </div>
                <div>
                    <button>Siguiente</button>
                </div>
            </div>


        </Fragment>
    )

}
export default Candidatos;