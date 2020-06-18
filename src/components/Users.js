import React from 'react'
import UserCardContainer from '../containers/UserCardContainer'

const Users = (props) => {
  
  const renderUsers = users => {
    return users.map(user => <UserCardContainer key={user.id} user={user}/>)
  }

  return (
    <div>
      <h2>Meet the Snackers</h2>
        <div className="flex-container">
          {renderUsers(props.users)}
        </div>
    </div>
  )
}

export default Users