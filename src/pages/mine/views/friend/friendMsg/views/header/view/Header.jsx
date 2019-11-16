import React, { Component } from 'react';

import { HeaderStyle } from './HeaderStyle'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class Header extends Component {
    constructor(props) {
        super(props)
        this.handleBack = this.handleBack.bind(this)
        this.handleMore = this.handleMore.bind(this)
    }
    render() {
        return (
            <HeaderStyle>
                <div className="back" onClick={this.handleBack}>
                    <img src={require('assets/images/mine/back.png')} alt=""/>
                </div>
                <div className="more" onClick={this.handleMore}>
                    <img src={require('assets/images/mine/more.png')} alt=""/>
                </div>
            </HeaderStyle>
        );
    }
    handleBack() {
        this.props.history.goBack()
    }
    handleMore() {
        
    }


}
export default withRouter(Header);
