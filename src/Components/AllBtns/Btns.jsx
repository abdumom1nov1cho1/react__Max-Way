import React from 'react'
import "./Btns.scss"
import {useTranslation} from "react-i18next"
import Slider from "react-slick";
import { HashLink } from 'react-router-hash-link';
// slider import>>>
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Btns = () => {

  const { t, i18n } = useTranslation();
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
        <header>
            <div className="container">
                <div className="slider">
                    <Slider {...settings}>
                        <div>
                        <HashLink smooth to="#Max" className="btn1">{t("btns1")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Sendvich" className="btn1">{t("btns2")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Lavash" className="btn1">{t("btns3")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Shaurma" className="btn1">{t("btns4")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Donar" className="btn1">{t("btns5")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Bagget"  className="btn1">{t("btns6")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Burger" className="btn1">{t("btns7")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Hotdog" className="btn1">{t("btns8")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Snek" className="btn1">{t("btns9")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Napitka" className="btn1">{t("btns10")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Desert" className="btn1">{t("btns11")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Sous" className="btn1">{t("btns12")}</HashLink>
                        </div>
                        <div>
                        <HashLink smooth to="#Garnir" className="btn1">{t("btns13")}</HashLink>
                        </div>                    
                        </Slider>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Btns