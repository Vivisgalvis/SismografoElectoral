import React, { Fragment, useState } from 'react';
import Preguntas from '../../../src/Preguntas.json';
import FormCandidatos from '../../../src/Candidatos.json'

const preguntas = Preguntas;
const formCandidatos = FormCandidatos;


function Candidatos() {

    const[pregunta, setPregunta] =useState()

    return(
        <Fragment>
            <div className="preguntas">
                <div>
                    <h1>Preguntas</h1>
                    <h3>Seleccione una pregunta</h3>
                </div>
            
                <select name="pregunta" id="selPregunta">
                    <option value="defual" placeholder="Seleccione Pregunta"></option>
                    {
                        preguntas.map((item)=>(
                            <option value="">{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="candidatos">
                <div>
                    <h1>Candidatos por </h1>
                    <h3>Seleccione un candidato</h3>
                </div>
                <div className="btnCandidatos">
                    {
                        formCandidatos.map((item)=>(
                         item.entities.map((res)=>(
                             <button>{res.name}</button>
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