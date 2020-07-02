import React from 'react'
import UserCardContainer from '../../containers/UserCardContainer'

const Users = ({ users }) => {
  
  const renderUsers = users => {
    const snackers = users.filter(u => u.hasOwnProperty('id'))
    return snackers.map(u => <UserCardContainer key={u.id} user={u}/>)
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