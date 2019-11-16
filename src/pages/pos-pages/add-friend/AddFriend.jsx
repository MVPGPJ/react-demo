import React, { Component } from 'react'
import Header from '../dynamic-details/Header'
import Animate from 'components/high-order/Animate'
import Search from 'components/search/SearchFunction'
import searchPic from 'assets/images/search/button.png'
const parameter = {
    height: '0.3rem',
    width: '2.97rem',
    searchPic: searchPic,
    placeHolder: '美食',
    cancelButton: '取消',
    paddingTop: '.49rem',
    border: '1px solid red',
    borderRadius: '5px'
  }
class AddFriend extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height:'100%'}}>
        <Header
          className={'around'}
          iconLeft={'back'}
        >添加好友</Header>
        <div style={{backgroundColor: '#F7F7F7', flex: '1', flexShrink: '0', overflow: 'auto'}}>
            <Search 
              searchStyle={parameter} 
              methods={this.Alert}>
            </Search>
        </div>
      </div>
    )
  }
}
export default Animate(AddFriend)