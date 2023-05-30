import React from "react";
import Product from './Product'

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.meutelemaco.com.br/wp-content/uploads/Banner-Vinho-Site-Super-Telemaco.jpg"
              class="d-block w-100"
              alt=""
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.vinhosvovito.com.br/wp-content/uploads/2018/11/BANNER-VINHOS-VO-VITO.jpg"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="data:image/jpeg;base64,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"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYd71uX5psjEC0TfH_4eR7CB6JybbjWDc95w&usqp=CAU"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>

      <Product/>
    </div>
  );
};

export default Home;
