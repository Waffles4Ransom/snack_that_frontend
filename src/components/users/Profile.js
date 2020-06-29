import React from 'react'
import { renderDate } from '../../helpers/helpers'
import { Link } from 'react-router-dom'

const Profile = (props) => {

  // console.log(props.user ? props.user.reviews : null)

  // const renderSnacks = () => {
  //   return props.user.snacks.map(s => (
  //   <li>{s.name}</li>
  //   ))
  // }

  //need to grab snack data form serializer
  const renderReviews = () => {
    return props.user.reviews.map(r => (
      <li key={r.id}>{r.content}</li>
    ))
  }

  const addReview = () => {
    if (props.user.id === props.currentUser.id) {
      if (props.user.reviews.length === 0) {
        return <Link to='/snacks'><button>Find your first Snack to review!</button></Link>
      }
    }
  }

  const renderUser = () => {
    return(
      <div>
        <img src={props.user.profile_photo} alt={props.user.name} className='profPhoto'/>
        <h1>{ props.user.name }</h1>
        <h2>Snacker Alias: {props.user.username}</h2>
        <h3>Hometown: {props.user.location}</h3>
        <h4>Joined: {renderDate(props.user)}</h4>
        <h4>Snack Count: {props.user.reviews.length}</h4>
        {props.user.reviews.length > 0 ? renderReviews() : null}
        {props.user.id === props.currentUser.id ? <Link to={`/users/${props.user.id}/edit`}><button>Edit Profile</button></Link> : null}
      </div>
    )
  }

  return( 
    <>
    {props.user ? renderUser() : null } 
    {props.user ? addReview() : null }
    </>
  )
}

export default Profile