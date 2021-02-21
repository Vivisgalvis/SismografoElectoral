import React, { Fragment, useState } from 'react';
import Categorias from '../../../src/Categorias.json'

const categorias = Categorias



function Home() {

    const [ciudad, setCiudad] = useState()





    return(
        <Fragment>
            
        <div className="col">
            <div className="row-6">
                <h3>Pais</h3>
                <select name="pais" id="selPais">
                    <option value="defaul"></option>
                    <option value="">Colombia</option>
                </select>
            </div>
            <div className="row-6">
                <h3>Ciudad</h3>
                <select name="ciudad" id="selCiudad">
                    <option value="defaul">  </option>
                    {
                        categorias.map((item)=>(
                            <option value="">{item.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
        <button><link to="/start"></link>Continuar</button>
        </Fragment>
    )
    
}
 export default Home;

/* function useCiudad () {
    const [ciudad, setCiudad] = useState ([])

    useEffect(() =>{
        fetch("./Categorias.json")
        .then(response => response.json)
        .then(datos =>{
            setCiudad(datos.ciudad)
        })
    }, [])
    return ciudad
}

export default function Home(){

    const ciudad = useCiudad()

    return(

        <Fragment>
            <header>
            <h1> Sismografo Electoral</h1>
        </header>

        <div className="form-back">
            <form className="form">
                <div className="container m2">
                    <label htmlFor="">Pais</label>
                    <select className="custom-select">
                        <option value="defaul" disabled> </option>
                        <option value="2">Colombia</option>
                    </select>
                </div>
                <div className="container m2">
                    <label htmlFor="">Ciudad</label>
                    {ciudad.map(item => (
                    
                    <select className="custom-select">
                         <option value="defaul" disabled> </option>
                         <option value="1">{item.name}</option>
                     </select>

                    ))}
                   
                </div>
            </form>
        </div>
        </Fragment>
        

    )
}
 */



/* const FormCases = () =>{
    return (
        <Fragment>
            <header>
            <h1> Sismografo Electoral</h1>
        </header>

        <div className="form-back">
            <form className="form">
                <div className="container m2">
                    <label htmlFor="">Pais</label>
                    <select className="custom-select">
                        <option selected> </option>
                        <option value="2">Colombia</option>
                    </select>
                </div>
                <div className="container m2">
                    <label htmlFor="">Ciudad</label>
                    <select className="custom-select">
                        <option selected> </option>
                        <option value="1"></option>
                    </select>
                </div>
            </form>
        </div>
        </Fragment>
        
    );
};

export default FormCases; */