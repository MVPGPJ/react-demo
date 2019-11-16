import React, { Component } from 'react'
import FocusItemUI from './FocusItemUI'
import http from 'utils/http'
import { asyncGetMyFocusListData, asyncGetFocusMeList } from '../actionCreator'
import { connect } from 'react-redux'
import {Toast} from 'antd-mobile'

const mapDispatch = (dispatch) => ({
    getMyFocus: () => {
        dispatch(asyncGetMyFocusListData())
    },
    getFocusMe: () => {
        dispatch(asyncGetFocusMeList())
    }
})

class FocusItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 0
        }
    }
    render() {
        console.log(this.props.status)
        return (
            <FocusItemUI
                data={this.props}
                type={this.props.type}
                content={this.state.type == 0 ? "取消关注" : this.state.type == 1 ? "关注" : "已关注"}
                btnClick={this.handleBtnClick}
            ></FocusItemUI>
        )
    }
    static getDerivedStateFromProps(nextProps, preState) {
        if (nextProps) {
            return {
                type: nextProps.type
            }
        }
        return null;
    }
    async handleBtnClick(type, id) {
        //关注事件
        if (type === 1) {
            const focus = await http.get('/focus', { id })
            if (focus.code == 0) {
                this.data.getMyFocus()
            } else {

            }
        }
        //取消关注事件
        if (type === 0) {
            const cancelFocus = await http.get('/cancelfocus', { id })
            if (cancelFocus.code === 0) {
                this.data.getMyFocus();
                this.data.getFocusMe();
            } else {
                Toast.info('关注失败');
            }
        }
    }
}
export default connect(null, mapDispatch)(FocusItem)