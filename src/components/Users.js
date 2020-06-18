import React from 'react'

const Users = (props) => {
  
  const renderUsers = () => {
    return props.users.map(u => <p key={u.id}>{u.name}</p>)
  }

  return (
    <div>
      {renderUsers()}
    </div>
  )
}

export default Users