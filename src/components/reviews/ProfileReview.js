import React from 'react'
import { Link } from 'react-router-dom'

const ProfileReview = ({ review }) => (
  <div key={review.id} className='reviewcard'>
    <h4>{review.snackname}</h4>
      <p><strong>Comment:</strong></p>
      <p>"{review.content}"</p>
      <p><strong>Rated:</strong></p>
      {review.rating === 0 ? ' ZERO BUTTS '  : [...Array(review.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
      <p><Link to={`/snacks/${review.snack_id}`}><button>See Snack</button></Link></p>
  </div>
)

export default ProfileReview