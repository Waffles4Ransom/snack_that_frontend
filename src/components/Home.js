import React from 'react'
import { Link } from 'react-router-dom'

 const Home = () => {

    return(
      <div>
        <h1 className='nal_font big'>Snack That</h1>
        <h2>Serious Snackers Only</h2>
        <Link to="/snacks"><button>Show me the Snacks</button></Link> 
        <p className='snackIcons'>
          <img src='./Pretzel256px.png' alt='pretzel' width='220'/>
          <img src='./Cupcake256px.png' alt='cupcake' width='220'/>
          <img src='./French_fries256px.png' alt='fries' width='220' />
          <img src='./Donut256px.png' alt='donut' width='220' />
          <img src='./Noodle256px.png' alt='noodles' width='220' />
        </p>
      </div>
    )
}

export default Home