import React from 'react'

const CardSolved = ({icon,title,content}) => {
  return (
    <div className="card">
        <img className="icon" src={icon}/>
        <h3 className="head-card">{title}</h3>
        <p className="card-soved-content">{content}</p>
    </div>
  )
}

export default CardSolved