import Redux from 'redux'
const defaultState = {
    chatList: [],
    ws:null
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'getChatList':
            return {
                chatList: action.payLoad
            }
        default:
            return state
    }
}

export default reducer