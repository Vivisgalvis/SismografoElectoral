import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css'; 
import logocolbun from '../Img/logocolbun.png';


const PrincipalLogo = () => {
    return (
        <div className="container-logo-small">
          <Link to="/">
            <img src={logocolbun} className="logo-small" alt="logo" />
          </Link>
        </div>
      );
  }

export default PrincipalLogo;