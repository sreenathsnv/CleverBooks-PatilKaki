import React from 'react'
import CardSolved from './sub/solvedcard'
import '../CSS/solved.css'
import Note from '../assets/notes.svg'
import Shop from '../assets/shop.svg'
import Stock from '../assets/stock.svg'
import Home from '../assets/home.svg'
const cardData = [
    {
        icon:Note,
        title:'What to order',
        content:'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
    },
    {
        icon:Shop,
        title:'When to order',
        content:'Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you\'re never left guessing.',
    },
    {
        icon:Stock,
        title:'How much to stock',
        content:'Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.',
    },
    {
        icon:Home,
        title:'Where to place',
        content:'Our tool suggests how to move stock within your supply chain. So you\'ll always have products available across cities.',
    }
]
const Solved = () => {
  return (
    <div className='solved-container'>
        <h1 className="solved-head">Four key questions answered by CleverBook</h1>
        <div className="solved-card-container">
            {
                cardData.map((item,index)=>(
                    <CardSolved title = {item.title} icon={item.icon} content={item.content} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Solved