import React, { Fragment } from "react";
import PrincipalLogo from "../Logo";
import Coments from "./Coments";
import Filter from "./Filter";
import TableCase from "./TableCase";
import WallComents from "./WallComents";
import SearcherOpinion from "./SearcherOpinion";

const Opinion = () => {
  return (
    <Fragment>
      <PrincipalLogo />
      <TableCase />
      <WallComents />
      <Coments />
      <Filter />
      <SearcherOpinion />
     
    </Fragment>
  );
};

export default Opinion;
