import React from 'react'

const Users = (props) => {
  
  const renderUsers = () => {
    return props.users.map(u => <p>{u.name}</p>)
  }
  
  return (
    <div>
      {renderUsers()}
    </div>
  )
}

export default Users