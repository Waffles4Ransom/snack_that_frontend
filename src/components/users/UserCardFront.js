import React from 'react'

const UserCardFront = props => {
  return (
    <div className='snackcard' onClick={() => props.handleClick()}>
      <h3>{props.user.username}</h3>
      <img src={props.user.profile_photo} alt={props.user.name} className='userCardImg'/>
    </div>
  )
}

export default UserCardFront