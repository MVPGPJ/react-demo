import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from 'store'
import http from 'utils/http'
import { Toast, WingBlank } from 'antd-mobile';

import { Header } from '../../header/'
import { Sign } from './SignatureStyle'
import Animate from 'components/high-order/Animate'


const mapState = state => ({
    myselfData: state.getIn(['mine', 'myselfData'])
})

function showToastNoMask(msg) {
    Toast.info(msg, 2, null, false);
}

class Signature extends Component {
    state = {
        TopMsg: {
            // left: '222',
            center: '更改签名',
            right: '确认',
            Way: this.handleWay.bind(this)
        },
        value: this.props.myselfData.toJS().sign ? this.props.myselfData.toJS().sign : store.get('mine/sign')
    }
    render() {
        return (
            <>
                <Header TopMsg={this.state.TopMsg}></Header>
                <Sign>
                    <textarea value={this.state.value} onChange={this.handleChange.bind(this)}>
                    </textarea>
                </Sign>
                <WingBlank></WingBlank>
            </>
        );
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    async handleWay() {
        let text = document.querySelector('textarea')
        let msg = {
            sign: text.value
        }
        
        if (store.get('mine/sign') !== text.value) {
            Toast.loading('Loading...');
            let result = await http.get('/modifyinfo', msg)
            Toast.hide();
            if (result.code === 1) {
                showToastNoMask('修改失败,请稍后再试')
            }
            if (result.code === 0) {
                showToastNoMask('修改成功,即将返回')
                setTimeout(() => {
                    // this.props.history.push('/mine')
                    this.props.history.goBack()
                }, 1000)
            }
        } else{
            showToastNoMask('签名没有修改，亲')
        }
    }
}

export default Animate(connect(mapState)(Signature));

