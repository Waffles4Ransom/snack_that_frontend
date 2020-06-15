import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSnacks } from '../actions/snackActions'

class HomeContainer extends Component {

  componentDidMount(){
    this.props.fetchSnacks()
  }

  render() {
    return(
      <div>
        <h4>Serious Snackers only</h4>
        {console.log(this.props.snacks)}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {snacks: state.snacks }
// }

const mapStateToProps = ({snacks}) => ({snacks})

const mapDispatchToProps = dispatch => {
  return {fetchSnacks: () => dispatch(fetchSnacks())}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)