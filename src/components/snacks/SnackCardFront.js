import React from 'react'
import { Link } from 'react-router-dom'


const SnackCardFront = props => {

  return(
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h4>{props.snack.name}</h4>
      <img src={props.snack.image} alt={props.snack.name} className='snackImg' />
      <Link to={`/snacks/${props.snack.id}`}><button>Tell me more</button></Link>
    </div>
  )
}

export default SnackCardFront