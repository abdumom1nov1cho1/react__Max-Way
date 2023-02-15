import React from 'react'
import '../Filials/FilialsText.css'
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"


function FilialsText() {

     const { t, i18n } = useTranslation();

  return (
    <div>
        
     
      <div className="container">
      <h1 className='h1_Contacts'> {t("h1_Contacts")} </h1>
      <div className="cardA my-4">
       
       <div className="card-body">
           <div className="card-text d-flex justify-content-between">
               <h2 className='h2_Filials'>MAX WAY RISOVIY</h2>
               <span> {t("span")} </span>
               </div>
       <p> {t("p")} </p>
       </div>
       <div className="card-line"></div>
       <div className="card-body2">
          <div className="card-text2 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial")} :</p>
               <p className='P_Filial_Tel' > {t("P_Filial_Tel")} :</p>
          </div>
          <div className="card-text3 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial_Day")} : 09:00-03:00</p>
               <p className='P_Filial'>+998712005400</p>
          </div>
         </div>
     </div>

     <div className="cardA my-4">
       
       <div className="card-body">
           <div className="card-text d-flex justify-content-between">
               <h2 className='h2_Filials'>MAX WAY PARUS</h2>
               <span> {t("span")}</span>
               </div>
       <p> {t("p")} </p>
       </div>
       <div className="card-line"></div>
       <div className="card-body2">
          <div className="card-text2 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial")} :</p>
               <p className='P_Filial_Tel' > {t("P_Filial_Tel")} :</p>
          </div>
          <div className="card-text3 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial_Day")} : 09:00-03:00</p>
               <p className='P_Filial'>+998712005400</p>
          </div>
         </div>
     </div>


     <div className="cardA my-4">
       
       <div className="card-body">
           <div className="card-text d-flex justify-content-between">
               <h2 className='h2_Filials' >MAX WAY MAGIC CITY</h2>
               <span> {t("span")} </span>
               </div>
       <p> {t("p")} </p>
       </div>
       <div className="card-line"></div>
       <div className="card-body2">
          <div className="card-text2 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial")} :</p>
               <p className='P_Filial_Tel' > {t("P_Filial_Tel")} :</p>
          </div>
          <div className="card-text3 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial_Day")} : 09:00-03:00</p>
               <p className='P_Filial'>+998712005400</p>
          </div>
         </div>
     </div>



     <div className="cardA my-4">
       
       <div className="card-body">
           <div className="card-text d-flex justify-content-between">
               <h2 className='h2_Filials'>MAX WAY SAMARQAND DARVOZA</h2>
               <span> {t("span")} </span>
               </div>
       <p> {t("p")} </p>
       </div>
       <div className="card-line"></div>
       <div className="card-body2">
          <div className="card-text2 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial")} :</p>
               <p className='P_Filial_Tel' > {t("P_Filial_Tel")} :</p>
          </div>
          <div className="card-text3 d-flex justify-content-between">
               <p className='P_Filial'> {t("P_Filial_Day")} : 09:00-03:00</p>
               <p className='P_Filial'>+998712005400</p>
          </div>
         </div>
     </div>
      </div>
        
      
    </div>
  )
}

export default FilialsText
