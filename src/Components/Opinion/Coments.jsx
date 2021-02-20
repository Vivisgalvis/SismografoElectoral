import React from "react";
import "./Coments.css";
// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxUserCircle from '@iconify-icons/bx/bx-user-circle';
// npm install --save-dev @iconify/react @iconify-icons/bi
import uploadIcon from '@iconify-icons/bi/upload';
// npm install --save-dev @iconify/react @iconify-icons/carbon
import downloadIcon from '@iconify-icons/carbon/download';
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import fileSearchOutlined from '@iconify-icons/ant-design/file-search-outlined';





const Coments = () => {
  return (
    <div className = "container-coments">
   
      <div className ="user-pic2">
      <Icon className ="icon-user2" icon={bxUserCircle} />
      <p className ="text3">Publicado por:</p>
      <p className ="text3">Fecha:</p>
      </div>
      <div className ="textWallBox">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tristique est, et fringilla odio. Pellentesque et sapien tempor, luctus sem non, vestibulum leo.</p>
      </div>
       <div className ="filescoment">
       <p className ="text-file2"><Icon icon={fileSearchOutlined} />  Preview</p>  <p className ="text-file2"><Icon icon={downloadIcon} />    Descargas
</p>
        

      </div>

    </div>
  );
};

export default Coments;