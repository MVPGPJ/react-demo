// import store from 'store'
import { Map, fromJS }  from 'immutable'
import { MYSELFDATA, GOLD , FRIENDDATA} from './actionTypes'

const defaultState = Map({
  myselfData: Map({}),
  gold: Map({}),
  friendData: Map({})
})

const reducer = (state=defaultState, action)=>{
  switch(action.type) {
    case MYSELFDATA:
      return state.set('myselfData', fromJS(action.data))
    case GOLD:
      return state.set('gold', fromJS(action.data))
    case FRIENDDATA:
      console.log(1)
      console.log(fromJS(action.data))
      return state.set('friendData', fromJS(action.data))
    default:
      return state
  }
}

export default reducer

