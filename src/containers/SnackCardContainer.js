import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'

import SnackCardFront from '../components/snacks/SnackCardFront'
import SnackCardBack from '../components/snacks/SnackCardBack'

export default class SnackCardContainer extends Component {
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
        <SnackCardFront handleClick={this.handleClick} snack={this.props.snack}/>
        <SnackCardBack handleClick={this.handleClick} snack={this.props.snack}/>
      </ReactCardFlip>
    )
  }

}