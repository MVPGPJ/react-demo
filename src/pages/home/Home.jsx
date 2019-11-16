import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import Animate from 'components/high-order/Animate'

import PlanetContainer from './planet/PlanetContainer'
import StyleHome from './StyleHome'
import ChatRoot from 'pages/chat/ChatRoot'
import { Mine } from 'pages/mine/'
import { Square } from 'pages/square'

import plazaImg from 'assets/images/home/guangchang3x.png'
import chatImg from 'assets/images/home/liaotian3x.png'
import planetImg from 'assets/images/home/planet@3x.png'
import mineImg from 'assets/images/home/mine@3x.png'

import planetedImg from 'assets/images/home/planeted.png'
import plazaedImg from 'assets/images/home/plazaed@3x.png'
import chatedImg from 'assets/images/home/chated.png'
import minedImg from 'assets/images/home/mined.png'

/** 
 * 首页主要路由的导航界面组件
 * 
 * 2019-07-22
 * 
*/

class Home extends Component {

    render() {
        const routePath = this.props.location.pathname
        return (
            <StyleHome>
                <main>
                    {/* 星球组件 */}
                    <Redirect from='/' to='/dynamic' ></Redirect>
                    <Route path='/home' component={PlanetContainer} />
                    <Route path='/chat' component={ChatRoot}></Route>
                    <Route path='/dynamic' component={Square}></Route>
                    <Route path='/mine' component={Mine}></Route> 
                </main>

                <nav>
                    <ul>
                        <li>
                            <Link className="link" to="/home">
                                <img src={routePath === '/home' ? planetedImg : planetImg} alt="" className="planet-img" />
                                <span>星球</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/dynamic">
                                <img src={routePath === '/dynamic' ? plazaedImg : plazaImg} alt="" />
                                <span>广场</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/publish">
                                <div className="ball">
                                    <span>发布</span>
                                </div>
                                <div className="top-ball"></div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/chat">
                                <img src={routePath === '/chat' ? chatedImg : chatImg} alt="" />
                                <span>聊天</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/mine">
                                <img src={routePath === '/mine' ? minedImg : mineImg} alt="" />
                                <span>自己</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </StyleHome>
        )
    }
}

export default Animate(Home)