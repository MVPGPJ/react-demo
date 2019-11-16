import React, { Component } from 'react'
import StyledChatHeader from './StyledChatHeader'
export default class ChatHeader extends Component {
    render() {
        return (
            <StyledChatHeader hasBorder={true}>
                <div className="match">
                    <span>允许匹配</span>
                    <i></i>
                </div>
                <div className="chat">
                    <span>聊天</span>
                </div>
                <div className="focus">
                    <i></i>
                    <span onClick={this.handleFocusClick.bind(this)}>关注</span>
                </div>
            </StyledChatHeader>
        )
    }
    handleFocusClick(){
        this.props.history.push('/focus')
    }
}
