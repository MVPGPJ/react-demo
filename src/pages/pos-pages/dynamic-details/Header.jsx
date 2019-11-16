import React, { Component } from 'react'
import {
    LineTbar,
    Icon
} from './styledComponents'
import {
    withRouter
} from 'react-router-dom'

import './Header.css'

class Header extends Component {
  static defaultProps = {
      onLeftClick: (props) => {props.history.goBack()}
  }
  onRightClick = () => {}
  render() {
    const {
        className,
        children,
        iconLeft,
        iconRight,
        onLeftClick,
        onRightClick,
        leftContent,
        rightContent
    } = this.props
    return (
        <LineTbar hasBorder={true} className={className}>
            <div
            role="button"
            style={{position: 'absolute', left: '0.1rem'}}
            onClick={onLeftClick.bind(this, this.props)}
            // onClick={(props)=>{console.log(props)}}
            >
            {iconLeft ? (
            // tslint:disable-next-line:jsx-no-multiline-js
                <Icon className={iconLeft} aria-hidden="true"></Icon>
            ) : null}
            {leftContent}
            </div>
            <div className='title'>{children}</div>
            <div
            role="button"
            style={{position: 'absolute', right: '0.1rem'}}
            onClick={onRightClick}
            >
            {iconRight ? (
            // tslint:disable-next-line:jsx-no-multiline-js
                <Icon className={iconRight} aria-hidden="true"></Icon>
            ) : null}
            {rightContent}
            </div>
        </LineTbar>
    )
  }
}
export default withRouter(Header)
