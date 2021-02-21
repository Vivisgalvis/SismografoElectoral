import React, { Fragment, useState } from 'react';
import FormCategorias from '../../../src/Categorias.json'

const formCategorias = FormCategorias

function Categorias() {

    const [categoria, setCategoria] = useState()

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
                    formCategorias.map((item)=>(
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