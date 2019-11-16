import React from 'react'

import StyleChangeCartHead from './StyleChangeCartHead'

import backImg from 'assets/images/toTest/fanhui@3x.png'
import shareImg from 'assets/images/toTest/iconfontfenxiang@3x.png'

/**
 *   可以进行选项卡切换的头部组件
 * 
 *   2019-08-07
 */

export default function ChangeCartHead(props) {
    return (
        <StyleChangeCartHead>
            {/* 若props没改变没必要渲染 */}
            <ul>
                <li onClick={() => props.isBack()}>
                    <img className="left" src={backImg} alt=""/>
                </li>
                <li>
                    <span className={props.value.isChange ? 'active' : ''} onClick={()=>props.isClick('/toTest', true)}>测一测</span>
                    <span onClick={()=>props.isClick('/toTest/myAttr', false)}  className={props.value.isChange ? '' : 'active'}>我的属性</span>
                </li>
                <li className="share">
                    <img src={shareImg} alt=""/>
                </li>
            </ul>
        </StyleChangeCartHead>
    )
}
