import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchSnacks } from './actions/snackActions'
import { fetchUsers, setCurrentUser, logout } from './actions/userActions'

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import Snacks from './components/snacks/Snacks'
import Snack from './components/snacks/Snack'
import Users from './components/users/Users'
import Profile from './components/users/Profile'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import addSnackForm from './components/snacks/SnackForm'



class App extends Component {

  componentDidMount(){
    this.props.fetchSnacks()
    this.props.fetchUsers()
    this.props.setCurrentUser()
  }

  renderUserNavs() {
    if (this.props.loggedIn) {
      if (this.props.currentUser.hasOwnProperty('id')) {
        return(
          <>
            <Link to='/' onClick={() => this.props.logout()} className='link right'>Log Out</Link>
            <Link to={`/users/${this.props.currentUser.id}`} className='link right'>Profile</Link>
          </>
        ) 
      } else {
        return (
          <>
            <Link to="/login" className='link right'>Log In</Link>
            <Link to="/signup" className='link right'>Sign Up</Link>
          </>
          )
        }
    } else {
      return (
        <>
          <Link to="/login" className='link right'>Log In</Link>
          <Link to="/signup" className='link right'>Sign Up</Link>
        </>
       )
    }
  }

  render() {
    // console.log(this.props.currentUser, this.props.loggedIn)
    return (
      <Router> 
        <div className="App">
          <div className='nav'>
            <Link to="/" className='link'>Snack That</Link>
            <Link to="/snacks" className='link'>Snacks</Link>
            <Link to="/users" className='link'>Snackers</Link>
            {this.renderUserNavs()}
          </div> 

          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/snacks/new' component={addSnackForm}/>
            <Route path='/users/:id'>
              <Profile user={this.props.currentUser} />
            </Route>
            <Route path='/users'>
              <Users users={this.props.users}/>
            </Route> 
            <Route path='/snacks/:id' render={(routerProps) => <Snack {...routerProps} snacks={this.props.snacks}/>}/>
            <Route path='/snacks'>
              <Snacks snacks={this.props.snacks}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  snacks: state.snacks,
  users: state.users,
  loggedIn: !!state.currentUser,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { fetchSnacks, fetchUsers, setCurrentUser, logout })(App)
