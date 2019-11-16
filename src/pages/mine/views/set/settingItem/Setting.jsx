import React, { Component } from 'react';

import { Header } from '../../header/'
import SettingItem from './SettingItem'
import { Set } from './SettingItemStyle' 
import Animate from 'components/high-order/Animate'

class Sett extends Component {
    state={
        TopMsg: {
            // left: '222',
            center: '设置',
            // right: '666'
        },
        SetItem: [
            {
                icon: require('assets/images/mine/signature.png'),
                name: '更改个性签名'
            },
            {
                icon: require('assets/images/mine/birthday.png'),
                name: '更改生日'
            },
            {
                icon: require('assets/images/mine/password.png'),
                name: '修改密码'
            }
        ]
    }
    render() {
        return (
            <Set>
                <Header TopMsg={this.state.TopMsg}></Header>
                <SettingItem SetItem={this.state.SetItem}> 
                </SettingItem>
            </Set>
        );
    }
}

export default Animate(Sett);