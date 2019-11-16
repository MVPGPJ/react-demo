import React from 'react'

import StyleBackTitleHead from './StyleBackTitleHead'

import backImg from 'assets/images/toTest/fanhui@3x.png'


/**
 *  含有返回键和标题的界面头组件 
 * 
 *  2019-08-06
 */

export default function BackTitleHead(props) {
    return (
        <StyleBackTitleHead>
            <ul>
                <li onClick={() => props.isClick()}>
                    <img className="left" src={backImg} alt=""/>
                </li>
                <li>
                    <span>{props.title}</span>
                </li>
            </ul>
        </StyleBackTitleHead>
    )
}
