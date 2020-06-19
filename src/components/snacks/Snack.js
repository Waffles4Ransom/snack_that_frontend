import React from 'react'
import { Link } from 'react-router-dom'

const Snack = (props) => {
  
  const renderSnack = (snack) => {
    return (
      <div className='grid-container'>
        <div>
          <img src={snack.image} alt={snack.name} className='snackProfileImg'/>
        </div>
        <div>
          <h2>Description:</h2>
          <p>{snack.description}</p>
          <h3>Country of Origin:</h3>
          <p>{snack.origin}</p>
          <h4>Categories:</h4>
            {snack.categories.map(c => <li key={c}>{c}</li>)}
          <h4>Rating:</h4>
            {snack.reviews.length > 0 ? getAvgRating(snack.reviews) : 'No Reviews Yet!!'}
            <br/>
          <Link to="/snacks"><button className='backBtn'>Back to all Snacks</button></Link>
        </div>
      </div>
    )
  }

  const getAvgRating = reviews => {
    let ratings = reviews.map(r => r.rating)
    let rate = ratings.reduce((memo, rating) => memo + rating)
    return (rate/reviews.length)
  }

  const renderReviews = (reviews) => {
    if (reviews.length > 0) {
      return reviews.map(r => 
        <div key={r.id}>
          <p>{r.user_id} says:</p>
          <p>{r.content}</p>
          <p>{r.rating}</p>
        </div>
      )
    }else{
      return <p>add a review</p>
    }
  }

  let s = props.snacks[props.match.params.id - 1]

  return(
    <div>
      {s ? <h1>{s.name}</h1> : null}
      {s ? renderSnack(s) : null}
      <h2>Reviews</h2>
        <div className='reviews'>
          {s ? renderReviews(s.reviews): null}
        </div>
    </div>
  )
}
export default Snack