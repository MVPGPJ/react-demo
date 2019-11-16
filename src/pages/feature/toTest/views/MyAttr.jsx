import React, { Component } from 'react'

import StyleMyAttr from './StyleMyAttr'

import myAttrImg from 'assets/images/toTest/attr@3x.png'

/**
 *   我的属性界面的容器组件
 * 
 *   2019-08-08
 */

export default class MyAttr extends Component {
    render() {
        return (
            <StyleMyAttr>
                <h3>我的夏日十二时辰</h3>
                <div className="my-attr">
                    <img src={myAttrImg} alt=""/>
                </div>
                <div className="share-btn">
                    <button>分享</button>
                </div>
            </StyleMyAttr>
        )
    }
}
