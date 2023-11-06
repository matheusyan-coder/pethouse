import React from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <NavLink className="navbar-brand mx-auto fw-bold logo" to="/">
              {" "}
              <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-para-loja-de-animais-com-cachorro-e-gato-no-meio-das-patas-de-cachorro-ilustracao-em-vetor-de-estencil-de-animais_463676-1415.jpg" alt="" width={150} height={130} />{" "}
            </NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contato
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FormCadastro">
                  Cadastre-se
                </NavLink>
              </li>
            </ul>
            
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
