// 依赖
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

// store 引入
import store from '@/store/'

// 组件引入
import IsRedirectAccount from 'components/account/IsRedirectAccount'
import { AccountContainer } from 'pages/account/'
import Publish from 'pages/publish/index.jsx'
// import ChatRoot from 'pages/chat/ChatRoot'
// import FocusListContainer from 'pages/chat/focusList/FocusListContainer'

import { Home } from './pages/home/index'
import { SoulTestContainer, ToTestContainer } from 'pages/feature/index'
//广场组件
// import Square from 'pages/square/Test.jsx'
// import { Square } from 'pages/square'
// import Square from 'pages/square/Test.jsx'
//自己组件
// import { Mine } from 'pages/mine/'
import { SocketConnection } from 'components/socket/'

// 测试
// import Test from './test/Test'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IsRedirectAccount comp={AccountContainer}>
          <SocketConnection>
            {/* <Redirect from='/' to="/mine/friend/1001" exact></Redirect> */}
            <Route path="/home" render={props => <Home {...props}></Home>}></Route>
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="/home" component={Home}></Route>
            {/* 灵魂测试 */}
            <Route path="/soulTest" component={SoulTestContainer}></Route>
            {/* 测一测组件 */}
            <Route path="/toTest" render={props => <ToTestContainer {...props}></ToTestContainer>}></Route>
            {/* <Route path='/start' render={() => (<div>start</div>)}></Route>
            <Route path='/chat' component={ChatRoot}></Route>
            <Route path='/focus' component={FocusListContainer}></Route>
            <Route path='/dynamic' component={Square}></Route>
            <Route path='/mine' component={Mine}></Route> */}
            {/* <Route path='/test' component={Test}></Route> */}
            {/* <Route path='/publish' component={Publish}></Route> */}
            <Route path="/toTest" component={ToTestContainer}></Route>
            {/* <Route path='/start' component={() => (<div>start</div>)}></Route> */}

            {/* <Route path='/chat' component={ChatRoot}></Route> */}
            {/* <Route path='/focus' component={FocusListContainer}></Route> */}
            {/* <Route path='/dynamic' component={Square}></Route> */}
            {/* <Route path='/mine' component={Mine}></Route> */}

            {/* <Route path='/test' component={Test}></Route> */}

            {/* <Route path='/publish' component={Publish}></Route> */}
            <Route path='/account' component={AccountContainer}></Route>
          </SocketConnection>
        </IsRedirectAccount>
      </Provider>
    )
  }
}
export default App