import React, { useState, useRef, useEffect } from 'react'
import StyleSquareItemUI from './StyleSquareItemUI'
import Interaction from './Interaction/Interaction'
import Voice from './voice/Voice'
import MyLink from '../router-link/RouterLink'
import {Link} from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group'
import './TextTransition.css'

//图片导入
// import headPhoto from 'assets/images/square/7bdc97e546fb59e65584b916021b193addde1d3a10b90-8pifaR_fw658@3x.png'
// import publishPic1 from 'assets/images/square/864fcba1be833081097df3936668bd9f@3x.png'
import arrowDPic from 'assets/images/square/箭头@3x.png'


export default (props)=>{
    let [isExceed,setIsExceed] = useState(false)
    const fileInputEl = useRef(null);
    const textEl = useRef(null);
    let elHeight = 0
    let elWidth = 0
    let picWidth = 0
    let picHeight = 0
    let picNumber = props.info.image instanceof Array && props.info.image.length
    useEffect(()=>{
        elHeight = fileInputEl.current ? fileInputEl.current.offsetHeight : 0
        elWidth = fileInputEl.current ? fileInputEl.current.offsetWidth : 0
        if(elHeight > elWidth*(138/285)){
            setIsExceed(true)
        }else{
            setIsExceed(false)
        }
        

    })
    return(
        <StyleSquareItemUI goods = {props.info.star}>
            <div className="square-user">
                {/* 头像 */}
                <Link to={'/friend/'+props.info.uid}>
                <img className="user-photo" src={props.info.head} alt=""/>
                </Link>
                <div className="user-info">
                    <span className="username">{ props.tabNumber===1 ? props.info.username : '来自 # '+ props.info.starname}</span>
                    <span className="publish-time">2小时前</span>
                </div>
            </div>
            <div className="publish-message">
                
                <div className="publish-pic"> 
                    {
                        props.info.image && !(props.info.image instanceof Array) && <Voice voiceId = {props.info.image} />
                    }
                    {
                        // props.info.image && props.info.image.split(",").map((item,index)=>{
                        props.info.image instanceof Array && props.info.image.map((item,index)=>{
                            //picNumber=2，2为测试数据
                            switch(picNumber=2){
                                case 1:
                                    picWidth = '2.09rem'
                                    picHeight = '1.17rem'
                                    break
                                case 2:
                                    picWidth = '.99rem'
                                    picHeight = '1.20rem'
                                    break
                                case 3:
                                    picWidth = '.76rem'
                                    picHeight = '.76rem'
                                    break
                                case 4:
                                    picWidth = '.76rem'
                                    picHeight = '.76rem'

                            }
                            return(
                                <>
                                    <img key={index} src={item} style={{ display:'block', width:picWidth,height:picHeight,marginRight: index===1&&picNumber===2?'.90rem':'.05rem',marginBottom: picNumber===2 ? '.04rem' :0 }} alt=""/>
                                    {"测试用"}
                                </>
                            )
                        }) 
                    }
                    
                </div>
                {/* <CSSTransition
                    in={window.flag}
                    timeout={1000}
                    classNames='slide'
                    onEntered={(el) => {el.style.color='blue'}}
                    appear={true}
                > */}
                    {/* <h6 className="text-container" ref={textEl}>
                        {props.info.note}
                    </h6> */}
                {/* <MyLink  url={`/comment/${props.info.id}`}  className="text-container" ref={textEl}> */}
                <MyLink  url={`/comment/${props.info.id}`}  className="text-container">
                    {props.info.note}
                </MyLink>
                {/* </CSSTransition> */}
                <h6 className="text-container-measure" ref={fileInputEl}>
                    {props.info.note}
                </h6>
                {isExceed && <p onClick={props.showText(textEl.current,props.info.id,props.tabNumber)}><img className={`textArrow${props.info.id}${props.tabNumber}`} src={ arrowDPic } alt=""/></p>}
                {props.info.address && <div className="publish-position">
                    <i className="position-pic"></i><span>{props.info.address}</span>
                </div>}
                <Interaction props={props} />
            </div>
        </StyleSquareItemUI>
    )
}
