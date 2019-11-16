import React, { Component } from 'react'
import Header from './Header'
import DynamicContent from './DynamicContent'
import { Container, CommentInput } from './styledComponents'
import CommentItem from './CommentItem'
import Tips from './Tips'
import Animate from 'components/high-order/Animate'
import http from 'utils/http'

import {
    formatNow2YMD
} from 'utils/date'

class Comment extends Component {
  constructor(props) {
      super(props)
      this.state = {
         dynamic: '',
         comments: [],
         pagenum:1,
         pagesize:10,
         commentsCount: 0,
         note: ''
      }
  }
  async componentDidMount() {
    let id=this.props.match.params.id
    let resDynamic = await http.get('/getdynamic', {
        id: id || '2'
    })
    let resComment = await http.get('/comment', {
        id: id || '2',
        pagenum: this.state.pagenum,
        pagesize: this.state.pagesize,
    })
    this.setState({
        dynamic: resDynamic,
        comments: resComment.comment.reverse(),
        commentsCount: resComment.count
    })
  }
  handleInput = (e) => {
      let note = e.target.value
      this.setState({
        note
      })
  }
  handleKeyDown = async (e) => {
      if( e.keyCode === 13 ) {
        if( this.state.note.trim()==='' ) return
        let res = await http.post('/setcomment', {
            id: this.props.match.params.id,
            note: this.state.note,
            time: formatNow2YMD(),
        })
        if( res ) {
            this.setState({
                comments: res.comment.reverse(),
                note: ''
            })
        }
      }
  }
  render() {
    return (
      <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
        <Header
          className={'around'}
          iconLeft={'back'}
          iconRight={'more'}
        >
            瞬间
        </Header>
        <Container>
            {
                this.state.dynamic!==''
                ? <DynamicContent dynamic={this.state.dynamic}></DynamicContent>
                : ''
            }
            {
                this.state.dynamic!==''
                ? <Tips></Tips>
                : ''
            }
            <div>
                {
                    this.state.comments.map((item, index)=>{
                        return <CommentItem key={index} {...item} index={index+1}></CommentItem>
                    })
                }
            </div>
        </Container>
        <CommentInput hasBorder={true}>
            <div>
                <input type="text" 
                    placeholder='请输入评论' 
                    value={this.state.note} 
                    onChange={this.handleInput} 
                    onKeyDown={this.handleKeyDown}/>
            </div>
        </CommentInput>
      </div>
    )
  }
}
export default Animate(Comment)