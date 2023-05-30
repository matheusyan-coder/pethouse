import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>
            <p>
              Atualmente, a loja de pneus possui uma vasta seleção de marcas e modelos, desde pneus para carros de passeio até veículos pesados. Além disso, ela oferece serviços especializados, como alinhamento de rodas, balanceamento e troca de pneus. Os clientes podem confiar na experiência e na qualidade da loja, sabendo que suas necessidades serão atendidas com profissionalismo e atenção.{" "}
            </p>
            <p>
              {" "}
              Ao chegar a 2023, a loja de pneus celebra oito anos de sucesso e crescimento contínuo. Sua reputação como um destino confiável para pneus de alta qualidade e serviços excepcionais continua a se fortalecer. Com uma visão clara, compromisso com a qualidade e dedicação à satisfação do cliente, a loja de pneus está pronta para qualquer desafio!{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Saiba mais</h1>
            <p>
              Atualmente, a loja de pneus possui uma vasta seleção de marcas e modelos, desde pneus para carros de passeio até veículos pesados. Além disso, ela oferece serviços especializados, como alinhamento de rodas, balanceamento e troca de pneus. Os clientes podem confiar na experiência e na qualidade da loja, sabendo que suas necessidades serão atendidas com profissionalismo e atenção.{" "}
            </p>
            <p>
              {" "}
              Ao chegar a 2023, a loja de pneus celebra oito anos de sucesso e crescimento contínuo. Sua reputação como um destino confiável para pneus de alta qualidade e serviços excepcionais continua a se fortalecer. Com uma visão clara, compromisso com a qualidade e dedicação à satisfação do cliente, a loja de pneus está pronta para qualquer desafio!{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>


  );
};

export default About;
