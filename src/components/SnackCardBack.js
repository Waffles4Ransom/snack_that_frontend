import React from 'react'

const SnackCardBack = props => {
  return(
    <div className='snackcard'>
      <h4>Country of Origin: {props.snack.origin}</h4>
      <p>Description:</p>
      <p>{props.snack.description}</p>
      {props.snack.categories.map(cat => <li key={cat}>{cat}</li>)}
      <br/>
      <button onClick={() => props.handleClick()}>Back</button>
    </div>
  )
}

export default SnackCardBack