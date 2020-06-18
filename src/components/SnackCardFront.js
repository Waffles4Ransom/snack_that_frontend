import React from 'react'
import { Link } from 'react-router-dom'


const SnackCardFront = props => {

  const reviewCount = (reviews) => {
    if (reviews.length > 0) {
    return <p>Reviews:{reviews.length}</p>
    }
  }

  return(
    <div className='snackcard'>
      <Link to={`/snacks/${props.snack.id}`}><h4>{props.snack.name}</h4></Link>
      <img src={props.snack.image} alt={props.snack.name} className='snackImg' />
      {reviewCount(props.snack.reviews)}
      <button onClick={() => props.handleClick()}>Tell me more</button>
    </div>
  )
}

export default SnackCardFront