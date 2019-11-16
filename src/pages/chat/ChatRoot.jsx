import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import Concern from './ChatList/Concern'
import ChatWinContainer from './chatWindow/ChatWinContainer'


export default class ChatRoot extends Component {
    render() {
        console.log(this.props,3)
        return (
            <div style={{width:'100%' ,height:'100%'}}>
                <Route path='/chat' {...this.props} component={Concern} exact></Route>
                <Route path="/chat/message/:id" {...this.props} component={ChatWinContainer}></Route>
            </div>
        )
    }
}
