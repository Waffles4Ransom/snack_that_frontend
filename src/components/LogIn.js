import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'

const LogIn = ({ login, currentUser }) => {

  const handleSubmit = inputsArr => {
    const loginData = {
      username: inputsArr[0],
      password: inputsArr[1]
    }
    login(loginData)
  }

  const renderErrors = () => {
    if (currentUser) {
      return <strong><p className='error'>{currentUser.error}</p></strong>
    } 
  }

  return(
    <>
      <h4>Snacker Log In</h4>
      {renderErrors()}
      <Form 
        submitCallback={handleSubmit}
        inputs={[['Username', 'text'], ['Password', 'password']]}
        submitValue={'Log In'}
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { login })(LogIn)