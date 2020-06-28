import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSnack } from '../../actions/snackActions'
import { getAvgRating } from '../../helpers/helpers'

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
          { props.user.id ? <Link to='/snacks' onClick={handleDelete}><button>Delete this Snack</button></Link> : null }
        </div>
      </div>
    )
  }

  const handleDelete = () => {
    return (window.confirm('Are you sure you want to delete this snack?')) ? props.deleteSnack(props.snack.id) : null
  }

  const renderReviews = (reviews) => {
    if (reviews.length > 0) {
      return reviews.map(r => 
        <div key={r.id}>
          <strong>{r.user.username} says: </strong>
          <p>Rating: {r.rating}</p>
          <p>{r.content}</p>
        </div>
      )
    }else{
      return <p>add a review</p>
    }
  }

  return(
    <div>
      <h1>{props.snack.name}</h1>
      {renderSnack(props.snack)}
      <h2>Reviews</h2>
        <div className='reviews'>
          {renderReviews(props.snack.reviews)}
        </div>
    </div>
  )
}

export default connect(null, { deleteSnack })(Snack)