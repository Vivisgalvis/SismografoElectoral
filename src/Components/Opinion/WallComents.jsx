import React from "react";
import "./WallComents.css";
// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxUserCircle from '@iconify-icons/bx/bx-user-circle';
// npm install --save-dev @iconify/react @iconify-icons/bi
import uploadIcon from '@iconify-icons/bi/upload';



const WallComents = () => {
  return (
    <div className = "container-wallComents">
   
      <div className ="user-pic">
      <Icon className ="icon-user" icon={bxUserCircle} />
      <input className ="input-wall" placeholder ="Ingrese una opinion" type="text"/>
          <div className ="files">
<p className ="text-file"><Icon icon={uploadIcon} />    Archivos
</p>
          </div>

      </div>

    </div>
  );
};

export default WallComents;