export function fetchSnacks(){
  return async (dispatch) => {
    try {
      let res = await fetch('http://localhost:3001/api/v1/snacks')
      if (!res.ok) {
        throw res
      }
      let snacks = await res.json()
      dispatch({type: 'GET_SNACKS', snacks: snacks })
    } catch(err) {
      alert(err)
    }
  }
}