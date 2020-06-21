import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'

const LogIn = () => {

  const handleSubmit = inputsArr => {
    const loginData = {
      username: inputsArr[0],
      password: inputsArr[1]
    }
    // console.log(loginData)
    login(loginData)
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

// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch(login())
//   }
// }

export default connect(null, { login })(LogIn)