export function fetchUsers(){
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/users')
      if (!res.ok) {
        throw res
      }
      let users = await res.json()
      dispatch({type: 'GET_USERS', users: users })
    } catch(err) {
      alert(err)
    }
  }
}


export const login = (credentials) => {
  console.log(credentials)
  return async dispatch => {
    try {
     let res = await fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      console.log(res)
      if (!res.ok) {
        throw res
      }
      let currentUser = await res.json()
      console.log(currentUser)
      dispatch({type: 'SET_CURRENT_USER', currentUser})
    } catch(err) {
      alert(err)
    }
  }
}