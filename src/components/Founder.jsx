import React from 'react'
import '../CSS/founder.css'
import founderImage from '../assets/founders.webp'
import { motion } from 'framer-motion'
const Founder = () => {
  return (
    <div className='Founder-container'>
        <motion.div
        initial={{scale:1.3}}
        animate={{scale:1}}
        transition={{duration:.5}}

        className="image-container">
            <img src={founderImage} alt="" />
            <div className="card detailscard">
            <b>Rahul Vishwakarma, Akhil Kumar & Yogesh
            Byahatti</b> - Founders
            </div>
        </motion.div>
        <div className="founder-details">
            <h1 className="founder-head">From the founders</h1>
            <p className="quote-aim">
            We are a young company solving an age-old problem: Supply Chain. 
            Our goal is simple: to eradicate stock outs for businesses that want to grow faster. 
            Our background, tech expertise, and empathy allow us to do just that. <br></br><br></br>

            Thank you for checking out Crest, and we hope to help you always be in stock!
            </p>

            <button className='founder-button'>
                <span>View all features</span>
            </button>
        </div>
    </div>
  )
}

export default Founder