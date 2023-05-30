import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="col-12 text-center">
          <h1 className="text-dark fw-bold mb-4">Contato</h1>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/contato.png"
              alt="About Us"
              height="350px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <p> Email: melbec@gmail.com</p>
            <p> Telefone:(11) 3348-9033</p>
            <p> WhatsApp: (11) 97972-8033</p>
            <p> Encontre nossa loja: Av Sapopeia, 509 - São Paulo, SP</p>
            <p></p>
            <h3 className="text-dark">Muito Obrigado!!</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
