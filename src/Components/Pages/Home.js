import React from 'react'
import Header from '../Header/Header.js'
import Lavash from '../MaksiBoks/MaksiBoks.jsx'
import Sendvich from '../Sendvich/Sendvich.jsx'
import Shaurma from '../Shaurma/Shaurma.js'
import Gamburger from '../Gamburger/Gamburger.js'
import HotDog from '../HotDog/HotDog.js'
import Footer from '../Footer/Footer.js'


const Home = () => {
  return (
    <div>
        <Header/>
        <Lavash/>
        <Sendvich/>
        <Shaurma/>
        <Gamburger/>
        <HotDog/>
        <Footer/>
    </div>
  )
}

export default Home