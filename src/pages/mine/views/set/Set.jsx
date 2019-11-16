import React, { Component } from 'react';

// 样式
import { SetStyle } from './SetStyle'
// 组件
import Signature from './signature/Signature'
import Birthday from './birthday/Birthday'
import PassWord from  './password/PassWord'
import Setting from './settingItem/Setting'

import {
    Route,
} from 'react-router-dom'

class Sett extends Component {
    render() {
        return (
            <SetStyle>
                {/* <Route path='/mine/setting' exact component={ Setting }></Route>
                <Route path='/mine/setting/signature'  component={ Signature }></Route>
                <Route path='/mine/setting/birthday' exact component={ Birthday }></Route>
                <Route path='/mine/setting/password' exact component={ PassWord }></Route> */}
            </SetStyle>
        );
    }
}

export default Sett;