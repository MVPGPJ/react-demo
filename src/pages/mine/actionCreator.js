import { MYSELFDATA } from './actionTypes'
import { GOLD } from './actionTypes'
import { FRIENDDATA } from './actionTypes'

import http from 'utils/http'

//同步
export const loadMyselfDataSync = (data) => {
  return {
    type: MYSELFDATA,
    data
  }
}
export const loadGOLDSync = (data) => {
  return {
    type: GOLD,
    data
  }
}
export const loadFriendDataSync = (data) => {
  return {
    type: FRIENDDATA,
    data
  }
}

//异步
export const loadMyselfDataAsync = () => {
  return async (dispatch) => {
    let result = await http.get('/userinfo',{})
    dispatch(loadMyselfDataSync(result))
  }
}
export const loadFriendDataAsync = (id) => {
  let friendId = id
  return async (dispatch) => {
    let result = await http.get('/userinfo?id='+ friendId,{})
    dispatch(loadFriendDataSync(result))
  }
}

// function loadFriendDataAsync(id) {
//   return async (dispatch,id) => {
//     let result = await http.get('/userinfo?id='+ id,{})
//     dispatch(loadFriendDataSync(result))
//   }
// }
export const loadGOLDAsync = () => {
  return async (dispatch) => {
    let result = await http.get('/sign',{})
    dispatch(loadGOLDSync(result))
  }
}