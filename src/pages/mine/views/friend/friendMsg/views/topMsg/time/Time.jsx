import React, { Component } from 'react';

import { TimeStyle, TimeBorder } from './TimeStyle'

class Time extends Component {
    state = {
        xiuxiu: 0
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.friendData.sign){
           return {
            xiuxiu : nextProps.friendData.dynamicEnds.length
           }
        }
        return null;
    }
    
    render() {
        return (
            <TimeStyle>
                <TimeBorder hasBorder="true" className="day">
                    <span>{this.props.friendData.days}天，{this.state.xiuxiu}个瞬间</span>
                </TimeBorder>
            </TimeStyle>
        );
    }
}

export default Time;