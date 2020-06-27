import React from 'react'
import { Link } from 'react-router-dom'

import SnackCardContainer from '../../containers/SnackCardContainer'

const Snacks = (props) => {

  const renderSnacks = snacks => {
    return snacks.map(snack => <SnackCardContainer key={snack.id} snack={snack}/>)
  }

  const renderAddSnack = () => {
    return props.user.message || props.user.error ? null : <><Link to='/snacks/new'><button>Add a New Snack</button></Link><br/></>
  }

  return (
    <div>
      <h2>The Snacks</h2>
      {renderAddSnack()}
      <div className="flex-container">
        {renderSnacks(props.snacks)}
      </div>
    </div>
  )
}

export default Snacks