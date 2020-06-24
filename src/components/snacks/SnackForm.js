import React, { Component } from 'react'

export default class SnackForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      image: '',
      origin: '',
      categories: []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <h1>Add a new Snack</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
            type='text' 
            name='name'
            placeholder='name'
            onChange={this.handleChange}
            value={this.state.name}
            />
            <input 
            type='text'
            name='description' 
            placeholder='description'
            onChange={this.handleChange}
            value={this.state.description}
            />
            <input 
            type='text' 
            name='image'
            placeholder='image URL'
            onChange={this.handleChange}
            value={this.state.image}
            />

            <p>Choose a country of origin: </p>
            <select name='origin' onChange={this.handleChange}>
              <option value=''>...</option>
            </select> 

            <p>Select some categories:</p>
             
            <br/><br/>
            <button>Add Snack</button>
        </form>
      </div>
    )
  }
}

