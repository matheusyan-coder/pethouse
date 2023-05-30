import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>
            <p>
            A loja de vinhos e bebidas oferece uma seleção cuidadosamente curada de produtos de alta qualidade. Com uma ampla variedade de vinhos, destilados e outras bebidas, os clientes podem encontrar opções que atendam às suas preferências. Os funcionários estão prontos para ajudar e oferecer recomendações, e a loja também promove eventos especiais, como degustações e workshops. Em resumo, é um local ideal para os amantes de bebidas finas.{" "}
            </p>
            <p>
              {" "}
              A loja também oferece eventos especiais, como degustações e workshops, que proporcionam aos clientes a oportunidade de aprofundar seus conhecimentos e apreciar ainda mais o mundo das bebidas. Essas ocasiões permitem que os clientes descubram novos sabores, aprendam sobre técnicas de degustação e conheçam produtores renomados.{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about1.png"
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
            Além disso, a loja de vinhos e bebidas se preocupa com a experiência do cliente. Os funcionários estão sempre prontos para auxiliar e aconselhar, compartilhando seus conhecimentos e recomendações para ajudar os clientes a fazerem a escolha perfeita. Eles estão dispostos a responder a qualquer pergunta, fornecer informações sobre os produtos e até mesmo sugerir combinações de alimentos e bebidas para realçar a experiência gastronômica.{" "}
            </p>
            <p>
              {" "}
              Em resumo, a loja de vinhos e bebidas Malbec é um verdadeiro refúgio para os apreciadores de bebidas de qualidade. Com sua curadoria cuidadosa, variedade impressionante e serviço excepcional, essa loja oferece uma experiência única e satisfatória para todos os clientes que buscam descobrir e desfrutar de excelentes vinhos e bebidas.{" "}
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
