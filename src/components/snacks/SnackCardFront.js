import React from 'react'
import { Link } from 'react-router-dom'


const SnackCardFront = ({snack, handleClick }) => {

  return(
    <div className='snackcard' onClick={() => handleClick()}>
      <h4>{snack.name}</h4>
      <img src={snack.image} alt={snack.name} className='snackImg' />
      <Link to={`/snacks/${snack.id}`}><button>Tell me more</button></Link>
    </div>
  )
}

export default SnackCardFront