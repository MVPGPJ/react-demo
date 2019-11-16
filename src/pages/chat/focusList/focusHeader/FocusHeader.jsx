import React, { Component } from 'react'
import StyledFocusHeader from './StyledFocusHeader'

export default class FocusHeader extends Component {
    render() {
        return (
            <StyledFocusHeader>
                <i onClick={this.handleBackClick.bind(this)}></i>
                <div><span>关注列表</span></div>
            </StyledFocusHeader>
        )
    }
    handleBackClick(){
        this.props.history.goBack()
    }
}
