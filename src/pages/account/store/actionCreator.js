import { ISLOGIN, SETPHONE, SETUID } from './actionTypes'

const setLoginState = (isLogin) => {
  return {
    type: ISLOGIN,
    payload: isLogin
  }
}
const setPhone = (phone) => {
  return {
    type: SETPHONE,
    payload: phone
  }
}
const setUid = (uid) => {
    return {
        type: SETUID,
        payload: uid
    }
}
export {
  setLoginState,
  setPhone,
  setUid
}