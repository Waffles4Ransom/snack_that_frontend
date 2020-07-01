import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const Profile = ({ user, currentUser }) => {

  const listReviews = () => {
    return (
      <>
        <h2>{user.id === currentUser.id ? 'My Reviews' : `${user.username}'s Reviews`}</h2>
        {user.reviews.length > 0 ? renderReview() : 'No Reviews Yet!!'}
      </>
    )
  }

  const renderReview = () => {
    return user.reviews.map(r => (
      <div key={r.id}>
      <h4><Link to={`/snacks/${r.snack_id}`}>{r.snackname}</Link></h4>
        <p><strong> Comment: </strong> "{r.content}"</p>
        <p><strong> Rated: </strong> {r.rating === 0 ? ' ZERO BUTTS '  : [...Array(r.rating)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}</p>
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
        <h1>{user.name}</h1>
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