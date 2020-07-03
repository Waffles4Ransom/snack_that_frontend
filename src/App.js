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

import Home from './components/Home'
import Snacks from './components/snacks/Snacks'
import Snack from './components/snacks/Snack'
import Users from './components/users/Users'
import Profile from './components/users/Profile'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SnackForm from './components/snacks/SnackForm'
import NotFound from './components/NotFound'


class App extends Component {

  componentDidMount(){
    this.props.fetchSnacks()
    this.props.fetchUsers()
    this.props.setCurrentUser()
  }

  renderUserNavs() {
    if (this.props.currentUser.hasOwnProperty('id')) {
      return(
        <>
          <Link to='/' onClick={() => this.props.logout()} className='link right'>LOG OUT</Link>
          <Link to={`/users/${this.props.currentUser.id}`} className='link right'>MY PROFILE</Link>
        </>
      ) 
    } else {
      return (
        <>
          <Link to="/login" className='link right'>LOG IN</Link>
          <Link to="/signup" className='link right'>SIGN UP</Link>
        </>
      )
    }
  }

  render() {
    return (
      <Router> 
        <div className="App">
          <div className='nav'>
            <Link to="/" className='link'>SNACK THAT</Link>
            <Link to="/snacks" className='link'>SNACKS</Link>
            <Link to="/users" className='link'>SNACKERS</Link>
            {this.renderUserNavs()}
          </div> 

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/snacks/new' component={SnackForm}/>
            <Route path='/users/:id' render={ props => {
              if (this.props.users) {
                let user = this.props.users.find(u => u.id === Number.parseInt(props.match.params.id))
                return <Profile {...props} user={user} currentUser={this.props.currentUser} />}
              } 
            }/>
            <Route path='/users'>
              <Users users={this.props.users}/>
            </Route> 
            <Route path='/snacks/:id' render={ props => {
              if (this.props.snacks) {
                let snack = this.props.snacks.find(s => s.id === Number.parseInt(props.match.params.id))
                return <Snack {...props} snack={snack} user={this.props.currentUser} />}
              }
            }/>

            <Route path='/snacks'>
              <Snacks snacks={this.props.snacks} user={this.props.currentUser}/>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  snacks: state.snacks,
  users: state.users,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { fetchSnacks, fetchUsers, setCurrentUser, logout })(App)
