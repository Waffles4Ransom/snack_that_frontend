import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const Profile = ({ user, currentUser }) => {

  const listReviews = () => {
    return (
      <>
        <h2 className='prof_title'>{user.id === currentUser.id ? 'My Reviews' : `${user.username}'s Reviews`}</h2>
          <div className='flex-container'>
            {user.reviews.length > 0 ? renderReview() : 'No Reviews Yet!!'}
          </div>
      </>
    )
  }

  const renderReview = () => {
    return user.reviews.map(r => (
      <div key={r.id} className='reviewcard'>
      <h4>{r.snackname}</h4>
        <p><strong>Comment:</strong></p>
        <p>"{r.content}"</p>
        <p><strong>Rated:</strong></p>
        {r.rating === 0 ? ' ZERO BUTTS '  : [...Array(r.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
        <p><Link to={`/snacks/${r.snack_id}`}><button>See Snack</button></Link></p>
      </div>
    ))
  }

  const addFirstReview = () => {
    if (user.id === currentUser.id) {
      if (user.reviews.length === 0) {
        return <Link to='/snacks'><button>Find your first Snack to review!</button></Link>
      }
    }
  }

  const renderUser = () => {
    return(
      <>
      <div className='user_profile'>
        <img src={user.profile_photo} alt={user.name} className='profPhoto'/>
      </div>
      <div>
        <h1 className='prof_title'>{user.name}</h1>
        <h2>Snacker Alias: {user.username}</h2>
        <h3>Hometown: {user.location}</h3>
        <h4>Joined: {renderDate(user)}</h4>
        <h4>Snack Count: {user.reviews.length}</h4>
        {/* {props.user.id === props.currentUser.id ? <Link to={`/users/${props.user.id}/edit`}><button>Edit Profile</button></Link> : null} */}
      </div>
      </>
    )
  }

  return( 
    <>
      <div className='grid-container profile'>
        {user ? renderUser(user) : "No Snacker Found!" } 
      </div>
      {user ? addFirstReview() : null }
      {user ? listReviews() : null }
    </>
  )
}

export default Profile