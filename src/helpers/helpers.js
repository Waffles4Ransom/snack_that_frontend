export const getAvgRating = reviews => {
  let ratings = reviews.map(r => r.rating)
  return ratings.reduce((memo, rating) => memo + rating)/reviews.length
}

export const renderDate = user => {
  let joinDate = new Date(user.created_at), options = {year: 'numeric', month: 'long' }
  return joinDate.toLocaleString('en-US', options)
}