import React from 'react'
import { getAvgRating } from '../../helpers/helpers'

const SnackCardBack = props => {

  const reviewed = (reviews) => {
    return (reviews.length > 0) ? getAvgRating(reviews) : "No Reviews Yet!!"
  }

  return(
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h4>Country of Origin: {props.snack.origin}</h4>
      <p>Description:</p>
      <p>{props.snack.description}</p>
      {props.snack.categories.map(cat => <li key={cat}>{cat}</li>)}
      <h5>Snacker Rating:</h5>
      {reviewed(props.snack.reviews)}
    </div>
  )
}

export default SnackCardBack