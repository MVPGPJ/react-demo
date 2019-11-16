import React from 'react'
import { Range } from 'antd-mobile'

import StyleAlert from './StyleAlert'

/**
 *   公共弹出框样式组件
 * 
 *   2019-08-08
*/

export default function Alert(props) {
    return (
        <StyleAlert isClickFilter={props.isClickFilterValue}  onClick={e => props.isHidden()}>
            <div className='full' >
            <h3 onClick={e => props.isClickFilter(e)}>筛选</h3>
            <div className="sexSelect">
                <h4>作用于所有匹配</h4>
                <ul>
                    {props.sex.map((value, index) => {
                        return <li key={index} className={value.isClick ? "active" : ''} onClick={e => props.getFilterData('sex', value.value,e)}>{value.value}</li>
                    })}
                </ul>
            </div>

            <div className="ageSelect">
                <h4>仅作用于星球推荐</h4>
                <ul>
                    <li>{props.changeAge[0]}岁</li>
                    <li>
                        <Range
                            min={12}
                            max={50}
                            defaultValue={props.changeAge}
                            onChange={props.log('change')}
                        />
                    </li>
                    <li>{props.changeAge[1]}岁</li>
                </ul>
            </div>

            <div className="constellation">
                <ul>
                    {props.constellation.map((value, index) => {
                        return <li key={index} onClick={e => props.getFilterData('constellation', value.value,e)} className={value.isClick ? 'active' : ''}>{value.value}</li>
                    })}
                </ul>
            </div>
            <div className="confirm" onClick={(e)=>props.submitHandle(e)}>
                <span>确定</span>
            </div>
            </div>
        </StyleAlert>
    )
}
