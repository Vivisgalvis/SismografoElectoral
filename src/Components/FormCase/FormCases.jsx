import React, { Fragment } from "react";
import PrincipalLogo from "../Logo";
import "./FormCases.css";
import SearcherBar from "../FormCase/SearcherBar";
// npm install --save-dev @iconify/react @iconify-icons/bi
import { Icon } from "@iconify/react";
import plusIcon from "@iconify-icons/bi/plus";
import Button from "react-bootstrap/Button";

const FormCases = () => {
  return (
    <Fragment>
      <PrincipalLogo />
      <SearcherBar />

      <div>
        <p class="text">
          <Icon icon={plusIcon} />
          Ingresa un nuevo caso
        </p>
      </div>
      <div class="form-back">
        <form class="form">
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Fecha</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="container m-2">
            <input class="form-control" type="text" placeholder="Nombre" />
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Tema</option>
              <option value="1">Corporativos</option>
              <option value="2">Litigios</option>
              <option value="3">Contratos</option>
              <option value="4">Opiniones Legales y Asesoría</option>
              <option value="5">Proyectos</option>
              <option value="6">Regulaciones</option>
              <option value="7">Contingencias</option>
            </select>
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Area cliente</option>
              <option value="1">
                Gerencias de Energías Renovables y Proyectos
              </option>
              <option value="2">Gerencia de Operaciones</option>
              <option value="3">Gerencia Legal</option>
              <option value="4">Gerencia de Contabilidad</option>
              <option value="5">Gerencia de Negocias</option>
              <option value="6">Gerencia de Proyectos</option>
              <option value="7">Gerencia de Finanzas</option>
              <option value="8">Gerencia de Comunicaciones</option>
            </select>
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Entregable</option>
              <option value="1">Opinión legal</option>
              <option value="2">Informe</option>
              <option value="3">Obtención de permiso</option>
              <option value="4">Sentencia de cobro</option>
              <option value="5">Defensa legal</option>
            </select>
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Opiniones</option>
              <option value="1">Legal Interno</option>
              <option value="2">Legal Externo</option>
              <option value="3">Técnica</option>
              <option value="4">Contable</option>
            </select>
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Consideraciones</option>
              <option value="1">Ambiental</option>
              <option value="2">Política</option>
              <option value="3">Tributaria</option>
              <option value="4">Económica</option>
              <option value="5">Comunitaria</option>
            </select>
          </div>
          <div class="container m-2">
            <select class="custom-select">
              <option selected>Temas relacionados</option>
            </select>
          </div>

          <Button as="input" size="lg" type="submit" variant="success" value="Crear" />

        </form>
      </div>
    </Fragment>
  );
};

export default FormCases;
