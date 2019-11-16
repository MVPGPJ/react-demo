import React, { Component } from 'react';

import { BStyle } from './BStyle'
import Item from '../item/Item'

class Bottom extends Component {
    render() {
        // console.log(this.props)
        return (
            <BStyle>
                <Item myselfData={this.props.myselfData}></Item>
            </BStyle>
        );
    }
}

export default Bottom;