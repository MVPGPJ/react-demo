// 依赖
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
    Route,
} from 'react-router-dom'
// store 引入
import store from '@/store/'

// 组件引入
import IsRedirectAccount from 'components/account/IsRedirectAccount'
import { AccountContainer } from 'pages/account/'
import { Home } from 'pages/home/index'
import Starting from 'pages/pos-pages/starting/Starting'
import { SocketConnection } from 'components/socket/'
import Publish from 'pages/publish/index.jsx'
import { SoulTestContainer, ToTestContainer } from 'pages/feature/index'


// 浮层页面
import AddFriend from 'pages/pos-pages/add-friend/AddFriend'
import DynamicDetails from 'pages/pos-pages/dynamic-details/DynamicItem'
import SoulMoney from 'pages/pos-pages/soul-money/SoulMoney'
import SoulTest from 'pages/pos-pages/soul-test/SoulTest'
import TestSelf from 'pages/pos-pages/test-self/TestSelf'
import FocusListContainer from 'pages/chat/focusList/FocusListContainer'

import Signature from 'pages/mine/views/set/signature/Signature'
import Birthday from 'pages/mine/views/set/birthday/Birthday'
import PassWord from  'pages/mine/views/set/password/PassWord'
import Sett from 'pages/mine/views/set/settingItem/Setting'
import { Friend as FriendMsg} from 'pages/mine/views/friend/friendMsg/'
import Gold from 'pages/mine/views/gold/gold'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isInStarting: true
        }
    }
    closeStarting = () => {
        this.setState({
            isInStarting: false
        })
    }
    render() {
        return (
            <Provider store={store}>
                <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <Starting
                        animate="model"
                        hasWrap={false}
                        showAnimate={this.state.isInStarting}
                        closeStarting={this.closeStarting}
                    ></Starting>
                    <IsRedirectAccount
                        comp={AccountContainer}
                        animate="model"
                        hasWrap={false}
                        showAnimate={!this.state.isInStarting}
                    >
                        <SocketConnection>
                            <Route path="/" render={(props)=>(<Home {...props}></Home>)} ></Route>
                            <Route path='/comment/:id' children={
                                (props) => (
                                    <DynamicDetails {...props}></DynamicDetails>
                                )
                            }></Route>

                            {/* <Route path=''></Route> */}
                            <Route path='/friend' children={
                                (props) => (
                                    <AddFriend {...props}></AddFriend>
                                )
                            }></Route>

                            <Route path='/gold' children={
                                (props) => (
                                    <SoulMoney {...props}></SoulMoney>
                                )
                            }></Route>

                            {/* 灵魂测试试题组件 */}
                            <Route path='/soulTests/:id' children={
                                (props) => (
                                    <SoulTest {...props}></SoulTest>
                                )
                            }></Route>

                            {/* 测一测测试题组件 */}
                            <Route path='/testself/:id' children={
                                (props) => (
                                    <TestSelf {...props}></TestSelf>
                                )
                            }></Route>
        
                            <Route path=''></Route>
                            {/* <Route path='/friend' exact children={
                                (props) => (
                                    <SoulTestContainer {...props}></SoulTestContainer>
                                )
                            }></Route> */}

                            {/* <Route path='/gold' children={
                                (props) => (
                                    <Gold {...props}></Gold>
                                )
                            }></Route> */}

                            {/* 发布 */}
                            <Route path='/publish'  children={
                                (props) => (
                                    <Publish 
                                        {...props} 
                                        animate='publish'
                                        classame='publish'
                                    ></Publish>
                                )
                            }></Route>

                            {/* 登录 */}
                            <Route path='/testself' exact children={
                                (props) => (
                                    <TestSelf {...props}></TestSelf>
                                )
                            }></Route>
                            <Route path='/focus' children={
                                (props) => (
                                    <FocusListContainer {...props}></FocusListContainer>
                                )
                            }></Route>

                            {/* 自己模块 */}
                            <Route path="/friend/:userId" children={ 
                                (props) => {
                                    return <FriendMsg {...props}></FriendMsg>
                                }
                            }></Route>
                            {/* <Route path='/gold' component={ SoulMoney }></Route> */}
                            <Route path='/setting' children={
                                (props) => {
                                    return  <Sett {...props}></Sett>
                                }
                            }></Route>
                            <Route path='/setting/signature' children={
                                (props) => {
                                    return  <Signature {...props}></Signature>
                                }
                            }></Route>
                            <Route path='/setting/birthday' children={
                                (props) => {
                                    return <Birthday {...props}></Birthday>
                                }
                            }></Route>
                            <Route path='/setting/password' children={
                                (props) => {
                                    return <PassWord {...props}></PassWord>
                                }
                            }></Route>
                            <Route path='/soulTest' children={
                                (props) => {
                                    return <SoulTestContainer {...props}></SoulTestContainer>
                                }
                            }></Route>
                            <Route path='/toTest' children={
                                (props) => {
                                    return <ToTestContainer {...props}></ToTestContainer>
                                }
                            }></Route>
                        </SocketConnection>
                    </IsRedirectAccount>
                </div>
            </Provider>
        )
    }
}
export default App
