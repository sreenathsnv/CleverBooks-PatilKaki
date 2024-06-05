import React from 'react'
import { motion } from 'framer-motion'
const ReviewCard = ({image,content}) => {
  return (
    <div className="card-work">
        <motion.img
        initial={{scale:1}}
        whileHover={{scale:.95}}
        src={image} alt="Impact of RPA in Supply Chain"/>
        <div className="card-content">
            <h2>{content}</h2>
            <p className="date">Oct 12, 2023</p>
            <a href="#" className="arrow">&#x2192;</a>
        </div>
    </div>
  )
}

export default ReviewCard