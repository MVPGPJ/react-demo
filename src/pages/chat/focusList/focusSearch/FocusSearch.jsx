import React, { Component } from 'react'
import SearchFunction from 'components/search/SearchFunction'
import searchPic from 'assets/images/focus/search@3x.png'

const parameter = {
    height: '.30rem',
    width: '100%',
    searchPic: searchPic,
    placeHolder: '搜索签名或备注',
    paddingTop: '.1rem',
    paddingLeft:".1rem",
    background:'#fff',
    border:'1px solid #ddd',
    picWidth:".2rem",
    picHeight:".16rem"
}
export default class FocusSearch extends Component {
    handleClick(){
        console.log('这是search')
    }
    render() {
        return (
            <div style={{padding:'0 .13rem 0 .11rem',"paddingBottom":'.1rem'}}>
                <SearchFunction searchStyle={parameter} methods={this.handleClick}></SearchFunction>
            </div>
        )
    }
}
