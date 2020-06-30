import React from 'react'
import ReviewForm from '../ReviewForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSnack } from '../../actions/snackActions'
import { getAvgRatingBig } from '../../helpers/helpers'

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
          <h4>Snacker Rating:</h4>
            {snack.reviews.length > 0 ? getAvgRatingBig(snack.reviews) : 'No Reviews Yet!!'}
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
          <p><strong>{r.user.username}</strong> says: "{r.content}" {[...Array(r.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}</p>
          {/* <p>{[...Array(r.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}</p>
          <p>{r.content}</p> */}
        </div>
      )
    } else {
      return <h4>This snack has yet to be reviewed!!</h4>
    }
  }

  const renderReviewForm = (reviews) => {
    let reviewed = reviews.find(r => r.user_id === props.user.id) 
    if (!reviewed) {
      return (
        <div>
          <h4>Hey {props.user.username}, add your review:</h4>
          <ReviewForm user={props.user} snackID={props.snack.id}/>
        </div>
      )
    }
  }

  return(
    <div>
      <h1>{props.snack ? props.snack.name : null}</h1>
      {props.snack ? renderSnack(props.snack) : null}
      <h2>Reviews</h2>
        <div className='reviews'>
          {props.snack ? renderReviewForm(props.snack.reviews) : null}
          {props.snack ? renderReviews(props.snack.reviews) : null}
        </div>
    </div>
  )
}

export default connect(null, { deleteSnack })(Snack)