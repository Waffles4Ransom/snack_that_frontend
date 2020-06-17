import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeContainer extends Component {

  render() {
    return(
      <div>
        <h1>Snack That</h1>
        <h4>Serious Snackers Only</h4>
        <Link to="/snacks">Browse Snacks</Link> 
      </div>
    )
  }
}