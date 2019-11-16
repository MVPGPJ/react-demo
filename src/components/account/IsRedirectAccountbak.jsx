// 依赖
import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect
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
class IsRedirectAccount extends Component {
  render() {
    console.log(this.props.isLogin)
    return (
      <Router>
        {
          this.props.isLogin 
          ? this.props.children
          : (<>
              <Redirect from="/" to="/account"></Redirect>
              <Route path="/account" component={this.props.comp}></Route>
            </>)
        }
      </Router>
    )
  }
}
export default connect(mapState)(IsRedirectAccount)