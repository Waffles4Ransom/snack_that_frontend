import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createSnack } from '../../actions/snackActions'
import countryList from 'react-select-country-list'

class SnackForm extends Component {

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
    let options = countryList().getLabels()
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
        <input key={o} type="checkbox" name={o} value={o} checked={null} onChange={this.handleCategories} />{" "}
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
    const currentVals = [...this.state.categories]
    if (e.target.checked === false) {
      const removeVal = currentVals.filter( val => val !== value)
      this.setState({
        categories: removeVal
      })
    } else {
    currentVals.push(value)
    this.setState({
      categories: currentVals
    })}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSnack(this.state, this.props.history)
  }

  render() {
    return(
      <div>
        <h1 className='dotted nal_font'>Add a new Snack</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
            type='text' 
            name='name'
            placeholder='name'
            onChange={this.handleChange}
            value={this.state.name}
            required
            />
            <input 
            type='text'
            name='description' 
            placeholder='description'
            onChange={this.handleChange}
            value={this.state.description}
            required
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
            <button>Submit</button>
        </form>
        <Link to='/snacks'><button>Back to Snacks</button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addSnack: (s, h) => dispatch(createSnack(s, h)) }
}

export default connect(null, mapDispatchToProps)(SnackForm)
