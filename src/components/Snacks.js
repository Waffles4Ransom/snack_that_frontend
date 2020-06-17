import React from 'react'
import { Link } from 'react-router-dom'

import SnackCard from './SnackCard'

const Snacks = (props) => {

  const renderSnacks = arr => {
    return arr.map(snacks => snacks.map(snack => <SnackCard key={snack.id} snack={snack}/>))
    // return snacks.map(snack => <li>{snack.name}</li>)
  }

  // console.log(props.snacks[0])
  return (
    <div>
      <h2>The Snacks</h2>
      <Link path='/snacks/new' >Add a New Snack</Link><br/>
      <div className="flex-container">
        {renderSnacks(props.snacks)}
      </div>
    </div>
  )
}

export default Snacks