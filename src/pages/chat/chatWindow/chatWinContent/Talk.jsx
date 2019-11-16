import React, { Component } from 'react'
import StyledTalk from './StyledTalk'

import photo1 from 'assets/images/headPhoto/photo1.png'
import photo2 from 'assets/images/headPhoto/photo2.png'

export default class Talk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo1: photo1,
            photo2: photo2
        }
    }
    render() {
        return (
            <StyledTalk direction={this.props.direction}>
                <div className={this.props.direction}>
                    <img src={this.props.direction === "left" ? this.state.photo1 : this.state.photo2} alt="" />
                    <div>
                        <span>{this.props.msg}</span>
                    </div>
                </div>
            </StyledTalk>
        )
    }
}
