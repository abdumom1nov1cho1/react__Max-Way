import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"

const Navbar = () => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { items } = useCart();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F63909f85-e7e7-42b8-9312-c92f13991a37&w=64&q=75"
              alt=""
              style={{ width: "45px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  {t("navulli1")}
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">
                {t("NavUlLi2")}
                </Link>
              </li>
              <li>
                <Link to="/Filials" class="nav-link ">
                {t("NavUlLi3")}
                </Link>
              </li>

              <li>
                <Link to="/Contact" class="nav-link ">
                {t("NavUlLi4")}
                </Link>
              </li>
            </ul>
            <form class=" ggg d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder={t("NavUlLiInput")}
                aria-label="Search"
              ></input>
              <Link to="/Korzinka">
                <img
                  src="https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png"
                  alt=""
                  style={{ width: "40px" }}
                />
              </Link>
              <span className="fff">{items.length}</span>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-warning dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   <img style={{ width: "25px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/800px-Flag_of_Russia.png" alt="" /> vs  <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png"
                        alt=""
                        style={{ width: "27px" }}
                      />  
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#" onClick={() => changeLanguage("ru") } >
                      {" "}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Russia.png/800px-Flag_of_Russia.png"
                        alt=""
                        style={{ width: "30px" }}
                      />{" "}   
                      Russian
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={() => changeLanguage("en") }>
                      {" "}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png"
                        alt=""
                        style={{ width: "30px" }}
                      />   
                      USA
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
