import React from 'react'
import ReviewForm from '../ReviewForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSnack, deleteReview } from '../../actions/snackActions'
import { getAvgRatingBig, notLoggedIn } from '../../helpers/helpers'

const Snack = ({ snack, user, deleteSnack, deleteReview, history }) => {
  
  const renderSnack = () => {
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
          <h4>Snacker Rating:</h4>
            {snack.reviews.length > 0 ? getAvgRatingBig(snack.reviews) : 'No Reviews Yet!!'}
            <br/>
          <Link to="/snacks"><button className='backBtn'>Back to all Snacks</button></Link>
          { user.id ? <Link to='/snacks' onClick={handleDelete}><button>Delete this Snack</button></Link> : null }
        </div>
      </div>
    )
  }

  const handleDelete = () => {
    return (window.confirm('Are you sure you want to delete this snack?')) ? deleteSnack(snack.id) : null
  }

  const renderReviews = (reviews) => {
    if (reviews.length > 0) {
      return reviews.map(r => 
        <div key={r.id} className='review_box'>
          <p><strong>{r.username} </strong> 
          says: "{r.content}" 
          {r.rating === 0 ? ' ZERO BUTTS '  : [...Array(r.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)} 
          {r.user_id === user.id ? <button onClick={() => deleteReview(snack.id, r.id, history)}>X</button> : null}
          </p>
        </div>
      )
    } else {
      return <h4>This snack has yet to be reviewed!!</h4>
    }
  }

  const renderReviewForm = (reviews) => {
    if (notLoggedIn(user)) {
      return null 
    } else {
      let reviewed = reviews.find(r => r.user_id === user.id) 
      if (!reviewed) {
        return (
          <div>
            <h4>Hey {user.username}, add your review:</h4>
            <ReviewForm user={user} snackID={snack.id}/>
          </div>
        )
      } 
    }
  }

  return(
    <div>
      <h1 className='snack_title'>{ snack ? snack.name : null }</h1>
        {snack ? renderSnack() : null}
      <h1 className='dotted'>Reviews</h1>
        <div className='reviews'>
          {snack ? renderReviewForm(snack.reviews) : null}
          {snack ? renderReviews(snack.reviews) : null}
        </div>
    </div>
  )
}

export default connect(null, { deleteSnack, deleteReview })(Snack)