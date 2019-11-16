import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { TopMsgContainer } from './TopMsgStyle'
import { Header } from '../../header/'
import Time from '../time/Time'



class TopMsg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeHeight: 300
        }
    }
    render() {
        return (
            <TopMsgContainer className="bg" style={{height:`${(this.state.changeHeight+this.props.scaleHegiht)/100}rem`}} >
                <img
                    id="H"
                    src={require('assets/images/mine/friend.png')}
                    alt=""
                    style={{
                        transform:`scale(${(this.state.changeHeight+this.props.scaleHegiht)/this.state.changeHeight})`
                    }}
                />
                <Header friendData={this.props.friendData}></Header>
                <div className="avatar">
                    <img src={this.props.friendData.head} alt=""/>
                    {/* <img src={require('assets/images/mine/avatar.png')} alt=""/> */}
                    <p>{this.props.friendData.username}</p>
                </div>
                <div className="signature">
                    <p>{this.props.friendData.sign}</p>
                </div>
                <Time friendData={this.props.friendData} className="time"></Time>
            </TopMsgContainer>
        );
    }
    componentDidMount() {
        let H = document.getElementById("H").offsetHeight

        this.setState((prevState,props) => ({
            changeHeight: prevState.changeHeight = H
        }))
    }
}

export default withRouter(TopMsg);