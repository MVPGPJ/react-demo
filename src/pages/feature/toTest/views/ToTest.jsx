import React, { Component } from 'react'

import { ToTestItem } from 'components/index'

import { withRouter } from 'react-router-dom'

import StyleToTest from './StyleToTest'

import bannerImg1 from 'assets/images/toTest/banner1@3x.png'
import bannerImg2 from 'assets/images/toTest/banner2@3x.png'
import bannerImg3 from 'assets/images/toTest/banner3@3x.png'
import bannerImg4 from 'assets/images/toTest/banner4@3x.png'
/*4
 *   测一测展示列表容器组件
 * 
 *   2019-08-07
 */

class ToTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionsList: [
                {
                    bannerImg: bannerImg1,
                    testTitle: '测测你左右脑各住着什么',
                    testPeople: '43533',
                    isTest: false
                },
                {
                    bannerImg: bannerImg2,
                    testTitle: '测测你是迪士尼里的哪位公主殿下',
                    testPeople: '546',
                    isTest: false
                },
                {
                    bannerImg: bannerImg3,
                    testTitle: '测测养你需要多少钱',
                    testPeople: '12345',
                    isTest: false
                },
                {
                    bannerImg: bannerImg4,
                    testTitle: '我的社交引力场',
                    testPeople: '12345',
                    isTest: false
                },
            ]
        }
    }


    clickHandle(value){
        console.log(123432)
        this.props.history.push(`/testself/${value}`)
    }

    render() {
        return (
            <StyleToTest>
                <ToTestItem questionsList={this.state.questionsList} clickHandle={this.clickHandle.bind(this)}></ToTestItem>
            </StyleToTest>
        )
    }
}


export default withRouter(ToTest)