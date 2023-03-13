import React from 'react'
import cardImgs from '../models/cardImgs.jsx'
console.log(cardImgs)
function Card(props) {
  return (
    <div className='mainCard'>
      <img className="imgBox" src={props.images}/>
    </div>
  
  )
}

export default Card