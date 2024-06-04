import React, { useEffect, useState } from 'react'
import '../CSS/stock.css'
import StockDetails from './sub/StockDetails'
const Metric = () => {
  const [buttonIndex,setbuttonIndex] = useState(2)
  const [stockPerc,setStock] = useState(15)
  const [unit,setUnit] = useState('%')
  const [content,setcontent] = useState('Growth in revenue')

  useEffect(()=>{
    if( buttonIndex == 0){
      setStock(85)
      setUnit('%')
      setcontent('Reduction in out-of-stock')
    }
    if( buttonIndex == 1){
      setStock(25)
      setUnit('Days')
      setcontent('Reduction in cash recovery time')
    }
    if( buttonIndex == 2){
      setStock(15)
      setUnit('%')
      setcontent('Growth in revenue')
    }
    
  },[buttonIndex])
  function moveCircle(buttonIndex) {
    setbuttonIndex(buttonIndex)
    const circle = document.getElementById('circle');
    const buttons = document.querySelectorAll('.button');
    const topPosition = buttonIndex *12;
    circle.style.top = `${topPosition}vh`;

    buttons.forEach((button, index) => {
        if (index === buttonIndex) {
            button.classList.add('with-border');
        } else {
            button.classList.remove('with-border');
        }
    });

    console.log(buttonIndex)
  }



  return (
 
    <div className='metric-container'>
        <div className="scroll-element">
              <div className="container">
              <div className="line-container">
                  <div className="vertical-line"></div>
                  <div className="circle" id="circle"></div>
              </div>
              <div className="buttons-container">
                  <button className="button" onClick={()=>{moveCircle(0)}}>STOCKOUTS</button>
                  <button className="button" onClick={()=>moveCircle(1)}>CASH RECOVERY CYCLE</button>
                  <button className="button" onClick={()=>moveCircle(2)}>REVENUE</button>
              </div>
          </div>
        </div>

      <StockDetails stockPerc={stockPerc} unit={unit} content={content}/>
       
    </div>
  )
}

export default Metric


    


