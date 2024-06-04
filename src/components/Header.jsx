import React from 'react'
import HeaderImage from '../assets/header-image.svg'
import '../CSS/header.css'
const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-contents">
            <h1 className="header">
                Every order <br></br>
                fullfilled, <span className="colored-h1">on time</span>
            </h1>
            <p className="contents">
            Eliminate overstocking and under-stocking with CleverBook. 
            Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. 
            In short, we make supply meet demand, and then help you grow both.
            </p>
            <button class="get-started-btn" type="button">
                Get started with CleverBook
            </button>
        </div>
        <div className="header-image">
        <img src={HeaderImage} loading="eager" alt="every order fulfilled" className=''/>
        </div>
    </div>
  )
}

export default Header

