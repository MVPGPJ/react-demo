import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLoginState } from 'pages/account/'

import { Header } from '../../header/'
import { Pass } from './PassWordStyle'
import http from 'utils/http'
import Animate from 'components/high-order/Animate'

// import store from 'store'
import { Toast, WingBlank } from 'antd-mobile';
function showToastNoMask(msg) {
    Toast.info(msg, 2, null, false);
}

class PassWord extends Component {
    state = {
        TopMsg: {
            // left: '222',
            center: '修改密码',
            right: '确认',
            Way: this.handleWay.bind(this)
        },
        pwd: '',
        Npwd: ''
    }
    render() {
        return (
            <>
                <Header TopMsg={this.state.TopMsg}></Header>
                <Pass>
                    <div className="hint">注意：修改密码后将会重新登入</div>
                    <input
                        className="pwd"
                        id="pwd"
                        type="password"
                        placeholder="请输入新密码"
                        value={this.state.pwd}
                        onChange={this.handlePwd.bind(this)}
                        />
                    <input
                        className="pwd"
                        id="Npwd"
                        type="password"
                        placeholder="再次输入新密码"
                        value={this.state.Npwd}
                        onChange={this.handleNPwd.bind(this)} 
                        />
                        <WingBlank></WingBlank>
                </Pass>
            </>
        );
    }
    handlePwd(e) {
        this.setState(
            {
                pwd: e.target.value
            }
        )
    }
    handleNPwd(e) {
        this.setState(
            {
                Npwd : e.target.value
            }
        )
    }
    async handleWay() {
        var reg = /^[0-9a-zA-Z]{6,20}$/;
        if (this.state.pwd === '') {
            showToastNoMask('请输入密码')
        } else {
            console.log(reg.test(this.state.pwd))
            if(!reg.test(this.state.pwd)) {
                showToastNoMask('请输入6位以上英文或数字')
            }else if (this.state.pwd === this.state.Npwd) {
                Toast.loading('Loading...');
                let result = await http.get('/modifyinfo',{pwd:this.state.pwd})
                Toast.hide();
                if (result.code === 1) {
                    showToastNoMask('密码修改失败,请稍后再试')
                }
                if (result.code === 0) {
                    showToastNoMask('密码修改成功,即将退出')
                    setTimeout(() => {
                        // store.set('account/isLogin','false')
                        // this.props.history.push('/')
                        this.props.loginOut()
                    }, 1200)
                }
            } else {
                showToastNoMask('两次密码不一致')
            }
        }
    }
}

const mapDispatch = (dispatch)=>({
    loginOut:()=> dispatch(setLoginState(false))
})
export default Animate(connect(null, mapDispatch)(PassWord));
