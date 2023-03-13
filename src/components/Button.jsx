import React from 'react'

function Button(props) {
  return (
    <div className='buttonContainer'>
        <button className='button-33' onClick={props.togglePic}>{props.symbols}</button>
    </div>
  )
}

export default Button