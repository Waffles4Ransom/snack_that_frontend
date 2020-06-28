export const GET_SNACKS = 'GET_SNACKS'
export const ADD_SNACK = 'ADD_SNACK'

export function getSnacks(snacks) {
  return { type: GET_SNACKS, snacks }
}

export function addSnack(snack) {
  return { type: ADD_SNACK, snack}
}


export function fetchSnacks() {
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/snacks', {
        credentials: "include"
      })
      if (!res.ok) {
        throw res
      }
      let snacks = await res.json()
      return dispatch(getSnacks(snacks))
    } catch(err) {
      alert(err)
    }
  }
}

export function createSnack(formData) {
  console.log(formData)
  let newSnack = {
    name: formData.name,
    description: formData.description,
    image: formData.image,
    origin: formData.origin,
    categories: formData.categories
  }
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/snacks', {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSnack)
      })
      if (! res.ok) {
        throw res
      }
      let snack = await res.json()
      dispatch(addSnack(snack))
    } catch(err) {
      console.log(err)
    }
  }
}