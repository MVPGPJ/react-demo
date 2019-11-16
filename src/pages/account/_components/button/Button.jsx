import React, { Component } from 'react'
import { StyledButton, Loading } from './styleButton'

/**
 * @param type    {类型};
 * @param isLoading   {是否loadding};
 * @function handleClick {执行程序}
 */
class Button extends Component {
  static defaultProps = {
    type: 'normal',
    isLoading: false
  }
  
  handleClick = (e) => {
    if(this.props.type==='normal') {
        this.props.handleClick(e)
    }
  }

  render() {
    return (
        <StyledButton type={this.props.type} onClick={this.handleClick}>
            {
                this.props.isLoading
                ? <Loading></Loading>
                : this.props.children
            }
        </StyledButton>
    )
  }
}
export default Button