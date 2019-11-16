// 依赖
import React, { Component } from 'react'
// 引入actionCreate
import './style.css'
// 引入http请求模块
import http from 'utils/http'
// 样式组件
import Logo from '../_components/logo/'
import { FlexMidCen, Container } from '../_components/layout/'
import Button from '../_components/button/Button'
// 路由组件
import PhoneInput from './PhoneInput'
import PasswordInput from './PasswordInput'
import CodeInput from './CodeInput'
// 第三方组件
import { Toast } from 'antd-mobile'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
        clickType: 1, /* 1.phone检查 2.密码登录  3.注册或验证码登录  4.找回密码 */
        phone: this.props.phone || '',
        password: '',
        code: '',
        isLoading: false,
        btnType: 'disabled',
        isRegister: false,
        isFetchCode: false,
        countdownTime: 60
    }
  }

  // 设置按钮状态的处理 && 接收 phone 数据
  handlePhoneState =(phone, value)=> {
      // 设置按钮状态
      value 
      ? this.setState({
            btnType: 'normal',
            phone
        })
      : this.setState({
            btnType: 'disabled',
            phone,
            clickType: 1
        })
  }
  // 获取密码
  changePassword = password=> {
    this.setState({
        password,
    })
  }
  // 请求发送验证码
  getCode = async ()=> {
    if( this.state.isFetchCode ) return;
    console.log('请求发送验证码')
    let res = await http.get('/code', {
      phone: this.state.phone
    })
    this.countdownFetchCode()
  }
  // 获取用户输入验证码
  changeCode = code=> {
    this.setState({
        code,
    })
  }
  // 按钮对应的处理函数
  handleClick = ()=> {
      let {clickType} = this.state
      if(clickType===1) {
        this.verifyPhone()
        this.props.setPhone(this.state.phone)
      }else if(clickType===2) {
        this.loginByPwd()
      }else if(clickType===3) {
        this.fetchByCode()
      }else if(clickType===4) {
        this.findPassword()
      }
  }
  
  // 验证手机号状态
  async verifyPhone() {
    this.setState({
        isLoading: true
    })

    let res = await http.get('/checkuser', {
        phone: this.state.phone
    })

    if( res.code===1 ) {
        // 未注册状态逻辑
        console.log("未注册")
        this.setState({
            isLoading: false,
            isRegister: false
        })
        this.changeClickType(3)
    }else if( res.code===0 ) {
        // 已注册状态逻辑
        console.log("已经注册")
        this.setState({
            clickType: 2,
            isLoading: false,
            isRegister: true
        })
    }
    this.props.setPhone(this.state.phone)
  }
  // 密码登录
  async loginByPwd() {
    let {phone, password:pwd} = this.state
    this.setState({
        isLoading: true
    })
    let res = await http.post('/logicbypwd', { 
      phone,
      pwd
    })
    console.log(res)
    this.setState({
        isLoading: false
    })
    if(res.code===0) {
      // 登录成功操作
      console.log('登录成功')
      // 设置全局登录状态
      this.props.setLoginState(true)
      this.props.setUid(res.id)
      this.props.history.replace('/dynamic')
    }else if( res.code===1 ) {
      // 登录失败操作
      console.log('登录失败')
      Toast.fail(res.msg, 1)
    }
  }
  // 验证码登录 || 验证码注册
  async fetchByCode() {
    this.setState({
        isLoading: true
    })
    let res = await http.post('/logicbycode', {
        phone: this.state.phone,
        code: this.state.code
    })
    console.log(res)
    this.setState({
        isLoading: false
    })
    if( res.code===1 ) {
        Toast.fail(res.msg, 1)
    }
    if( res.statu === '0' ) {
      // 验证码登录成功逻辑
      console.log('登录成功')
      // 设置全局登录状态 
      this.props.setUid(res.id)
      this.props.setLoginState(true)
      this.props.history.replace('/dynamic')
    }else if( res.statu === '1' ){
      // 用户注册成功逻辑
      console.log('注册成功')
      this.props.setUid(res.id)
      this.props.history.replace('/account/addInfo')
    }
  }
  // 验证码找回密码
  async findPassword() {
    this.setState({
        isLoading:true
    })
    let res = await http.get('/findpwd', {code: this.state.code})
    this.setState({
        isLoading: false
    })
    if( res.code === 0 ) {
        this.setState({
            clickType: 2
        })
        this.props.history.push('/account/findpwd')
    }else if (res.code === 1) {
        Toast.fail(res.msg, 1)
    }else {
        Toast.fail('服务器出错', 1)
    }
  }
  // 改变clickType
  changeClickType = (type)=>{
    if( type===3 || type===4 ) {
        this.getCode()
    }
    this.setState({
        clickType: type
    })
  }
  // 验证码发送倒计时
  countdownFetchCode() {
    if (this.timer) return;
    let time = this.state.countdownTime
    this.setState({
      isFetchCode: true
    })
    this.timer = setInterval(()=> {
      this.setState({
          countdownTime: --this.state.countdownTime
      })
      if( this.state.countdownTime === 0 ) {
          clearInterval(this.timer)
          this.timer = null
          this.setState({
              isFetchCode: false,
              countdownTime: time
          })
      }
    },1000)
  }
  
  componentDidMount() {
      if (this.state.phone.length === 11) {
        this.setState({
            btnType: 'normal'
        })
      }
  }
  componentWillUnmount() {
      clearInterval(this.timer)
  }
  render() {
    return (
      <Container>
        <Logo />
        <PhoneInput handlePhoneState={this.handlePhoneState} phone={this.state.phone}></PhoneInput>
        {
            this.state.clickType===2
            ? (
                <>
                    <PasswordInput changePassword={this.changePassword}></PasswordInput>
                    <div className="forget-wrap">
                        <div 
                            className="text"
                            onClick={()=>{this.changeClickType(3)}}
                        >验证码登录</div>
                        <div 
                            className="text"
                            onClick={()=>{this.changeClickType(4)}}
                        >忘记密码</div>
                    </div>
                </>
            )
            : this.state.clickType===3 || this.state.clickType===4
            ? (
                <>
                    <CodeInput getValue={this.changeCode}></CodeInput>
                    <div className="code-wrap">
                        <div 
                            className={this.state.isFetchCode?'btn disabled':'btn'}
                            onClick={this.getCode}
                        >{this.state.isFetchCode ? `${this.state.countdownTime}s`:''}重新发送</div>
                        {
                            this.state.isRegister
                            ? <div 
                                className="text"
                                onClick={()=>{this.changeClickType(2)}}
                              >密码登录</div>
                            : ''
                        }
                    </div>
                </>
            )
            : ''
        }
        
        <FlexMidCen style={{marginTop: '0.4rem'}}>
            <Button
             type={this.state.btnType}
             isLoading={this.state.isLoading}
             handleClick={this.handleClick}
            >{this.state.clickType===2 ? '登录':'确定'}</Button>
        </FlexMidCen>
      </Container>
    )
  }
}

export default LoginContainer