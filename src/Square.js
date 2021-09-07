import React from 'react'

function Square(props) {
 
  
    return (
      <button className='btn' onClick={props.onClick} id={props.class}>
        <p className='txt'>{props.value}</p>
      </button>
    )
}

export default Square
