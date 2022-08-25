import React from "react";
import '../style/style.scss';
import {useNavigate} from 'react-router-dom';

function Header() {

  let navigate = useNavigate();

  function navigation(nav: string): void{
    navigate(nav)
    console.log(nav)
  }
  
  return (
        <div className="header_container">
          <div className="name">Rupesh Pathak</div>
          <div className="content">
            <label className="btn about" onClick={() => navigation("about")}>About</label>
            <label className="btn project" onClick={() => navigation("project")}>Projects</label>
            <label className="btn contact" onClick={() => navigation("contact")}>Contact</label>
          </div>
        </div>
    )
}

export default Header;