export const getAvgRating = reviews => {
  let ratings = reviews.map(r => r.rating)
  let rate = ratings.reduce((memo, rating) => memo + rating)
  return (rate/reviews.length)
}