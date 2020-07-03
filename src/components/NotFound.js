import React from 'react'


const NotFound = () => {

  const za = require('../assets/Pizza256px.png')

  return (
    <div>
      <h1 className='nal_font big _404'>404</h1>
      <h2>Page Not Found</h2>
      <img src={za} alt="pizza slice" />
    </div>
  )
}

export default NotFound