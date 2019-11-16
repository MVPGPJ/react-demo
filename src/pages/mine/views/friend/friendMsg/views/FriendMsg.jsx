import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List } from 'immutable'
import BScroll from 'better-scroll';
import { Toast, WingBlank } from 'antd-mobile';
import Animate from 'components/high-order/Animate'

// import store from 'store'

import http from 'utils/http'
import { FStyle } from './FriendStyle'
import { TopMsg } from './topMsg/'
import { Bottom as BottomMsg } from './bottomMsg'
import { loadFriendDataAsync } from 'pages/mine/actionCreator'

let chat = "/chat/message/"

const mapState = state => ({
    friendData: state.getIn(['mine', 'friendData'])
})

const mapDispatch = (dispatch) => ({
    loadData(id) {
        dispatch(loadFriendDataAsync(id))
    }
})

function showToastNoMask(msg) {
    Toast.info(msg, 2, null, false);
}

class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaleHegiht: 0,
            friendData: List([])
        }
        this.handleAttention = this.handleAttention.bind(this)
        this.handleChat = this.handleChat.bind(this)
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.friendData){
    //         let sign = nextProps.friendData.toJS().sign
    //         // store.set('mine/sign', sign)
    //     }
    //     return null;
    // }
    render() {
        return (
            <FStyle className="bScroll">
                <div className="friend">
                    <TopMsg friendData={this.props.friendData.toJS()} scaleHegiht={this.state.scaleHegiht > 0 ? this.state.scaleHegiht : 0}></TopMsg>
                    <BottomMsg friendData={this.props.friendData.toJS()}></BottomMsg>
                    <div className="buttom">
                        <div className="attention" onClick={this.handleAttention}>
                            关注
                        </div>
                        <div className='chat' onClick={this.handleChat}>
                            私聊
                        </div>
                    </div>
                    <WingBlank></WingBlank>
                </div>
                
            </FStyle>
        );
    }
    async componentDidMount() {
        await this.props.loadData(this.props.match.params.userId)
        let bs = new BScroll('.bScroll', {
            scrollY: true,
            click: true,
            probeType: 3
        })
        bs.on('scroll', (e) => this.onScroll(e))
    }

    onScroll(e) {
        this.setState({
            scaleHegiht: this.scaleHegiht = e.y
        })
    }

    async handleAttention() {
        let result = await http.get('/focus',{id: this.props.match.params.userId})
        if (result.code === 1) {
            showToastNoMask('亲，你已经关注过了哦！')
        }
        if (result.code === 0) {
            showToastNoMask('关注成功,请在关注列表查看')
        }
    }

    handleChat() {
        this.props.history.push(chat+this.props.match.params.userId)
    }
}

export default connect(mapState, mapDispatch)(withRouter(Animate(Friend)));
