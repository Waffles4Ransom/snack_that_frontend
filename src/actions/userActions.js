export const GET_USERS = 'GET_USERS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export function getUsers(users) {
  return { type: GET_USERS, users }
}

export function loginUser(user) {
  return { type: SET_CURRENT_USER, user }
}


export function fetchUsers(){
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/users')
      if (!res.ok) {
        throw res
      }
      let users = await res.json()
      dispatch(getUsers(users))
    } catch(err) {
      alert(err)
    }
  }
}


export const login = (credentials) => {
  console.log(credentials)
  return async (dispatch) => {
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
      dispatch(loginUser(currentUser))
    } catch(err) {
      alert(err)
    }
  }
}