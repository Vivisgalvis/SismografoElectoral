import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';

import Home from "./Componentes/Home/Home";
import Candidatos from "./Componentes/Candidatos/Candidatos"


function App() {
  return (
    <Fragment>
      <header>
                <h1>Sismografo Electoral</h1>
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
        <Route path="/start" exact>
          <Candidatos/>
        </Route>
      </Switch>
    </Router>
    </Fragment>
    
  );
}

export default App;
