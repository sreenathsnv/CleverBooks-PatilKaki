import React from 'react'
import Arrow from '../assets/arrow.svg'
import Product from '../assets/productPreview.webp'
import '../CSS/services.css'
import FeatureCard from './FeatureCard'

const features = ["HELIX: Workflow Automation",
   " Automated Purchase Planning",
   " Automated Distribution Planning",
    "Easy Integration",
    "Custom Dashboards",
    "Consensus Planning",]

const Services = () => {
  return (
    

    <div className="service-container">
        <h1 className="service-head">Things your spreadsheet wishes it could do</h1>
        <div className="main-cards-container">

            <div className="services">
                <h3 className="content-header-features">Accurate Demand Forecasting</h3>
                <p className="contents-features">Dynamically predict future demand across all channels, 
                with high accuracy and lowest granularity. Crest takes into account what traditional forecasts 
                don't: trends, 
                real-time market signals, promotional activities, and even logistics disruptions.
                </p>
                <a className="learnmore">Learn more <img src= {Arrow} alt="" srcset="" /></a>
                <div className="features-all">
                    {
                        features.map((feature,index)=>(
                            <FeatureCard key={index} feature={feature}/>
                        ))
                    }
                </div>
            </div>

            <div className="cardImage">
                <img src={Product} alt="" srcset="" />    
            </div>
        </div>
        <button className='view-all'>
            <span>View all features</span>
        </button>
    </div>

  )
}

export default Services