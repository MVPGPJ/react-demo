import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    HashRouter as Router
  } from 'react-router-dom'
import { createSocket } from './actionCreator'
const mapState = (state) => {
    // console.log(state, "------------------")
    return {
        uid: state.getIn(['account', 'uid']),
    }

}
const mapDispatch = (dispatch) => ({
    createSocket: (from) => {
        dispatch(createSocket(from))
    }
})

class SocketConnection extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
            </Router>
        )
    }
    componentDidMount() {
        this.props.createSocket(this.props.uid)
    }
}



export default connect(mapState, mapDispatch)(SocketConnection)