import React, { Component } from 'react'

import { TextItem } from 'components/index'

import StyleTestContainer from './StyleTestContentContainer'

import { withRouter } from 'react-router-dom'
 
import TextImg1 from 'assets/images/soulText/banner1@3x.png'
import TextImg2 from 'assets/images/soulText/banner2@3x.png'
import TextImg3 from 'assets/images/soulText/banner3@3x.png'
import TextImg4 from 'assets/images/soulText/banner4@3x.png'
import PsdImg from 'assets/images/soulText/password1@3x.png'

/**
 *   测试题列表的容器组件
 * 
 *   2019-08-06
 */

class TestContentContainer extends Component {
    constructor(props){
        super(props)
        // 渲染数据
        this.state = {
            renderData: [
                {
                    // isTitle: '你好宝宝',
                    imgUrl: TextImg1,
                    PsdImg: PsdImg,
                    // testTitle: '更多测试',
                    // isTitled: '尚未完成测试',
                    isGoTest: false
                },
                {
                    isTitle: '趣味测试',
                    imgUrl: TextImg2,
                    PsdImg: PsdImg,
                    testTitle: '更多测试',
                    isTitled: '尚未完成测试',
                    isGoTest: true
                },
                {
                    isTitle: '人格测试',
                    imgUrl: TextImg3,
                    PsdImg: PsdImg,
                    testTitle: '深层灵魂测试题',
                    isTitled: '共32题，请先完成上一步测试',
                    isGoTest: false,
                    position: true
                },
                {
                    // isTitle: '你好宝宝',
                    imgUrl: TextImg4,
                    PsdImg: PsdImg,
                    testTitle: '进阶灵魂测试题',
                    isTitled: '尚未完成测试',
                    isGoTest: true
                },
            ]
        }
    }

    handleClick(value){
        console.log(this.props)
        this.props.history.push(`/soulTests/${value}`)
    }

    render() {
        return (
            <StyleTestContainer>
                <TextItem data={this.state.renderData} handleClick={this.handleClick.bind(this)}></TextItem>
            </StyleTestContainer>
        )
    }
}

export default withRouter(TestContentContainer)
