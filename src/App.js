import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchSnacks } from './actions/snackActions'

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'
import Snacks from './components/Snacks'
import LogIn from './components/LogIn'


class App extends Component {

  componentDidMount(){
    this.props.fetchSnacks()
  }

  render() {
    return (
      <Router> 
        <div className="App">
          <div className='nav'>
            <Link to="/" className='link'>Snack That</Link>
            <Link to="/snacks" className='link'>Snacks</Link>
            <Link to="/users" className='link'>Snackers</Link>
            <Link to="/login" className='link right'>Log In</Link>
            <Link to="/signup" className='link right'>Sign Up</Link>
          </div>

          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path="/snacks">
              <Snacks snacks={this.props.snacks}/>
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            {/* <Route path="/users/:id" component={Profile} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({snacks}) => ({snacks})

const mapDispatchToProps = dispatch => {
  return {fetchSnacks: () => dispatch(fetchSnacks())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
