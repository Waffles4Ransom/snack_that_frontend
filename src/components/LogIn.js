import React from 'react'
import Form from './Form'

const LogIn = () => {

  const handleSubmit = inputsArr => {
    console.log(inputsArr)
  }

  return(
    <>
      <h4>Snacker Log In</h4>
      <Form 
        submitCallback={handleSubmit}
        inputs={[['Username', 'text'], ['Password', 'password']]}
        submitValue={'Log In'}
      />
    </>
  )
}

export default LogIn