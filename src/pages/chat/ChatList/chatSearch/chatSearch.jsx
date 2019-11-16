import React, { Component } from 'react'
import SearchFunction from 'components/search/SearchFunction'
import searchPic from 'assets/images/chat/图层 1@3x.png'

const parameter = {
    height: '.20rem',
    width: '100%',
    searchPic: searchPic,
    placeHolder: '搜索签名或聊天记录',
    paddingTop: '.1rem',
    paddingLeft:".1rem",
    picWidth:".12rem",
    picHeight:".12rem"
}
export default class chatSearch extends Component {
    handleClick(){
        console.log('这是search')
    }
    render() {
        return (
            <div style={{padding:'0 .2rem',"paddingBottom":'.1rem'}}>
                <SearchFunction searchStyle={parameter} methods={this.handleClick}></SearchFunction>
            </div>
        )
    }
}
