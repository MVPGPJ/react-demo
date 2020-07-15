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
        // let result = await http.get('/userinfo',{})
        let result = {
            // myselfData: {
            //     head: 'https://q.qlogo.cn/g?b=qq&nk=292847236&s=100',
            //     username: '爱你们的TeeMo',
            //     sign: '有点想你们了，离散，回忆，面面面',
            //     starname: '只会笑的提莫',
            //     days: '1314'
            // },
            head: 'https://q.qlogo.cn/g?b=qq&nk=292847236&s=100',
            username: '爱你们的TeeMo',
            sign: '有点想你们了，离散，回忆，面面面',
            starname: '只会笑的提莫',
            days: '1314',
            note: '???'
        }
        dispatch(loadMyselfDataSync(result))
    }
}
export const loadFriendDataAsync = (id) => {
    let friendId = id
    return async (dispatch) => {
        // let result = await http.get('/userinfo?id='+ friendId,{})
        let result = {
            head: 'https://q.qlogo.cn/g?b=qq&nk=292847236&s=100',
            username: '爱你们的TeeMo',
            sign: '有点想你们了，离散，回忆，面面面',
            days: '1314'
        }
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
        // let result = await http.get('/sign', {})
        let result = {
            gold: {
                gold: '1314'
            },
            gold: '1314'
        }
        dispatch(loadGOLDSync(result))
    }
}