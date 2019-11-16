// 依赖
import React, { Component } from 'react'
// http模块
import http from 'utils/http'
// 相关组件
import { DatePicker, Picker, Toast} from 'antd-mobile'
import { FlexMidCen, Container } from '../_components/layout/'
import { 
    InputGroup,
    LineInput,
    Input,
    Text
} from '../_components/form-group/'
import Button from '../_components/button/Button'
// 页面动画
import Animate from 'components/high-order/Animate'
// 显示所有头像列表 组件
import ShowAllHead from './ShowAllHead'

import style from './style'
import logoImg from 'assets/images/account/logo.png'

const Customer = React.forwardRef( ({onClick, extra, children, title}, ref)=>(
    <LineInput hasBorder={true} padding={'0.1rem 0 0.13rem'} onClick={onClick}>
        <Text>{title}</Text>
        {children}
        <div style={{marginLeft: '0.15rem', fontSize: '0.14rem', lineHeight: '0.14rem'}} ref={ref}>{extra}</div>
    </LineInput>
) )

class AddInfoContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      isLoading: false,
      head: '',
      username: '',
      sex: [0],
      sign: '',
      birth: '',
      pwd: '',
      repwd: '',
      isShowAllHead: false
    }
    this.birthDom = React.createRef()
  }
  // 展示所有的头像列表
  showAllHead = () => {
      this.setState({
          isShowAllHead: true
      })
  }
  // 隐藏所有头像列表
  hiddenAllHead = () => {
      this.setState({
          isShowAllHead: false
      })
      return;
  }
  // 选择头像并设置
  setHead = (head) => {
    console.log(0)
    this.setState({
        head
    })
  }
  // 获取所有的受控组件值
  setText = (key, value)=>{
    this.setState({
        [key]: value
    })
  }
  // 密码 与  确认密码的比较
  equalPwd = () => { 
    if( this.state.pwd !== this.state.repwd ) {
        Toast.fail('密码不一致', 1, ()=>{
            this.setState({
                isLoading: false
            })
        })
    }
  }
  // 设置用户信息的请求
  putUserInfo = async ()=>{
    this.setState({
        isLoading: true
    })
    let {
        head,
        username,
        sex,
        sign,
        pwd,
    } = this.state
    let res = await http.post('/setinfo', {
        head,
        username,
        sex: sex[0],
        sign,
        pwd,
        birth: this.birthDom.current.innerText
    })
    this.setState({
        isLoading: false
    })
    if( res.code===0 ){
        this.props.history.replace('/dynamic')
        this.props.setLoginState(true)
    }else {
        Toast.fail(res.msg, 1)
    }
  }

  async componentDidMount() {
    let allHead = await http.get('/allhead')
    this.allHead = allHead.head
    this.setState({
        head: this.allHead[0]
    })
  }

  render() {
    return (
        <Container>
          <div style={style.title}>HI,请完善您的信息</div>
          <div style={style.tip}>填写正确信息有助于匹配，我们将保护好您的私人信息</div>
          <FlexMidCen style={{width: '100%'}}>
            <div style={style.headWrap}>
             <div style={style.headCover} onClick={this.showAllHead}></div>
             <img src={ this.state.head || logoImg} alt="" style={{width: '100%', height: '100%'}}/>
            </div>
          </FlexMidCen>
          
          <div className="info-wrap">
           <InputGroup 
            hasBorder={true}
            padding={'0.1rem 0 0.13rem'}
            title='昵称'
            type='text'
            value={this.state.username}
            getValue={this.setText.bind(this,'username')}
           ></InputGroup>
           
           <Picker
             data={[{label: '男', value: 0}, {label: '女', value: 1}]}
             value={this.state.sex}
             cols={1}
            onChange={this.setText.bind(this, 'sex')}
           >
             <Customer title='性别'></Customer>
           </Picker>
           
           <InputGroup 
            hasBorder={true}
            padding={'0.1rem 0 0.13rem'}
            title='签名'
            type='text'
            value={this.state.sign}
            getValue={this.setText.bind(this,'sign')}
           ></InputGroup>
           
           <DatePicker
             mode="date"
             title="选择生日"
             extra="Optional"
             value={this.state.birth}
             onChange={this.setText.bind(this, 'birth')}
           >
               <Customer title='生日' ref={this.birthDom}></Customer>
           </DatePicker>
   
           <InputGroup 
            hasBorder={true}
            padding={'0.1rem 0 0.13rem'}
            title='密码'
            type='password'
            value={this.state.pwd}
            getValue={this.setText.bind(this,'pwd')}
           ></InputGroup>
   
           <LineInput hasBorder={true} padding={'0.1rem 0 0.13rem'}>
             <Text>再次输入密码</Text>
             <Input 
               type='password'
               onChange={(e)=>{this.setText('repwd', e.target.value)}}
               onBlur={this.equalPwd}
             />
           </LineInput>
          </div>
   
          <FlexMidCen style={{marginTop: '0.44rem'}}>
           <Button 
            type={'normal'}
            handleClick={this.putUserInfo}
           >
             完成
           </Button>
          </FlexMidCen>
        {/* {
              this.state.isShowAllHead && this.allHead
              ? ( */}
                    <ShowAllHead 
                      animate="opacity"
                      hasWrap={true}
                      showAnimate={this.state.isShowAllHead}
                      heads={this.allHead}
                      hiddenAllHead={this.hiddenAllHead}
                      setHead={this.setHead}
                    />
                {/* )
              : ''
          } */}
        </Container>
      )
  }
}
export default Animate(AddInfoContainer)