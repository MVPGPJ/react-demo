import React, { Component } from 'react'
import { StyledChatWinContent, BorderedInput } from './StyledChatWinContent'
import { connect } from 'react-redux'
import Talk from './Talk'
import { pushMsg, sendMsg } from 'components/socket/'
import { formatJsonDate } from 'utils/date'
import BScroll from 'better-scroll'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

const mapState = (state) => {
    console.log(state, "------------------")
    console.log(state.getIn(['account', 'uid']), "------------------")
    return {
        ws: state.getIn(['socket', 'ws']),
        msgList: [...state.getIn(['socket', 'newMsgList'])],
        uid: state.getIn(['account', 'uid']),
    }

}
const mapDispatch = (dispatch) => ({
    pushMsg: (msg) => {
        dispatch(pushMsg(msg))
    }
})
let scroll = null;
let wrapper = null;
class ChatWinContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '测试',
            msgList: []
        }
    }
    render() {
        return (
            <StyledChatWinContent >
                <div id="container" className="scroll-container">
                    <div>
                        <ul>
                            {
                                this.state.msgList.length >= 1 && (<p>{formatJsonDate(this.state.msgList[0].timeStamp)}</p>)
                            }

                            {
                                this.state.msgList && this.state.msgList.length > 0 ?
                                    this.state.msgList.map((item, key) => (
                                        <Talk direction={item.fromId == this.props.uid ? "right" : "left"} msg={item.msg} key={key} >
                                        </Talk>
                                    )) : ""
                            }


                        </ul>
                    </div>
                </div>
                <BorderedInput className="input" hasBorder={true}>
                    <textarea name="" id="" cols="30" rows="1" style={{ 'overflowY': 'scroll' }}
                        placeholder="请输入聊天内容..."
                        onChange={(e) => this.handleInput(this, e)}
                        onKeyDown={(e) => this.handleKeyDown(this, e)}
                        value={this.state.message}
                    >
                    </textarea>
                </BorderedInput>
            </StyledChatWinContent>
        )
    }
    componentDidMount() {
        wrapper = document.querySelector('#container')
        scroll = new BScroll(wrapper, {
            pullUpLoad: false,
            mouseWheel: true,
            scrollbar: {
                fade: false
            }
        })
    }
    static getDerivedStateFromProps(nextProps, preStates) {
        if (nextProps && nextProps.msgList.length > 0 && nextProps.match.params.id) {
            console.log(nextProps.msgList, nextProps.match.params.id, "比较")
            let _userMsg = nextProps.msgList.find((item) => item.id == nextProps.match.params.id)
            console.log(_userMsg)
            return {
                msgList: _userMsg ? _userMsg.msgs : []
            }
        }
        return null
    }
    componentDidUpdate() {
        if (scroll && wrapper) {
            scroll.refresh()
            scroll.scrollTo(0, scroll.maxScrollY)
        }
    }
    handleInput(obj, e) {
        this.setState({
            message: e.target.value.replace(/[\r\n]/g, "")
        })
    }
    handleKeyDown(obj, e) {
        if (e.keyCode === 13) {
            if (this.state.message.trim().length <= 0) {
                Toast.info('不能发送空白信息 !!!', 1);
                return
            }
            console.log(this.props.uid, 89)
            let ret = sendMsg(this.props.ws, {
                to: this.props.match.params.id,
                from: this.props.uid,//'1004',
                msg: this.state.message
            })
            this.setState({
                message: ''
            })
            if (ret) {
                this.props.pushMsg(
                    {
                        fromId: this.props.uid,//'1004',
                        to: this.props.match.params.id,
                        msg: this.state.message,
                        timeStamp: Date.now(),
                        currentId: this.props.uid
                    }
                )
            }
        }
    }

}
export default connect(mapState, mapDispatch)(ChatWinContent)