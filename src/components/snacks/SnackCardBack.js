import React from 'react'

const SnackCardBack = props => {

  const reviewCount = (reviews) => {
    if (reviews.length > 0) {
    return <p>Reviews:{reviews.length}</p>
    }
  }

  return(
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h4>Country of Origin: {props.snack.origin}</h4>
      <p>Description:</p>
      <p>{props.snack.description}</p>
      {props.snack.categories.map(cat => <li key={cat}>{cat}</li>)}
      {reviewCount(props.snack.reviews)}
    </div>
  )
}

export default SnackCardBack