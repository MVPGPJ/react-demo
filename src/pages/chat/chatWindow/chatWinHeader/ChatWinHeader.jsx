import React, { Component } from 'react'
import StyledChatWinHeader from './StyledChatWinHeader'
export default class ChatWinHeader extends Component {
    render() {
        return (
            <StyledChatWinHeader>
                <i onClick={this.handleBackClick.bind(this)}></i>
                <div><span>{this.props.location.query && this.props.location.query.username}</span></div>
            </StyledChatWinHeader>
        )
    }
    handleBackClick() {
        this.props.history.goBack()
    }
}
