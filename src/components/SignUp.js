import React from 'react'
import Form from './Form'

const SignUp = () => {

  const handleSubmit = inputsArr => {
    console.log(inputsArr)
  }

  return(
    <>
      <h4>Become a Snacker</h4>
      <Form 
        submitCallback={handleSubmit}
        inputs={[['Name', 'text'], ['Location', 'text'],['Profile Photo URL', 'text'], ['Username', 'text'], ['Password', 'password']]}
        submitValue={'Join'}
      />
    </>
  )
}

export default SignUp