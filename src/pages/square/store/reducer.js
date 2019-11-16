const defaultState = { background: "white" }

const reducer = (state=defaultState,action)=>{
  switch(action.type){
    case 'dark':
      return {background: 'black'}
    case 'light':
      return {background: 'white'}
    default:
      return state
  }
}

export default reducer

