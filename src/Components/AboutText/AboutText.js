import React from "react";
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"

function AboutText() {

  const { t, i18n } = useTranslation();
  const { addItem, getItem, removeItem } = useCart()

  return (
    <div>
      <div className="About">
        <div className="container">
          <h1 className="h1_About"> {t("h1_About")} </h1>
          <img
            className="img_About"
            src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
            alt=""
          />
          <p className="p_About">
           {t("p_About")} <br />{" "}
          </p>
          <p>
           {t("p_About_2")} <br />{" "}
          </p>
          <p>
          {t("p_About_3")}  <br />{" "}
          </p>
          <p>
             <br />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
