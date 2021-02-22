import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';

import Home from "./Componentes/Home/Home";
import Candidatos from "./Componentes/Candidatos/Candidatos"
import Categorias from "./Componentes/Categorias/Categorias"
import DashBoard from './Componentes/DashBoard/Dashboard';


function App() {
  return (
    <Fragment>
      <header>
                <h1>Sismógrafo Electoral</h1>
      </header>
      <mat-horizontal-steper>
      <div className="mat-horizontal-header-container">
        <mat-step-header >
          <div class="mat-step-label mat-step-label-active mat-step-label-selected">
          1.Paises y Ciudades
          </div>
        </mat-step-header>
        <div className="mat-horizontal-line "></div>
        <mat-step-header>
          <div class="mat-step-label">
          2.Candidatos(Opcional)
          </div>
        </mat-step-header>
        <div className="mat-horizontal-line "></div>
        <mat-step-header>
          <div class="mat-step-label">
          3.Categorias
          </div>
        </mat-step-header>
      </div>
      </mat-horizontal-steper>
      <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Start" exact>
          <Candidatos/>
        </Route>
       
        <Route path="/Cate" exact>
          <Categorias/>
        </Route>
        <Route path="/Dash" exact>
          <DashBoard/>
        </Route>
      </Switch>
    </Router>
    </Fragment>
    
  );
}

export default App;
