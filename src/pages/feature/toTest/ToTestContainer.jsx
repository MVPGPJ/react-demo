import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Animate from 'components/high-order/Animate.jsx'

import { ChangeCartHead } from 'components/index'

import ToTest from './views/ToTest'
import MyAttr from './views/MyAttr'

/**
 *   测一测界面的容器组件
 *  
 *   2019-08-07
 */

 class ToTestContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            isChange: true
        };
    }
    //返回home执行函数
    backHome(){
        this.props.history.goBack()
    }

    // 测一测头部导航条的切换函数
    changeCart(value, isClick){
        this.setState({
            isChange: isClick
        },()=>{
            this.props.history.replace(value)
            console.log(this.state.isChange+'2222')
        })
    }

    render() {
        return (
            <>
                {/* 头部选择切换组件 */}
                <ChangeCartHead isClick={this.changeCart.bind(this)} isBack={this.backHome.bind(this)} value={this.state}></ChangeCartHead>
                {/* 匹配显示 测一测 和 我的属性 组件 */}
                <Switch>
                    <Route path='/toTest' exact render={props => <ToTest {...props}></ToTest>}></Route>
                    <Route path='/toTest/myAttr' render={props => <MyAttr {...props}></MyAttr>}></Route>
                </Switch>
            </>
        )
    }
}

export default Animate(ToTestContainer)