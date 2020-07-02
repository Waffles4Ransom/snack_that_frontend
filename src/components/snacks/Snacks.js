import React from 'react'
import { Link } from 'react-router-dom'

import SnackCardContainer from '../../containers/SnackCardContainer'

const Snacks = ({ snacks, user }) => {

  const renderSnacks = snacks => {
    return snacks.map(snack => <SnackCardContainer key={snack.id} snack={snack}/>)
  }

  const renderAddSnack = () => {
    return user.message || user.error ? null : <><Link to='/snacks/new'><button>Add a New Snack</button></Link><br/></>
  }

  return (
    <div>
      <h2 className='nal_font'>The Snacks</h2>
      {renderAddSnack()}
      <div className="flex-container">
        {renderSnacks(snacks)}
      </div>
    </div>
  )
}

export default Snacks