export const GET_USERS = 'GET_USERS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'
export const ADD_USER = 'ADD_USER'


export function getUsers(users) {
  return { type: GET_USERS, users }
}

export function loginUser(user) {
  return { type: SET_CURRENT_USER, user }
}

export function logoutUser() {
  return { type: CLEAR_CURRENT_USER }
}

export function createUser(user) {
  return {type: ADD_USER, user }
}


export function fetchUsers(){
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/users', {
        credentials: "include"
      })
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


export const login = (creds, history) => {
  return async (dispatch) => {
    try {
     let res = await fetch('http://localhost:3001/api/v1/login', {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
      })
      if (!res.ok) {
        throw res
      }
      let currentUser = await res.json()
      console.log(currentUser)
      dispatch(loginUser(currentUser))
      if (!currentUser.error) {
        history.push(`/users/${currentUser.id}`)
      }
    } catch(err) {
      alert(err)
    }
  }
}

export const signup = (creds, history) => {
  return async (dispatch) => {
    try {
      const userInfo = {
        user: creds
      }
      let res = await fetch('http://localhost:3001/api/v1/users', {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      if (!res.ok) {
        throw res
      }
      let currentUser = await res.json()
      dispatch(createUser(currentUser))
      dispatch(loginUser(currentUser))
      if (!currentUser.errors) {
        history.push(`/users/${currentUser.id}`)
      }
    } catch(err) {
      alert(err)
    }
  }
}

export const setCurrentUser = () => {
  return async (dispatch) => {
    try {
     let res = await fetch('http://localhost:3001/api/v1/get_current_user', {
        credentials: "include",
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!res.ok) {
        throw res
      }
      let currentUser = await res.json()
      dispatch(loginUser(currentUser))
    } catch(err) {
      alert(err)
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutUser())
    let res = await fetch('http://localhost:3001/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
    let msg = await res.json()
    console.log(msg)
  }
}