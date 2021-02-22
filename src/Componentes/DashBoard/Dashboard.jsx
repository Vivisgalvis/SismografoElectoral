import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

//const baseUrl  = 'https://storage.googleapis.com/sismoee/2019/{ciudad}/{red-social}.json'

async function getDatos() {
    try{
        const response = await axios({
            url: 'https://storage.googleapis.com/sismoee/2019/bogota/twitter.json',
            method: "GET"
        })
        return response
    }catch(e){
        console.log(e);
    }
}

function DashBoard() {
    // const url = 'https://storage.googleapis.com/sismoee/2019/{ciudad}/{red-social}.json'
    const [datos, setDatos] = useState([])
    /* const fetchApi = async() =>{
        const response = await fetch(url)
        console.log(response);
        //const responseJSON = await response.json()
        setTodos(response)
        //console.log(responseJSON);
    } */
    useEffect(() => {
        async function loadDatos() {
            const response = await getDatos()
            if (response.status === 200 ){
                setDatos(response.data)
            }
        }
        loadDatos()
        // fetchApi()
    },[])
    return(
        <Fragment>
            <div className="container">
                Hola mundo
                
                <div>
                    {/* {
                        todos.map((item)=>(
                            <button>{item}</button>
                        ))
                    } */}
                </div>
                    
            </div>
        </Fragment>
    )
}

export default DashBoard;