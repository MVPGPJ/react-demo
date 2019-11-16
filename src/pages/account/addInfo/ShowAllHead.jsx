/**
 * @description {显示所有头像组件}
 * @param {Object} allHead 所有头像列表 
 * @param {function} pickHead 返回选择头像 return imgUrl
 */
import React, {useEffect, useState} from 'react'
// import React from 'react'
import {
    AllHeadWrap,
    AniHeadWrap
} from './styledShowAllHead'
import Animate from 'components/high-order/Animate'
 
const ShowAllHead = (props) => {
   let [isAni, setIsAni] = useState(false)
   let timer = null;
   useEffect(()=>{
       if(!isAni && props.showAnimate && !timer) {
            timer = setTimeout(()=>{
                setIsAni(true)
            },100)
       }
        return ()=>{
            if( !props.showAnimate ){
                clearTimeout(timer)
                setIsAni(false)
            }
        }
   })
   return (
     <AllHeadWrap onClick={props.hiddenAllHead}>
         <AniHeadWrap
          animate="translate"
          hasWrap={true}
          showAnimate={props.showAnimate && isAni}
         >
             {
                 props.heads.map((item, index)=>{
                    return (
                        <div 
                          key={index} 
                          className="img-wrap" 
                          onClick={(e)=>{
                              e.stopPropagation()
                              props.setHead(item)
                          }}>
                            <img src={item} alt=""/>
                        </div>
                    )
                 })
             }
         </AniHeadWrap>
     </AllHeadWrap>
   )
}

export default Animate(ShowAllHead)