import React, { useEffect, useState } from 'react'
import '../CSS/story.css'
import {motion} from 'framer-motion'

import right from '../assets/btns-arrow/right.svg'
import prof1 from '../assets/founder-1.jpg'
import prof2 from '../assets/founder-2.webp'
import PTAL from '../assets/PAL.png'
import Samosa from '../assets/Card2.webp'
import PTALCard from '../assets/SamosaPartyCard.webp'
import samosaIcon from '../assets/Samosa.png'
import Kirti from './sub/Kirti'
import DishaCard from './sub/DishaCard'

const cardData = [
    {
        content:"D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
        profilepic:prof2,
        name:'Diksha Pande',
        occupation:'Co-founder, Samosa Party',
        brandIcon:samosaIcon,
        Card:DishaCard,
        sideImage:Samosa
    },
    {
        content:"As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
        profilepic:prof1,
        name:'Kirti Goel',
        occupation:'Co-founder,P-TAL',
        brandIcon:PTAL,
        Card:Kirti,
        sideImage:PTALCard
    },
    
]

const Story = () => {

    const [profileBool,setProfileBool] = useState(true)
    const [data,setData] = useState(cardData[0])
    const [isAnimating, setIsAnimating] = useState(false)


    const handleClick = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setProfileBool(!profileBool)
            setData(profileBool ? cardData[1] : cardData[0])
            setIsAnimating(false)
        }, 1000)
    }

  return (
    <motion.div 
    initial={{ opacity: 1, x: 0 }}
    animate={{ opacity: isAnimating ? 0 : 1, x: isAnimating ? 10 : 0 }}
    transition={{ duration: 1 }}
    className='story-container'>
        <div className="left-container">
                <p className="story-contents">
                   {data.content}
                </p>
                <div className="second-container">
                    <div className="profile">
                        <img src={data.profilepic} alt="" />
                        <div>
                            <p className="profile-name">{data.name}</p>
                            <p className="profile-desc">{data.occupation}</p>
                        </div>
                    </div>

                    <img className='brand-logo'src={data.brandIcon} alt="" />

                </div>
                <div className="action-bt">
                    <a onClick={handleClick}>
                        <img src={right} className='left' alt="" srcset="" />
                    </a>

                    <a onClick={handleClick}>
                        <img src={right} alt="" srcset="" />
                    </a>
                </div>
                <data.Card/>
                
        </div>

        <div className="right-container">
            <img src={data.sideImage}  alt="" srcset="" />
        </div>
       
    </motion.div>
  )
}

export default Story