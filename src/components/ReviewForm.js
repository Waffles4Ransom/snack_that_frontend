import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addReviewToSnack } from '../actions/snackActions'

class ReviewForm extends Component {
  constructor() {
    super()
    this.state = {
      content: '',
      rating: '',
      user_id: '',
      snack_id: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      user_id: this.props.user.id,
      snack_id: this.props.snackID
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReviewToSnack(this.state, this.props.history)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          name='content'
          onChange={this.handleChange}
          value={this.state.content}
          placeholder='what did you think?'
          />
          <p>Choose a rating:</p>
          <input 
          type='radio'
          name='rating'
          value='0'
          onChange={this.handleChange}
          /> Gross, No Butts
          <input 
          type='radio'
          name='rating'
          value='1'
          onChange={this.handleChange}
          /> <img src='/catbutt_30.png' alt='cat butt' />
          <input 
          type='radio'
          name='rating'
          value='2'
          onChange={this.handleChange}
          /> {[...Array(2)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
          <input 
          type='radio'
          name='rating'
          value='3'
          onChange={this.handleChange}
          /> {[...Array(3)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
          <input 
          type='radio'
          name='rating'
          value='4'
          onChange={this.handleChange}
          /> {[...Array(4)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
          <input 
          type='radio'
          name='rating'
          value='5'
          onChange={this.handleChange}
          /> {[...Array(5)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)}
          <p><button>Submit Review</button></p>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { addReviewToSnack })(ReviewForm))