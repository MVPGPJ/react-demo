import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

import { H } from './HeaderStyle'

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.handleWay = this.handleWay.bind(this)
    }
    render() {
        return (
            <H>
                <div className="left" onClick={this.handleGoBack}>
                    <img src={require('assets/images/mine/back.png')} alt=""/>
                </div>
                {
                    this.props.TopMsg.center ? <div className="center">{this.props.TopMsg.center}</div> : ''
                }
                {
                    this.props.TopMsg.right ? <div className="right" onClick={this.handleWay}><span>{this.props.TopMsg.right}</span></div> : ''
                }
            </H>
        );
    }
    handleGoBack() {
        this.props.history.goBack()
    }
    handleWay() {
        this.props.TopMsg.Way()
    }
    
}

export default withRouter(Header);