import React, { Component } from 'react'
import ChatWinHeader from './chatWinHeader/ChatWinHeader'
import ChatWinContent from './chatWinContent/ChatWinContent'
import StyledChatWinContainer from './StyledChatWinContainer'
import ChatWinBars from './chatWinFooter/ChatWinBars'
import Animate from 'components/high-order/Animate'

class ChatWinContainer extends Component { 
    render() {
        return (
            <StyledChatWinContainer>
                <ChatWinHeader {...this.props}/>
                <ChatWinContent {...this.props}/>
                <ChatWinBars/>
            </StyledChatWinContainer>
        )
    }
    
}
export default (Animate(ChatWinContainer))