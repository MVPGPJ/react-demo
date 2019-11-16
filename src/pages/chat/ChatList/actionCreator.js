
import http from 'utils/http'
const asyncGetChatListData = () => {
    return async (dispatch) => {
        const ret = await http.get('/getfocus', {});
        if (ret && ret != 'undefined' && ret.focus) {
            dispatch({
                type: "getChatList",
                payLoad: ret.focus
            })
        }
    }
}
export {
    asyncGetChatListData
}