export const getAvgRating = reviews => {
  let ratings = reviews.map(r => r.rating)
  return ratings.reduce((memo, rating) => memo + rating)/reviews.length
}