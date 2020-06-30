import React from 'react'

export const getAvgRatingSml = reviews => {
  let ratings = reviews.map(r => r.rating)
  let num = ratings.reduce((memo, rating) => memo + rating)/reviews.length
  return [...Array(num)].map((e, i) => <img src='/catbutt_30.png' alt='cat butt' key={i} />)
}

export const getAvgRatingBig = reviews => {
  let ratings = reviews.map(r => r.rating)
  let num = ratings.reduce((memo, rating) => memo + rating)/reviews.length
  return [...Array(num)].map((e, i) => <img src='/catbutt_60.png' alt='cat butt' key={i} />)
}

export const renderDate = user => {
  let joinDate = new Date(user.created_at), options = {year: 'numeric', month: 'long' }
  return joinDate.toLocaleString('en-US', options)
}