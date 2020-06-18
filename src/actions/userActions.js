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