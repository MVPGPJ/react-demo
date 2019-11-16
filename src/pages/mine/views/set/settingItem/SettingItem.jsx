import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'

import { Item, Exit } from './SettingItemStyle'
import { setLoginState } from 'pages/account/'

class SettingItem extends Component {
    render() {
        return (
            <>
                {
                    this.props.SetItem && this.props.SetItem.map(item => {
                        return <Item key={item.name} onClick={this.handleClick.bind(this,item)}>
                            <div className="iconType">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="signature">
                                <span>
                                    {item.name}
                                </span>
                            </div>
                            <div className="jiantou">
                                <img src={require('assets/images/mine/jiantou.png')} alt="" />
                            </div>
                        </Item>
                    })
                }
                <Exit>
                    <div onClick={this.handleExit.bind(this)}>退出登录</div>
                </Exit>
            </>
        );
    }
    handleClick(item) {
        if(item.name === '更改个性签名'){
            this.props.history.push('/setting/signature')
        }
        if(item.name === '更改生日'){
            this.props.history.push('/setting/birthday')
        }
        if(item.name === '修改密码'){
            this.props.history.push('/setting/password')
        }
    }
    handleExit() {
        this.props.loginOut()
    }
}

const mapDispatch = (dispatch)=>({
    loginOut:()=> dispatch(setLoginState(false))
})

export default connect(null, mapDispatch)(withRouter(SettingItem));