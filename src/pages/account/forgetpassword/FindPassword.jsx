import React, { Component } from 'react'

import http from 'utils/http'

import Logo from '../_components/logo'
import Button from '../_components/button/Button'
import PasswordInput from '../login/PasswordInput'
import { FlexMidCen, Container } from '../_components/layout/'
import { Toast } from 'antd-mobile'

import Animate from 'components/high-order/Animate'

class FindPassword extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
        password: '',
        btnType: 'disabled',
        isLoading: false
    }
  }

  changePassword = (password, btnType) => {
      this.setState({
          password,
          btnType: btnType ? 'normal' : 'disabled'
      })
  }

  handleClick = async () => {
    console.log(this.props)
    this.setState({
        isLoading: true
    })
    let res = await http.get('/modifyinfo', {
        pwd: this.state.password
    })
    this.setState({
        isLoading: false
    })
    if( res.code === 1 ) {
        console.log('修改失败')
        Toast.fail(res.msg, 1)
    }else if (res.code === 0) {
        console.log('修改成功')
        this.props.history.goBack()
    }else {
        console.log(res.code)
    }
  }

  render() {
    return (
      <Container>
        <Logo></Logo>
        <PasswordInput changePassword={this.changePassword}></PasswordInput>
        <FlexMidCen style={{marginTop: '0.4rem'}}>
            <Button
             type={this.state.btnType}
             isLoading={this.state.isLoading}
             handleClick={this.handleClick}
            >确定</Button>
        </FlexMidCen>
      </Container>
    )
  }
}
export default Animate(FindPassword)