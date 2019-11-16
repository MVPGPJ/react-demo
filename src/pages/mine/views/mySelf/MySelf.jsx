import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List } from 'immutable'
import BScroll from 'better-scroll';
import store from 'store'

import { Mine } from './MySelfStyle'
import { TopMsg } from './topMsg/'
import { Bottom as BottomMsg } from './bottomMsg'
import { loadMyselfDataAsync } from '../../actionCreator'





const mapState = state => ({
    myselfData: state.getIn(['mine', 'myselfData'])
})

const mapDispatch = (dispatch) => ({
    loadData() {
        dispatch(loadMyselfDataAsync())
    }
})

class MySelf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaleHegiht: 0,
            myselfData: List([])
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.myselfData){
            let sign = nextProps.myselfData.toJS().sign
            store.set('mine/sign', sign)
        }
        return null;
    }
    render() {
        return (
            <Mine className="bScroll">
                <div>
                    <TopMsg myselfData={this.props.myselfData.toJS()} scaleHegiht={this.state.scaleHegiht > 0 ? this.state.scaleHegiht : 0}></TopMsg>
                    <BottomMsg myselfData={this.props.myselfData.toJS()}></BottomMsg>
                </div>
            </Mine>
        );
    }
    async componentDidMount() {
        await this.props.loadData()
        let bs = new BScroll('.bScroll', {
            scrollY: true,
            click: true,
            probeType: 3
        })
        bs.on('scroll', (e) => this.onScroll(e))
    }

    onScroll(e) {
        this.setState({
            scaleHegiht: this.scaleHegiht = e.y
        })
    }
}

export default connect(mapState, mapDispatch)(withRouter(MySelf));