import React, { Component } from 'react'
import ChatItemUI from './ChatItemUI'
import StyledChatList from './StyledChatList'
import Axios from 'axios'
export default class ChatList extends Component {
    render() {
        return (
            <StyledChatList>
                <div className="listHead">
                    <span>全部消息</span>
                    <i></i>
                </div>
                <div>{this.props.list && this.props.list.length > 0 ?
                    this.props.list.map((item, index) => {
                        let d = new Date()
                        let m = d.getMonth() + 1;
                        let date = d.getDate();
                        let h = d.getHours();
                        let s = d.getMinutes();
                        return <ChatItemUI {...item} {...this.props} key={item.id} dateTime={m+"月"+date+"日 "+h+":"+s}></ChatItemUI>
                    }) : ""
                }
                </div>

            </StyledChatList>

        )
    }
}
