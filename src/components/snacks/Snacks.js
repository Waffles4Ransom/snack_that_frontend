import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { notLoggedIn } from '../../helpers/helpers'
import SnackCardContainer from '../../containers/SnackCardContainer'
import LikeButton from './LikeButton'

const Snacks = ({ snacks, user }) => {

  const renderSnacks = () => snacks.map(snack => <><SnackCardContainer key={snack.id} snack={snack} /><LikeButton /></>)

  const renderAddSnack = () => {
    return notLoggedIn(user) ? null : <><Link to='/snacks/new'><button>Add a New Snack</button></Link><br/></>
  }

  return (
    <div>
      <h2 className='nal_font'>The Snacks</h2>
      {renderAddSnack()}
      <div className="flex-container">
        {renderSnacks()}
      </div>
    </div>
  )
}

const MapStateToProps = state => ({
  snacks: state.snacks,
  user: state.currentUser
})

export default connect(MapStateToProps)(Snacks)