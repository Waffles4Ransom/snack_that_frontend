import React from 'react'

const UserCardFront = ({ user, handleClick}) => {

  return (
    <div className='snackcard' onClick={() => handleClick()}>
      <h3>{user.username}</h3>
      <img src={user.profile_photo} alt={user.name} className='userCardImg'/>
    </div>
  )
}

export default UserCardFront