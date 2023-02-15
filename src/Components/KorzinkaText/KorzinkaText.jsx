import React from "react";
import { useCart } from "react-use-cart";
import "../KorzinkaText/KorzinkaText.scss";

import axios from "axios";
//const axios = require('axios'); // legacy way
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";

const KorzinkaText = () => {
  let total = 0;

  const { t } = useTranslation();
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();

  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>
    
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.count} x ${item.price} som = ${item.count} 
    `;
  })
  .join("")}        
<b>Total:</b> ${total} som`
      )}&parse_mode=html`
    );
    // window.location.reload();
  };

  return (
    <div>
      {isEmpty ? <h1 className="ddd"> {t("ddd")} </h1> : null}

      {items.map((item) => {
        const prCount = item.count * item.price;
        total += prCount;

        if (item.count >= 1) {
          return (
            <div className="container">
              <div className="cardd">
                <div className="left">
                  <img className="img" src={item.image} alt="" />
                  <div className="text">
                    <h1 className="h1">{item.name}</h1>
                    <p className="p">{prCount} so'm</p>
                  </div>
                </div>
                <div className="right">
                  <button
                    onClick={() => updateItemQuantity(item.id, item.count++)}
                    className="btn btn-warning"
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => updateItemQuantity(item.id, item.count--)}
                  >
                    -
                  </button>
                  <img
                    onClick={() => removeItem(item.id)}
                    className="jjj"
                    src="https://cdn-icons-png.flaticon.com/512/860/860778.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        } else {
          removeItem(item.id);
        }
      })}
      <aside>
        <div className="btnd">
          <img
            className="h11"
            src="https://logobank.uz:8005/media/logos_preview/preview_MW-01.png"
            alt=""
          />
          <div className="oplata">
            <h1 className="hh1"> {t("hh1")} - </h1>
            <h1 className="obshi">{total} som</h1>
          </div>
          <div className="oplata">
            <h1 className="hh1"> {t("hh2")} - </h1>
            <h1 className="obshi"> 0 som</h1>
          </div>
          <button
            className="zakaz btn btn-danger"
            onClick={() => {
              postTest();
              localStorage.clear();
            }}
          >
            {" "}
            {t("zakaz_btn")}{" "}
          </button>
        </div>
      </aside>
      <Footer />
    </div>
  );
};

export default KorzinkaText;
