import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( { user, logout }) => {

  const renderUserNavs = () => {
    if (user.hasOwnProperty('id')) {
      return(
        <>
          <Link to='/' onClick={() => logout()} className='link right'>LOG OUT</Link>
          <Link to={`/users/${user.id}`} className='link right'>MY PROFILE</Link>
        </>
      ) 
    } else {
      return (
        <>
          <Link to="/login" className='link right'>LOG IN</Link>
          <Link to="/signup" className='link right'>SIGN UP</Link>
        </>
      )
    }
  }

  return (
    <div className='nav'>
      <Link to="/" className='link'>SNACK THAT</Link>
      <Link to="/snacks" className='link'>SNACKS</Link>
      <Link to="/users" className='link'>SNACKERS</Link>
      {renderUserNavs()}
    </div> 
  )
}

export default Navbar