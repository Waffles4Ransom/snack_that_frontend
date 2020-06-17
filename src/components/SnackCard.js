import React from 'react'
import { Link } from 'react-router-dom'


const SnackCard = props => {

  const front = () => {
    return ( 
      <div className='snackcard'>
        <h4>{props.snack.name}</h4>
        <img src={props.snack.image} alt={props.snack.name} className='snackImg' />
      </div>
    )
  }

  return(
    <div>
      <Link path='/snacks/:id'>
        {front()}
      </Link>
    </div>
  )
}

export default SnackCard