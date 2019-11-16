// 依赖
import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import Animate from 'components/high-order/Animate'

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
    return (
      <Router>
        <Switch>
          {
            this.props.isLogin
            ? this.props.children
            : (
                <>
                  <Redirect from="*" to="/"></Redirect>
                  <Route path="/" component={this.props.comp}></Route>
                </>
              )
          }
        </Switch>
      </Router>
    )
  }
}
export default connect(mapState)(Animate(IsRedirectAccount))