import React, { useState, useEffect } from 'react'
import Logo from 'pages/account/_components/logo/'
import Animate from 'components/high-order/Animate'
import {StartingWrap} from './styledComponents'

import './style.css'

const Starting = (props)=> {
    let [cutTime, setCutTime] = useState(3)
    let handleClick=()=>{
        props.closeStarting()
    }
    useEffect(()=>{
        let time = setInterval(()=>{
            setCutTime(--cutTime)
            if( cutTime <= 0 ) {
                props.closeStarting()
            }
        },1000)
        return ()=>{
            console.log('停止定时器')
            clearInterval(time)
        }
    })
    return (
        <StartingWrap className='starting' style={{padding: '0 0.2rem'}}>
            <div className='closeWrap'>
                <div className="closeIcon" onClick={handleClick}>
                    {cutTime}秒&nbsp;跳过
                </div>
            </div>
            <Logo></Logo>
        </StartingWrap>
    )
}
export default Animate(Starting)