import React, { Component } from 'react'
import StyledChatNav from './StyledChatNav'
import soul from 'assets/images/chat/椭圆 6@2x.png'
import newBtn from 'assets/images/chat/new@3x.png'
export default class ChatNav extends Component {
    render() {
        return (
            <StyledChatNav>
                <div className="left">
                    <img src={soul} alt="" />
                    <div>
                        <h4>Soul官方</h4>
                        <span>急！有人找你！</span>
                    </div>
                </div>
                <div className="right">
                    <img src={newBtn} alt="" />
                </div>

            </StyledChatNav>
        )
    }
}