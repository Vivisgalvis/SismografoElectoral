import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Categorias from '../../../src/Categorias.json';


const categorias = Categorias



function Home() {

    const [ciudadName, setCiudadName] = useState([])
    const [valorSelecionado, setValorSeleccionado] = useState("")

    useEffect(()=>{
        //console.log('useEfect');
        setCiudadName(categorias)
    },[])

    function handleChange (event) {
       //console.log(event.target.value); 
       setValorSeleccionado(event.target.value)
    }

    return (
        <Fragment>
            <div className="containerForm">
                <div className="col">
                    <div className="row-6">
                        <h3>Pais</h3>
                        <select name="pais" id="selPais" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option value="defaul"></option>
                            <option value="">Colombia</option>
                        </select>
                    </div>
                    <div className="row-6">
                        <h3>Ciudad</h3>
                        <select onChange={handleChange} value={valorSelecionado} name="ciudad" id="selCiudad" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option value="defaul">  </option>
                            {
                                ciudadName.map((item) => (
                                    <option value={item.name}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <Link to={{ pathname: "/Start", state: { ciudad:valorSelecionado} }}>
                        <button>Continuar</button>
                    </Link>
                </div>
                
            </div>
        </Fragment>
    )

}
export default Home;

