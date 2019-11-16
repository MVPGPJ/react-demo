import React, { Component } from 'react'
import {
    FormContainer,
    TitleGroup,
    InputGroup,
    Arrow
} from '../_components/form-group/'

class PhoneInput extends Component {
  constructor(props) {
    super(props)
    this.state={
        phone: this.props.phone
    }
  }
  getValue = phone=> {
    let reg= /^[0-9]{0,11}$/
    if( reg.test(phone) ) {
        this.setState({
            phone
        })
        if( phone.length>=11 ) {
            this.props.handlePhoneState(phone, true)
        }else {
            this.props.handlePhoneState(phone, false)
        }
    }
  }
  render() {
    return (
        <FormContainer>
            <TitleGroup
              type='phone'
              title='手机'
            />
            <InputGroup
              hasBorder={true}
              placeholder={'在这里输入手机号'}
              value={this.state.phone}
              type={'number'}
              getValue={this.getValue}
            >
                <Arrow>+86</Arrow>
            </InputGroup>
        </FormContainer>
    )
  }
}

export default PhoneInput