import React from 'react'

const ProfileIcon = () => {

  const donut = require('../../assets/Donut256px.png')
  const pretz = require('../../assets/Pretzel256px.png')
  const fry = require('../../assets/French_fries256px.png')
  const cupcake = require('../../assets/Cupcake256px.png')
  const noodz = require('../../assets/Noodle256px.png')
  const za = require('../../assets/Pizza256px.png')

  const icons = [donut, pretz, fry, cupcake, noodz, za]

  const snackcon = icons[Math.floor(Math.random()*icons.length)]

  return(<img src={snackcon} alt='snack' width='150'/>)
}

export default ProfileIcon