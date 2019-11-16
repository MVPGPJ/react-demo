import React, { Component } from 'react';

import { TimeStyle, TimeBorder } from './TimeStyle'

class Time extends Component {
    state = {
        xiuxiu: 0
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.myselfData.sign){
           return {
            xiuxiu : nextProps.myselfData.dynamicEnds.length
           }
        }
        return null;
    }
    
    render() {
        return (
            <TimeStyle>
                <TimeBorder hasBorder="true" className="day">
                    <span>{this.props.myselfData.days}天，{this.state.xiuxiu}个瞬间</span>
                </TimeBorder>
            </TimeStyle>
        );
    }
}

export default Time;