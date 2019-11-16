var test = false
var currentId = "1004"
var testId="1011"
const createSocket = (from) => {
    return (dispatch) => {
        if ("WebSocket" in window) {
            currentId = from;
            let ws = new WebSocket("ws://www.red-mi.xyz/chat/" + from)
            ws.onopen = function () {
                // setMessage("连接成功")
                console.log('socket链接成功')
                dispatch({
                    type: 'createSocket',
                    payload: ws
                })
            }
            ws.onmessage = function (event) {
                console.log(event, "接收到消息----------------")
                // console.log(JSON.parse(event.data), "接收到消息----------------")
                let to = event.currentTarget.url.substring(event.currentTarget.url.length - 4)
                if (event.data != '对方不在线') {
                    let _data = test ? null : JSON.parse(event.data)
                    console.log(_data,"message")
                    console.log( test ? event.data : _data.message,"2222222222")
                    dispatch({
                        type: 'pushMsg',
                        payload: {
                            fromId: test ? (to == currentId ? testId : currentId) : _data.from,
                            to: test ? (to == currentId ? currentId :testId) : _data.to,
                            msg: test ? event.data: _data.msg,
                            timeStamp: event.timeStamp,
                            currentId
                        }
                    })

                }
            }
            // ws://localhost:8081/
            ws.onerror = function () {
                // setMessage("出错了")
                console.log('出错了')
            }
            ws.onclose = function () {
                // setMessage("关闭")
                console.log('关闭')
            }
        } else {
            alert("你是谁,来自哪里,为什么有上古世纪的电脑")
        }

    }
    //ws://localhost:8081/139.199.34.125:7007/chat/
    // function setMessage(message) {
    //     document.getElementById("content").innerHTML = message;
    // }
}
const pushMsg = (msg) => {
    return (dispatch) => {
        dispatch({
            type: 'pushMsg',
            payload: msg

        })
    }
}

export { createSocket, pushMsg }