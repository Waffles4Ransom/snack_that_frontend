import React from 'react'
// import { Link } from 'react-router-dom'

import SnackCardContainer from '../containers/SnackCardContainer'

const Snacks = (props) => {

  const renderSnacks = arr => {
    // console.log(props.snacks)
    // return props.snacks.map(snack => <SnackCard key={snack.id} snack={snack}/>)
    return arr.map(snacks => snacks.map(snack => <SnackCardContainer key={snack.id} snack={snack}/>))
  }

  return (
    <div>
      <h2>The Snacks</h2>
      {/* <Link path='/snacks/new'>Add a New Snack</Link><br/> */}
      <div className="flex-container">
        {renderSnacks(props.snacks)}
      </div>
    </div>
  )
}

export default Snacks