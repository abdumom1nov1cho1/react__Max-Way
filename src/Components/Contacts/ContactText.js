import React from 'react'
import '../Contacts/Contact.css'
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"

function ContactText() {

  const { t, i18n } = useTranslation();

  return (
    <>
       <div className="ContactText1">
        <div className="container">
          <div className="Contactlar">
          <h1 className='h1_Contacts'> {t("h1_Contacts_")} </h1>
        <div className="Frame">
          <img className='img_qr' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QW_T79Dwn0PMYWpVZMUlXgQj7vQFYfqemQ4sIM2PfR0NlcZM5mDgiD0ZzluQPRjFRHk&usqp=CAU" alt="" />
      <h5 className='h5_cont'> {t("h5_cont")}  Telegram</h5>
<h4 className='h4_cont'>@maxwaymasterfood_bot</h4>
        </div>
<br />
        <h4> {t("mn")} </h4>
        <h6>+99871200540</h6>
          </div>
       

      </div>
      </div>

      
    </>
  )
}

export default ContactText
