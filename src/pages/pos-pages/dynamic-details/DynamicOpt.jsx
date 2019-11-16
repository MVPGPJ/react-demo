import React, { Component } from 'react'
import http from 'utils/http'
import {
    IconOpt,
    OptWrap,
    OptText
} from './styledComponents'

/**
 * @param id {获取需要点赞的动态id}
 */
class DynamicOpt extends Component {
  constructor(props) {
      super(props)
      this.state={
        comments: this.props.comments,
        star: this.props.star
      }
  }

  handleStar = async ()=> {
    console.log(this.props.id)
    let res = await http.get('/star', {
        id: this.props.id
    })
    this.setState({
        star: res.star
    })
  }
  
  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <div style={{display: 'flex'}}>
            <OptWrap>
                <IconOpt type={this.state.star>0 ? 'redstart' : 'start'} onClick={this.handleStar}></IconOpt>
                <OptText>{this.state.star || 0}</OptText>
            </OptWrap>
            <OptWrap>
                <IconOpt type='comment'></IconOpt>
                <OptText>{this.state.comments || 0}</OptText>
            </OptWrap>
            <OptWrap>
                <IconOpt type='collect'></IconOpt>
            </OptWrap>
        </div>
      </div>
    )
  }
}
export default DynamicOpt