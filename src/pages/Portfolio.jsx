import React from 'react';
import Button from '../components/Button';
import { useState } from 'react';
import Card from '../components/Card';
import symbols from '../models/symbols';
import cardImgs from '../models/cardImgs';

function Portfolio(props) {
  const [count, setCount] = useState(0)
//Current pic
const [currentPic, setCurrentPic] = useState(cardImgs[count])
//---------------------Established State--------------

const changeCount = () => {
  setCount(count+1)
  setCurrentPic(cardImgs[count])
}

const reverseCount = () => {
  setCount(count-1)
  setCurrentPic(cardImgs[count])
}
  return (
    <div><h1 className="name" >Portfolio</h1>
    <Card currentCount={count} images={cardImgs[count]} />
    <div className='buttonBox'>
    <Button togglePic={reverseCount} symbols={symbols.left} />
    <Button togglePic={changeCount} symbols={symbols.right} />
    </div>
    </div>
  )
}

export default Portfolio