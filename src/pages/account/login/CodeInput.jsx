import React, { Component } from 'react'
import {
    CodeGroup,
    FormContainer,
    TitleGroup
} from '../_components/form-group/'

class CodeInput extends Component {
  constructor(props) {
    super(props)
    this.state={
        code: ''
    }
  }

  getValue = value=> {
      this.setState({
          code: value
      })
      this.props.getValue(value)
  }
  
  render() {
    return (
      <FormContainer>
          <TitleGroup 
            title='验证码'
            type='code'
          />
          <CodeGroup
            type={'box'}
            length={4}
            getValue={this.getValue}
          />
      </FormContainer>
    )
  }
}
export default CodeInput