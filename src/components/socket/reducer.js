const defaultState = {
    ws: null,
    newMsgList: new Array()
}
let id = '1004'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'createSocket':
            return {
                ws: action.payload,
                newMsgList: state.newMsgList
            }
        case 'pushMsg':
            console.log(state.newMsgList,action.payload.msg,"state.newMsgList111111")
            const find = state.newMsgList.find((item) => {
                if (action.payload.fromId == action.payload.currentId) {
                    // alert(1)
                    return (item.id == action.payload.to)
                } else {
                    // alert(2)
                    return (item.id == action.payload.fromId)
                }
            })//id

            if (!find || find.length <= 0) {

                return {
                    newMsgList: [...state.newMsgList,
                    {
                        id: action.payload.fromId == action.payload.currentId ? action.payload.to : action.payload.fromId,
                        msgs: [
                            {
                                fromId: action.payload.fromId,
                                to: action.payload.to,
                                msg: action.payload.msg,
                                timeStamp: action.payload.timeStamp
                            }
                        ]
                    }],
                    ws: state.ws
                }
            }
            else {
                console.log("find",find)
                find.msgs = [...find.msgs, { fromId: action.payload.fromId, msg: action.payload.msg, timeStamp: action.payload.timeStamp }]
                console.log(find, "findfind")

                return {
                    newMsgList: [...state.newMsgList],
                    ws: state.ws
                }
            }
        default:
            return state
    }
}
export default reducer;