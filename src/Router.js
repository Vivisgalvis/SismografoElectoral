import './Styles.css'
import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*Vistas*/
import Login from './Vistas/Login';
import Home from './Vistas/Home';





const Router = () => {
    return (
      
<Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/Home' component={Home}/>
  </Switch>

    )

}

export default Router;