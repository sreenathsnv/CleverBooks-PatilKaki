import React from 'react'
import '../CSS/marquee.css'

import Aroka from '../assets/marquee/aroka.svg'
import Athlos from '../assets/marquee/athlos.svg'
import Pilgrim from '../assets/marquee/pilgrim.svg'
import Swiss from '../assets/marquee/swiss.svg'
import Swtantra from '../assets/marquee/swtantra.svg'
import Sylvi from '../assets/marquee/sylvi.svg'
import Tahilya from '../assets/marquee/tahilya.svg'
import WorldTruth from '../assets/marquee/worldTruth.svg'
import Zavya from '../assets/marquee/zavya.svg'

const cardImage = [
            Pilgrim,
            Athlos,
            Aroka,
            Swiss,
            Swtantra,
            Sylvi,
            Tahilya,
            WorldTruth,
            Zavya,
]
const MarqueeElement = () => {
  return (
    <div className='marquee-container'>
        <div className="marquee">
        {
            cardImage.map((image,index)=>(
                <img src={image} key= {index}alt="" />
            ))
        }
        </div>
    </div>
  )
}

export default MarqueeElement