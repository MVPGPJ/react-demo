import React from 'react'
// import { WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile'

import StylePlaneHead from './StylePlaneHead'

import { Alert } from 'components/index'

import logoImg from 'assets/images/home/logo.png'
import filtrateImg from 'assets/images/home/shalou@3x.png'

/** 
 * 首页中星球界面的头部导航组件
 * 
 * 2019-07-22
*/

export default function PlaneHead(props) {

    return (
        <>
            <StylePlaneHead>
                <ul>
                    <li>
                        <span className="text" onClick={() => props.callbackClick("/soulTest")}>灵魂测试</span>
                    </li>
                    <li>
                        <span className="logo">
                            <img src={logoImg} alt="" />
                        </span>
                    </li>
                    <li onClick={() => props.isClickFilter()}>
                        <img src={filtrateImg} alt="" className="filtrate-img" />
                        <span className="filtration">筛选</span>
                    </li>
                </ul>
                {/* 弹出框 */}
                <Alert {...props}></Alert>
            </StylePlaneHead>
        </>
    )
}
