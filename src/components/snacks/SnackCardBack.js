import React from 'react'
import { getAvgRatingSml } from '../../helpers/helpers'

const SnackCardBack = ({ snack, handleClick }) => {

  const reviewed = (reviews) => {
    return (reviews.length > 0) ? getAvgRatingSml(reviews) : "No Reviews Yet!!"
  }

  return(
    <div className='snackcard back' onClick={() => handleClick()}>
      <h4>Country of Origin: {snack.origin}</h4>
      <p>{snack.description}</p>
      {snack.categories.map(cat => <li key={cat}>{cat}</li>)}
      <h5>Snacker Rating:</h5>
      {reviewed(snack.reviews)}
    </div>
  )
}

export default SnackCardBack