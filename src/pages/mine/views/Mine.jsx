import React, { Component } from 'react';

// 页面组件
import MySelf from './mySelf/MySelf';
import Sett from './set/Set'
import Friend from './friend/Friend'
import Gold from './gold/gold'

import {
    Route,
} from 'react-router-dom'

class Mine extends Component {
    render() {
        return (
            <>
                <Route path='/mine' exact component={ MySelf }></Route>
                {/* <Route path='/mine/gold' component={ Gold }></Route>
                <Route path="/mine/friend" component={ Friend }></Route>
                <Route path='/mine/setting' component={ Sett }></Route> */}
            </>
        );
    }
}

export default Mine