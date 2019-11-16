// import store from 'store'
import { Map } from 'immutable'
import { GETFOCUS, VALUE, IMG, LOCALID, VOICE, ADDRESS } from './actionTypes'

const defaultState = Map({
    focus: true,
    value: '',//能显示表情的文本
    img: [], //需要上传到服务器的图片地址
    localid: [],//本地的图片地址
    voice: '', //需要上传到服务器的
    address: '北京'
})

const reducer = (state = defaultState, action) => {
    // console.log(action.data)
    switch (action.type) {
        case GETFOCUS:
            return state.set('focus', action.data)
        case VALUE:
            return state.set('value', action.data)
        case IMG: 
            return state.set('img', action.data)
        case VOICE:
            return state.set('voice', action.data)
        case LOCALID:
            return state.set('localid', action.data)
        case ADDRESS:
            return state.set('address', action.data)
        default:
            return state
    }
}

export { reducer } 