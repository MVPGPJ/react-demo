
import React, { Component } from 'react'
import { Tabs, WhiteSpace, Toast } from 'antd-mobile';
import FocusHeader from './focusHeader/FocusHeader'
import FocusNav from './focusNav/FocusNav'
import FocusItems from './focusItems/FocusList'
import { asyncGetAll, loadTestData, asyncGetMyFocusListData, asyncGetFocusMeList } from './actionCreator'
import { connect } from 'react-redux'
import FocusSearch from './focusSearch/FocusSearch'
import StyledFocusListContainer from './StylesFocusListContainer'
import Animate from 'components/high-order/Animate'

const mapState = (state) => {
  return {
    myFocusList: state.getIn(['focus', 'myFocusList']),
    focusMeList: state.getIn(['focus', 'focusMeList'])
  }
}
const mapDispatch = (dispatch) => ({
  loadData: () => {
    dispatch(asyncGetAll())
  },
  getMyFocus: () => {
    dispatch(asyncGetMyFocusListData())
  },
  getFocusMe: () => {
    dispatch(asyncGetFocusMeList());
  }
})
class FocusListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      // myFocusList: this.props.myFocusList,
      // focusMeList: this.props.focusMeList,
      type: 0
    }
  }
  handleTabChange(type) {
    this.setState({
      type: type,
    })
    switch (type) {
      case 0: {
        this.props.getMyFocus();
        break;
      }
      case 1: {
        this.props.getFocusMe();
        break;
      }
      default:
        break;
    }
  }
  render() {
    return (
      <StyledFocusListContainer>
        <FocusHeader
          {...this.props}
        ></FocusHeader>
        <FocusNav
          myFocusCount={this.props.myFocusList && this.props.myFocusList.length || 0}
          focusMeCount={this.props.focusMeList && this.props.focusMeList.length || 0}
          onTabChange={this.handleTabChange.bind(this)}
        >

        </FocusNav>
        <FocusSearch></FocusSearch>
        <FocusItems
          list={this.state.list}
          type={this.state.type}
          {...this.props}>
        </FocusItems>
      </StyledFocusListContainer>
    )
  }
  async componentDidMount() {
    this.props.loadData();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps && nextProps.focusMeList && nextProps.focusMeList.length > 0) {
      nextProps.focusMeList.map(item => {
        //找到我关注的列表中与关注我的列表中相同的id，状态设置成‘已关注’
        const find = nextProps.myFocusList.find((elem) => { return item.id === elem.id })
        if (find == undefined) {
          item.status = 1 //未关注
        } else {
          item.status = 2 //已关注
        }
      })
      return {
        list: prevState.type === 0 ? nextProps.myFocusList : prevState.type === 1 ? nextProps.focusMeList : []
        // myFocusList: nextProps.myFocusList,
        // focusMeList: nextProps.focusMeList
      }
    }
    return null
  }

}

export default connect(mapState, mapDispatch)(Animate(FocusListContainer));