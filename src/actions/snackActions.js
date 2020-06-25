export const GET_SNACKS = 'GET_SNACKS'
export const ADD_SNACK = 'ADD_SNACK'

export function getSnacks(snacks) {
  return { type: GET_SNACKS, snacks }
}


export function fetchSnacks(){
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/snacks')
      if (!res.ok) {
        throw res
      }
      let snacks = await res.json()
      dispatch(getSnacks(snacks))
    } catch(err) {
      alert(err)
    }
  }
}