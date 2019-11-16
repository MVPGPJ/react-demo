// 依赖
import React, { Component } from 'react'
import {
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

// 状态
const mapState = state => ({
  isLogin: state.getIn(['account', 'isLogin'])
})

/**
 * 用于对全局登录状态的一个判断
 * 如果为登录则跳转到start
 * 如果未登录则跳转到account
 */
class PageGuard extends Component {
  render() {
    return (
        <>
          {
            this.props.isLogin
            ? this.props.children
            : (
                <>
                  <Redirect to="/account"></Redirect>
                </>
              )
          }
        </>
    )
  }
}
export default connect(mapState)(PageGuard)