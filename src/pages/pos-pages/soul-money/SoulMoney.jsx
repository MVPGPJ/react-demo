import React, { Component } from 'react'
// import Header from '../dynamic-details/Header'
import Animate from 'components/high-order/Animate'
import {
    Container,
    MainWrap,
    ShadowWrap,
    Title,
    BalanceWrap,
    SignInWrap,
    GetSoulMoneyWrap
} from './styledComponents'
import { Icon } from 'antd-mobile'

import { Header } from 'pages/mine/views/header/'

class SoulMoney extends Component {
    state = {
        TopMsg: {
            // left: '222',
            center: '我的soul币',
            right: '须知&反馈',
            Way: this.handleWay.bind(this)
        },
    }
    render() {
        return (
            <Container>
                {/* <Header
          className={'around'}
          iconLeft={'back'}
          rightContent={'须知&反馈'}
        >
            我的soul币
        </Header> */}
                <Header TopMsg={this.state.TopMsg}></Header>
                <MainWrap>
                    <div>
                        <BalanceWrap>
                            <div style={{ display: 'flex' }}>
                                <div className="img-wrap">
                                    <img src={require('assets/images/account/money.png')} alt="" />
                                </div>
                                <div className="balance">
                                    {'10'}
                                </div>
                                <div className="tunnel-bill">
                                    {'我的账单>'}
                                </div>
                            </div>
                            <div className="tunnel-pay">
                                去充值
                    </div>
                        </BalanceWrap>
                        <SignInWrap>
                            <div className="title">签到赚soul币</div>
                            <div className="wrap">
                                <div className="sign-wrap">
                                    <div className="sign-btn done">
                                        <Icon type='check' size='xs' color='#01E9DE'></Icon>
                                    </div>
                                    <div className="sign-text">今天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">2天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">3天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">4天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">5天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">6天</div>
                                </div>
                                <div className="sign-wrap">
                                    <div className="sign-btn">{'+1'}</div>
                                    <div className="sign-text">7天</div>
                                </div>
                            </div>
                        </SignInWrap>
                    </div>
                    <div style={{ paddingTop: '0.13rem' }}>
                        <Title>
                            <div className="title">免费拿soul币</div>
                            <div className="broadcast">鹤发**邀请好友获得80 soul币</div>
                        </Title>
                        <GetSoulMoneyWrap>
                            <div style={{ display: 'flex' }}>
                                <div className="img-wrap">
                                    <img src={require('assets/images/account/yaoq.png')} alt="" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className='title'>
                                        {'邀请好友'}
                                    </div>
                                    <div className="tip">
                                        {'每邀请1位均可获10Soul，免费无上限'}
                                    </div>
                                </div>
                            </div>
                            <div className="get-btn">{'邀请免费得'}</div>
                        </GetSoulMoneyWrap>
                        <GetSoulMoneyWrap>
                            <div style={{ display: 'flex' }}>
                                <div className="img-wrap">
                                    <img src={require('assets/images/account/email.png')} alt="" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className='title'>
                                        {'绑定邮箱'}
                                    </div>
                                    <div className="tip">
                                        {'绑定个人邮箱，超简单还能拿Soul币'}
                                    </div>
                                </div>
                            </div>
                            <div className="get-btn">{'绑定免费拿'}</div>
                        </GetSoulMoneyWrap>
                    </div>
                </MainWrap>
            </Container>
        )
    }
    handleWay() {

    }
}
export default Animate(SoulMoney)