import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const Profile = (props) => {

  console.log(props.user)

  const renderSnacks = () => {
    return props.user.snacks.map(s => (
    <li>{s.name}</li>
    ))
  }

  const renderUser = () => {
    return(
      <div>
        <img src={props.user.profile_photo} alt={props.user.name} className='profPhoto'/>
        <h1>{ props.user.name }</h1>
        <h2>Snacker Alias: {props.user.username}</h2>
        <h3>Hometown: {props.user.location}</h3>
        <h4>Joined: {renderDate(props.user)}</h4>
        {props.user.snacks > 0 ? renderSnacks() : <Link to='/snacks'><button>Find a Snack to review</button></Link>}
      </div>
    )
  }

  return( <>{ props.user ? renderUser() : null }</>)
}

export default Profile