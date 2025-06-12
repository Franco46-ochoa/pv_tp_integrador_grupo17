import React from 'react';
import '../Styles/Header.css'; 
function Header() {
  return (
    <div className="container-fluid custom-bg py-3 px-4 d-flex align-items-center">
      <div className="fw-bold fs-1 me-4 ">LIVETECH</div>
      <div className="separator"></div>
      <div className="fw-bold fs-5 ms-4 text-uppercase" >
        Tecnología, estilo y elegancia para vos
      </div>
    </div>
  );
}

export default Header;
