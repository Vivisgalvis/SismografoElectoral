import React from "react";
import "./SearcherOpinion.css"


const SearcherOpinion = () => {
  return (
 
        <div className ="box-search">
      <input
        className="search-formOpinion"
        type="text"
        placeholder="Buscar"
        aria-label="Search"
      />
      </div>
 
  );
};

export default SearcherOpinion;