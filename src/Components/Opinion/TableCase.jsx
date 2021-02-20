import React from "react";
import "./TableCase.css";

const TableCase = () => {
  return (
      <div className ="container-table">
          <p className ="title-cases">Casos</p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Fecha</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tema</th>
          <th scope="col">Area cliente</th>
          <th scope="col">Area relacionada</th>
          <th scope="col">Entregables</th>
          <th scope="col">Consideraciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default TableCase;
