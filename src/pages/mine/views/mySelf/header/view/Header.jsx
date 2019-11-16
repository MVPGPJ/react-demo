import React, { Component } from 'react';

// import HeaderUI from './HeaderUI'
import { HeaderStyle, From, GoldBorder, FirendsBorder, SettingBorder, FromBorder } from './HeaderStyle'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List } from 'immutable'
import { loadGOLDAsync } from '../../../../actionCreator'

const mapState = state => ({
    gold: state.getIn(['mine', 'gold'])
})

const mapDispatch = (dispatch) => ({
    loadData() {
      dispatch(loadGOLDAsync())
    }
})
class Header extends Component {
    constructor(props) {
        super(props)
        this.handleSetting = this.handleSetting.bind(this)
        this.handleFriend = this.handleFriend.bind(this)
        this.handleGold = this.handleGold.bind(this)
    }
    state = {
        gold: List([])
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.gold){
           return {
            gold : nextProps.gold
           }
        }
        return null;
    }
    
    render() {
        return (
            <>
                <HeaderStyle className=''>
                    <From className='from'>
                        <FromBorder hasBorder="true" className="fromborder">
                            <img src={require('assets/images/mine/from.png')} alt="" />
                            <p>{this.props.myselfData.starname}</p>
                        </FromBorder>
                    </From>
                    <GoldBorder hasBorder="true" className='gold' onClick={this.handleGold}>
                        <img src={require('assets/images/mine/gold.png')} alt="" />
                        <p>{this.props.gold.toJS().gold}</p>
                    </GoldBorder>
                    <FirendsBorder hasBorder="true" className='firends' onClick={this.handleFriend}>
                        <img src={require('assets/images/mine/firend.png')} alt="" />
                        <p>加好友</p>
                    </FirendsBorder>
                    <SettingBorder hasBorder="true" className='setting' onClick={this.handleSetting}>
                        <img src={require('assets/images/mine/setting.png')} alt="" />
                    </SettingBorder>
                </HeaderStyle>
            </>
        );
    }
    componentDidMount() {
        this.props.loadData()
    }
    handleSetting() {
        this.props.history.push('/setting')
    }
    handleFriend() {
        this.props.history.push('/friend')
    }
    handleGold() {
        this.props.history.push('/gold')
    }
    
}
export default connect(mapState,mapDispatch)(withRouter(Header));
