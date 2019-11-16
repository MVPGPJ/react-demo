import React, { Component } from 'react'
import {
    ContentBox,
    ContentUser,
    ContentWrap,
    Address
} from './styledComponents'
import DynamicOpt from './DynamicOpt'

class DynamicContent extends Component {
  constructor(props) {
    super(props)
    this.state={
        mediaType: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
      let regImg = /&/
      if( regImg.test(props.image) ){
          return {
              medisType: 'image'
          }
      }else {
          return {
              medisType: 'audio'
          } 
      }
      return null
  }

  handleClick = ()=> {
    // 跳转到用户信息界面
    console.log('跳转到用户信息界面')
    // this.props.history.push('')
  }

  render() {
    let {
        username,
        head,
        note,
        address,
        publishTime,
        star,
        comments,
        id
    } = this.props.dynamic
    return (
      <ContentBox>
        <ContentUser>
            <div className="head" onClick={this.handleClick}>
                <img src={head} alt=""/>
            </div>
            <div>
                <div className="user-name" onClick={this.handleClick}>{username || ''}</div>
                <div className="time"> {publishTime || ''}</div>
            </div>
        </ContentUser>
        <ContentWrap>
            {
                this.mediaType==='image'
                ? <div className="img-wrap"></div>
                : this.mediaType==='video'
                ? <div className="video-wrap"></div>
                : this.mediaType==='audio'
                ? <div className="audio-wrap"></div>
                : ''
            }
            <div className="text-wrap">{note}</div>
            {
                address 
                ? <Address>{address}</Address>
                : ''
            }
        </ContentWrap>
        <DynamicOpt id={id} star={star} comments={comments}></DynamicOpt>
      </ContentBox>
    )
  }
}
export default DynamicContent