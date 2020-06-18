import React from 'react'

const UserCardBack = props => {

  const renderDate = () => {
    let joinDate = new Date(props.user.created_at), options = {year: 'numeric', month: 'long' }
    return joinDate.toLocaleString('en-US', options)
  }

  return (
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h4>Joined: {renderDate()}</h4>
      <h5>Hometown: {props.user.location}</h5>
      <h5>{props.user.username}'s review count:</h5>
      <strong>{props.user.reviews.length}</strong>
      <p><button>See Profile</button></p>
    </div>
  )
}

export default UserCardBack