import React from 'react'

const Snacks = (props) => {

  const renderSnacks = arr => {
    return arr.map(snacks => snacks.map(snack => <li key={snack.id}>{snack.name}</li>))
    // return snacks.map(snack => <li>{snack.name}</li>)
  }

  // console.log(props.snacks[0])
  return (
    <div>
      <h2>Snack Container</h2>
      {renderSnacks(props.snacks)}
    </div>
  )
}

export default Snacks