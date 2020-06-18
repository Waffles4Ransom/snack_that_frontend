import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

import UserCardFront from '../components/UserCardFront'
import UserCardBack from '../components/UserCardBack'

export default class UserCardContainer extends Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false
    }
  }

  handleClick = (e) => {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <UserCardFront handleClick={this.handleClick} user={this.props.user}/>
        <UserCardBack handleClick={this.handleClick} user={this.props.user}/>
      </ReactCardFlip>
    )
  }
}