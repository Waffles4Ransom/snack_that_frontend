import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'
import ProfileIcon from './ProfileIcon'
import ProfileReview from '../reviews/ProfileReview'

const Profile = ({ user, currentUser }) => {

  const listReviews = () => {
    return (
      <>
        <h2 className='prof_title'>{user.id === currentUser.id ? 'My Reviews' : `${user.username}'s Reviews`}</h2>
          <div className='flex-container'>
            {user.reviews.length > 0 ? user.reviews.map(r => <ProfileReview review={r}/>) : 'No Reviews Yet!!'}
          </div>
      </>
    )
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
          <br/>
          <ProfileIcon />
          {/* {props.user.id === props.currentUser.id ? <Link to={`/users/${props.user.id}/edit`}><button>Edit Profile</button></Link> : null} */}
        </div>
      </>
    )
  }

  return( 
    <>
      <div className='grid-container profile'>
        {user ? renderUser(user) : <h1>No Snacker Found!</h1> } 
      </div>
      {user ? addFirstReview() : null }
      {user ? listReviews() : null }
    </>
  )
}

export default Profile