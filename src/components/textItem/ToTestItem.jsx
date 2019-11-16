import React from 'react'

import StyleToTestItem from './StyleToTestItem'


/**
 *  测一测界面组件每个item组件 
 * 
 *  2019-08-08
 */

export default function ToTestItem(props) {
    return (
        <>
            {
                props.questionsList.map((value, index) => {
                    return <StyleToTestItem key={index}>
                        <div onClick={() => props.clickHandle(index)}>
                            <img src={value.bannerImg} alt="" />
                            <div className="top-content">
                                <div className="test-title">
                                    <p>{value.testTitle}</p>
                                    <span><i>{value.testPeople} </i>人测过</span>
                                </div>
                                <button>分享</button>
                                <div className="isTest">
                                    <span>{value.isTest ? '已测试' : '未测试'}</span>
                                </div>
                            </div>
                        </div>
                    </StyleToTestItem>
                })
            }
        </>
    )
}

