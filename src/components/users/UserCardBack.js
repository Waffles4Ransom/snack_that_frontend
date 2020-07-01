import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const UserCardBack = props => {

  return (
    <div className='snackcard back' onClick={() => props.handleClick()}>
      <h4>Joined: {renderDate(props.user)}</h4>
      <h5>Hometown: {props.user.location}</h5>
      <h5>{props.user.username}'s review count:</h5>
      <strong>{props.user.reviews.length}</strong>
      <p><Link to={`/users/${props.user.id}`}><button>See Profile</button></Link></p>
    </div>
  )
}

export default UserCardBack