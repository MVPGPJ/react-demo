import React, { Component } from 'react'
import Header from '../dynamic-details/Header'
import Animate from 'components/high-order/Animate'
import Question from './Question'
import {
    SoulTestWrap
} from './styledComponents'
import http from 'utils/http'

class SoulTest extends Component {
  constructor(props) {
      super(props)
      this.state={
          questionList: [],
          answerList: []
      }
  }
  async componentDidMount() {
    let res = await http.get('/dymanic', {
        type: 'soultest'
    })
    this.setState({
        questionList: res.questions
    })
  }

  getAnswer = (answers)=>{
    this.setState({
        answerList: answers
    })
  }

  render() {
    return (
      <SoulTestWrap>
        <Header
          className={'around'}
          iconLeft={'back'}
          rightContent={'Q&A'}
        >
            灵魂测试
        </Header>
        <div style={{backgroundColor: '#FAFAFA', flex: 1, overflow:'auto',}}>
            <Question questionList={this.state.questionList} getAnswer={this.getAnswer}></Question>
        </div>
      </SoulTestWrap>
    )
  }
}
export default Animate(SoulTest)