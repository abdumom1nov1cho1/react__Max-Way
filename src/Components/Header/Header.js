import React from "react";
import "../Header/Header.scss"

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div
            id="carouselExampleFade"
            class=" carusel carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fed6fe98a-7cfc-45de-b6c3-05e758467d07&w=1200&q=75"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F25e84876-fef8-40f6-a188-25896a5990da&w=1200&q=75"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4c9b7c94-af14-4537-b982-54af29f020d3&w=1200&q=75"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
