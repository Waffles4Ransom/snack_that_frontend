import React from 'react'

const UserCardFront = props => {
  return (
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h4>{props.user.name}</h4>
      <img src={props.user.profile_photo} alt={props.user.name} className='userCardImg'/>
      <h5>Username: {props.user.username}</h5>
    </div>
  )
}

export default UserCardFront