import React from 'react'
import { products } from '../../Data'
import  { useEffect, useState } from "react";
import "./Hotdog.scss"
import { useCart } from "react-use-cart";
import {useTranslation} from "react-i18next"


const Hotdog = () => {
  const { t, i18n } = useTranslation();
  const { addItem, getItem, removeItem } = useCart()
    const [array, setarray] = useState([]);
  
    useEffect(() => {
      setarray(products);
    }, []);
  
      const newArray = array.filter((el) => el.category === "hotdog");
    

  return (
    <div>
         <header>
            <div className="container">
            <h1 id='Hotdog' className='maks' > {t("h1-5")} </h1>
                <div className="parentt">
                    {newArray.map((el) => {
                        return(
                                <div className="card">
                                    <img className='img' src={el.image} alt="" />
                                    <h1 className='h1'>{el.name}</h1>
                                    <p className='p'>{el.price} so'm</p>
                                    {!getItem(el.id) ?  (
                                    <button onClick={() => addItem(el)} className='btn btn-warning'> {t("click")} </button>) :(
                                      <button className='btn btn-danger' onClick={() => removeItem(el.id)}> {t("clickNone")} </button>
                                    )}
                                </div>    
                              )
                    })}
                </div>
            </div>
        </header>
    </div>
  )
}

export default Hotdog