import React, { Component } from 'react'

import StylePeopleAndTab from './StylePeopleAndTabCart'
import LuckyBag from './LuckyBagUI'

import textImg from 'assets/images/home/笑脸@3x.png'

import matchImg1 from 'assets/images/home/头像@3x.png'
import matchImg2 from 'assets/images/home/头像2@3x.png'
import matchImg3 from 'assets/images/home/头像3@3x.png'

import soulImg from 'assets/images/home/soul.png'
import loveImg from 'assets/images/home/恋爱领@3x.png'

/**
 * 在线人数和选项卡组件
 *  
 * 2019-07-25
 */

export default class PeopleAndTabCart extends Component {
    render() {
        return (
            <StylePeopleAndTab>
                {/* 在线人数 */}
                <p className="people-live">当前<span>13131</span>人在线</p>
                {/* 福袋组件 */}
                <LuckyBag></LuckyBag>
                {/* 选项卡 */}
                <div className="tab-carts">
                    <ul>
                        <li onClick={() => this.props.isClickCart('/toTest')}>
                            <img src={textImg} alt=""/>
                            <p>测一测</p>
                            <p>我是谁? 我在哪?</p>
                        </li>
                        <li>
                            <div className="img-div">
                                <img src={matchImg1} alt="" className="img-overlap" />
                                <img src={matchImg2} alt="" className="img-overlap"/>
                                <img src={matchImg3} alt="" className="img-overlap"/>
                            </div>
                            <p>语音匹配</p>
                            <p>与温暖的声音语音</p>
                        </li>
                        <li>
                            <img src={soulImg} alt=""/>
                            <p>灵魂匹配</p>
                            <p>和在线最匹配聊天</p>
                        </li>
                        <li>
                            <img src={loveImg} alt=""/>
                            <p>恋爱铃</p>
                            <p>和缘分靠近会响铃</p>
                        </li>
                    </ul>
                </div>
            </StylePeopleAndTab>
        )
    }
}
