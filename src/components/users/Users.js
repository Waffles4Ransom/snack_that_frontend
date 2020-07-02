import React from 'react'
import UserCardContainer from '../../containers/UserCardContainer'

const Users = ({ users }) => {
  
  const renderUsers = users => {
    return users.map(user => <UserCardContainer key={user.id} user={user}/>)
  }

  return (
    <div>
      <h2 className='nal_font'>Meet the Snackers</h2>
        <div className="flex-container">
          {renderUsers(users)}
        </div>
    </div>
  )
}

export default Users