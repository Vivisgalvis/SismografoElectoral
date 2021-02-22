import React, { Fragment, useEffect, useState } from 'react';
import FormCategorias from '../../../src/Categorias.json'
import { useLocation } from 'react-router-dom';

const formCategorias = FormCategorias

function Categorias(props) {
   /*  const location = useLocation();

console.log(location.state.ciudad); */

    const [categoria, setCategoria] = useState([])

    useEffect(()=>{
        setCategoria(formCategorias)
    })

    return(
        <Fragment>
            <div className="categorias">
                <div>
                    <h1>Categorias</h1>
                    <h3>Seleccione una categoria</h3>
                </div>
                <div className="selCategoria" >

                </div>
                {
                    categoria.map((item)=>(
                        item.categories.map((res)=>(
                            <button>{res.name}</button>
                        ))
                    ))
                }
            </div>
        </Fragment>
    )
    
}
export default Categorias;