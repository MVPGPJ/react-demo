import { connect } from 'react-redux'
import React, { Component } from 'react'

import MainUI from './mainUI'

import { getFocus, value } from '../../actionCreator'

const mapStateToProps = state => {
    return {
        focus: state.getIn(['publish', 'focus']),
        value: state.getIn(['publish', 'value'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetFocus (data) {
            dispatch(getFocus(data))
        },
        Value (data) {
            dispatch(value(data))
        }
    }
}

class MainContainer extends Component {

    constructor() {
        super()
        this.inputRef = React.createRef()
        this.valueChange = this.valueChange.bind(this)
        this.Click = this.Click.bind(this)
        this.Blur = this.Blur.bind(this)
    }

    render () {
        return (
            <MainUI 
            focus = { this.inputRef } 
            value = { this.props.value } 
            valueChange = { this.valueChange }
            Click = { this.Click }
            Blur = { this.Blur }
            ></MainUI>
        )
    }
    //输入时候出发的事件
    valueChange (e) {
        this.props.Value(e.target.value)
    }

    //点击输入框想输入的时候触发的事件
    Click() {
        this.props.GetFocus(false)
    }

    //失去焦点的时候发生的事件
    Blur() {
        this.props.GetFocus(true)
    }


    componentDidMount () {
        //刚加载让输入框获得焦点
        // this.inputRef.current.readonly = "asd"
        // this.inputRef.current.focus();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)