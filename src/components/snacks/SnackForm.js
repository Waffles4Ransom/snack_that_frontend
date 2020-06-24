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

  renderCountryOpts() {
    let options = [
      "Australia",
      "Belgium",
      "Canada",
      "Czech Republic",
      "China",
      "France",
      "Germany",
      "Japan",
      "Mexico",
      "Netherlands",
      "South Korea",
      "Thailand",
      "United Kingdom",
      "United States"
    ]
    return options.map(o => <option key={o} value={o}>{o}</option>)
  }

  renderCategoryOpts() {
    let options = [
      'savory',
      'sweet',
      'salty',
      'spicy',
      'crispy',
      'crunchy',
      'chewy',
      'chocolate',
      'nutty',
      'cheesy',
      'tart',
      'creamy',
      'juicy'
    ]
    return options.map( o => (
      <label key={o}>
        <input key={o} type="checkbox" name={o} value={o} onChange={this.handleCategories} />{" "}
        {o.charAt(0).toUpperCase() + o.slice(1)}
      </label>
    ))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCategories = e => {
    const value = e.target.value
    const newVal = [...this.state.categories]
    newVal.push(value)
    this.setState({
      categories: newVal
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
              {this.renderCountryOpts()}
            </select> 

            <p>Select some categories:</p>
            {this.renderCategoryOpts()}
            <br/><br/>
            <button>Add Snack</button>
        </form>
      </div>
    )
  }
}

