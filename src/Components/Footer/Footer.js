import React from 'react'
import '../Footer/Footer.css'
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"

function Footer() {

  const { t, i18n } = useTranslation();
 

  return (
    <div>
      <div className="footer">
     
        <div className="container">
        
            <div className="foot">
             

            <div className="img">
            <img src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F63909f85-e7e7-42b8-9312-c92f13991a37&w=64&q=75" alt="" />
            </div>
                <div className="foot_btn">
                    <h4 className='h4_Foot'> {t("h4_Foot")} </h4>
                    <h4 className='h4_Foot'> {t("h4_Foot_2")} </h4>
                    <h4 className='h4_Foot'> {t("h4_Foot_3")} </h4>
            </div>
            
          
             

            </div>
            <hr />
            <div className="IkkiFooter">
                <div className="bir_fot">
                <h1 className='h1_Foot'>© Delever 2020 - 2023 {t("h4_Foot_4")} </h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
