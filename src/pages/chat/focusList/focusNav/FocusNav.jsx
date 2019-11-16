import React, { Component } from 'react'
import StyledFocusNav from './StyledFocusNav'
export default class FocusNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 0
        }
    }
    handleTabClick(type) {
        this.setState({
            activeId: type
        })
        this.props.onTabChange(type)
    }
    render() {
        return (
            <StyledFocusNav>
                <div onClick={this.handleTabClick.bind(this, 0)}>
                    <strong>{this.props.myFocusCount}</strong>
                    <i>
                        <span className={this.state.activeId === 0 ? "active" : ""}>我关注的</span>
                    </i>
                </div>
                <div onClick={this.handleTabClick.bind(this, 1)}>
                    <strong>{this.props.focusMeCount}</strong>
                    <i>
                        <span className={this.state.activeId == 1 ? "active" : ""}> 关注我的</span>
                    </i>
                </div>
            </StyledFocusNav>
        )
    }
}

