import store from 'store'
import { Map }  from 'immutable'
import { ISLOGIN, SETPHONE, SETUID } from './actionTypes'

const defaultState = Map({
  isLogin: store.get(ISLOGIN)|| false,
  phone: store.get(SETPHONE) || '',
  uid: store.get(SETUID) || ''
})

const reducer = (state=defaultState, action)=>{
  switch(action.type) {
    case ISLOGIN:
      store.set(ISLOGIN, action.payload)
      return state.set('isLogin', action.payload)
    case SETPHONE:
      store.set(SETPHONE, action.payload)
      return state.set('phone', action.payload)
    case SETUID: 
      store.set(SETUID, action.payload)
      return state.set('uid', action.payload)
    default:
      return state
  }
}

export default reducer

