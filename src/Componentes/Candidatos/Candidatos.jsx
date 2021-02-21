import React, { Fragment, useState } from 'react';
import Preguntas from '../../../src/Preguntas.json';

const candidatos = Preguntas;

console.log(candidatos);

function Candidatos() {

    const[pregunta, setPregunta] =useState()

    return(
        <Fragment>
            <div>
                <h1>Preguntas</h1>
                <h3>Seleccione una pregunta</h3>
            </div>
            <select name="pregunta" id="selPregunta">
                <option value="defual" placeholder="Seleccione Pregunta"></option>
                {
                    candidatos.map((item)=>(
                        <option value="">{item.name}</option>
                    ))
                }
            </select>
        </Fragment>
    )
    
}
export default Candidatos;