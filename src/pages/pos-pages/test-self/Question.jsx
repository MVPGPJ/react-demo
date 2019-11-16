import React, { Component } from 'react'
import {
    Wrap,
    Ques,
    AnswerWrap,
    AnswerItem,
    Count
} from './styledComponents'

class Question extends Component {
  constructor(props) {
    super(props)
    this.answerList = []
    this.state={
        currentQus: 0,
        isFinished: false
    }
  }

  getAnswer= (value) => {
    this.answerList[this.state.currentQus] = value

    if(this.state.currentQus < (this.props.questionList.length - 1)) {
        this.setState({
            currentQus: this.state.currentQus+1
        })
    }else if( this.state.currentQus === this.props.questionList.length - 1 ){
        this.setState({
            isFinished: true
        }, ()=>{
            this.props.getAnswer(this.answerList)
        })
    }
  }

  render() {
    let objCurQ = 
        this.props.questionList.length > 0 
        ? this.props.questionList[this.state.currentQus] 
        : ''
    return (
      <>
        {   
            this.state.isFinished
            ? <Wrap style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.3rem'}}><div>测试完毕</div></Wrap>
            : objCurQ 
            ? (
                <Wrap>
                    <Ques>{objCurQ.question}</Ques>
                    <AnswerWrap>
                        {
                            objCurQ.answer.map((item, index)=>{
                                return (
                                    <AnswerItem 
                                      key={item} 
                                      onClick={this.getAnswer.bind(this, item)}
                                    >{index+1}. {item}</AnswerItem>
                                )
                            })
                        }
                    </AnswerWrap>
                    <Count>{this.state.currentQus+1}/{this.props.questionList.length}</Count>
                </Wrap>
            )
            : ''
        }
      </>
    )
  }
}
export default Question