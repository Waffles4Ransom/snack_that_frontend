import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import { signup } from '../actions/userActions'

const SignUp = ({ signup, currentUser, history }) => {

  const handleSubmit = inputsArr => {
    let signUpData = {
      name: inputsArr[0],
      location: inputsArr[1],
      profile_photo: inputsArr[2],
      username: inputsArr[3],
      password: inputsArr[4]
    }
    signup(signUpData, history)
  }

  const renderErrors = () => {
    if (currentUser) {
      return <strong><p className='error'>{currentUser.errors}</p></strong>
    } 
  }

  return(
    <>
      <h2 className='nal_font'>Become a Snacker</h2>
      {renderErrors()}
      <Form 
        submitCallback={handleSubmit}
        inputs={[['Name', 'text'], ['Location', 'text'],['Profile Photo URL', 'text'], ['Username', 'text'], ['Password', 'password']]}
        submitValue={'Join'}
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { signup })(SignUp)