import React from 'react'
const StockDetails = ({stockPerc,unit,content}) => {
  return (
    <div
    
     className="stock-details">
        <span 
        className='perc'>{stockPerc}</span><span>{unit}</span><br/>
        <p>{content}</p>            
    </div>
  )
}

export default StockDetails