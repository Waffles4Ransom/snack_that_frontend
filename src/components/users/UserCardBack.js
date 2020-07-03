import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const UserCardBack = ({ user, handleClick}) => {

  return (
    <div className='snackcard back' onClick={() => handleClick()}>
      <h4>Joined: {renderDate(user)}</h4>
      <h5>Hometown: {user.location}</h5>
      <h5>{user.username}'s review count:</h5>
      <strong>{user.reviews.length}</strong>
      <p><Link to={`/users/${user.id}`}><button>View {user.username}'s Profile</button></Link></p>
    </div>
  )
}

export default UserCardBack