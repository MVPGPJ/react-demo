import React from 'react'
import {
    IconOpt
} from './styledComponents'
 
const Tips = () => {
   return (
       <div style={{paddingTop: '0.1rem', backgroundColor: '#F5F6F7', paddingBottom: '0.01rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', marginBottom: '0.1rem', padding: '0.07rem 0 0.05rem'}}>
                <div style={{display: 'flex'}}>
                    <IconOpt type='watch' style={{margin: '0 0.2rem', width: '0.26rem', height: '0.16rem'}}></IconOpt>
                    <div style={{fontSize: '0.13rem', color: '#ccc'}}>长安评论可以进行举报哦~</div>
                </div>
                <IconOpt type='cancle' style={{width: '0.09rem', height: '0.09rem'}}></IconOpt>
            </div>
        </div>
   )
}

export default Tips