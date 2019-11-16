import React from 'react'

import StyleTextItem from './StyleTextItem'



/**
 *   测试题每个item组件
 * 
 *   2019-08-06
 */
export default function TextItem(props) {
    return (
        <>
            {
                props.data.map((value, index) => {
                    return <StyleTextItem key={index} data={value}>
                        <div onClick={(e) => props.handleClick(index)}>
                            {value.isTitle ? <h3>{value.isTitle}</h3> : null}
                            <img src={value.imgUrl} alt="" />
                            <div className="content-top">
                                <p className="title">
                                    <img src={value.PsdImg} alt="" className="img-psd" />
                                    <span>{value.testTitle}</span>
                                </p>
                                <p>{value.isTitled}</p>
                            </div>
                            {value.isGoTest ? <div className="isGOText">
                                <span>开始测试</span>
                            </div> : null}
                        </div>
                    </StyleTextItem>
                })
            }
        </>
    )
}
