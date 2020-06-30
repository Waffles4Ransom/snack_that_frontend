import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const Profile = ({ user, currentUser }) => {

  // console.log(props.user ? props.user.reviews : null)

  // const renderSnacks = () => {
  //   return props.user.snacks.map(s => (
  //   <li>{s.name}</li>
  //   ))
  // }

  //need to grab snack data form serializer
  const renderReviews = () => {
    return user.reviews.map(r => (
      <li key={r.id}>{r.content}</li>
    ))
  }

  const addReview = () => {
    if (user.id === currentUser.id) {
      if (user.reviews.length === 0) {
        return <Link to='/snacks'><button>Find your first Snack to review!</button></Link>
      }
    }
  }

  const renderUser = () => {
    return(
      <div className='user_profile'>
        <img src={user.profile_photo} alt={user.name} className='profPhoto'/>
        <h1>{user.name}</h1>
        <h2>Snacker Alias: {user.username}</h2>
        <h3>Hometown: {user.location}</h3>
        <h4>Joined: {renderDate(user)}</h4>
        <h4>Snack Count: {user.reviews.length}</h4>
        {user.reviews.length > 0 ? renderReviews() : null}
        {/* {props.user.id === props.currentUser.id ? <Link to={`/users/${props.user.id}/edit`}><button>Edit Profile</button></Link> : null} */}
      </div>
    )
  }

  return( 
    <>
    {user ? renderUser(user) : null } 
    {user ? addReview() : null }
    </>
  )
}

export default Profile