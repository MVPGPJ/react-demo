import styled from 'styled-components'

/**
 * 首页星球界面主要内容显示样式组件
 * 
 * 2019-07-23
 */

 const StylePlaneUI = styled.div`
    height: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .tagBall{
        flex: 1;
        width: 100%;
        /* height: 3.2rem; */
        height: 2.8rem;
        position: relative;
    }
    .tag {
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        color: #D3D3D3;
        text-decoration: none;
        font-size: .1rem;
        font-family: "微软雅黑";
        font-weight: 500;
        will-change: transform;
        text-align: center;
      }
    .tag .eleEvery{
        width: .35rem;
        height: .15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
    }
    .tag .eleEvery p{
        margin: 0;
        width: 100%;
        height: 100%;
        /* animation:move 10s linear infinite; */
        font-size: .12rem;
        position: absolute;
        transform: scale(0.8);
    }

    .tag span{
        display: block;
        width: .08rem;
        height: .08rem;
        border-radius: 50%;
        background-color: #D2B48C;
        margin-left: .15rem;
    }
    .tag span.active{
        animation: starFlick 0.8s ease-out infinite;
        -webkit-animation: starFlick .8s ease-out infinite;
        transform: translateX(20px);
        background-color: ${props => props.elecolor};
    }

    /* 每个元素的闪动 */
    @keyframes starFlick {
    from {
        opacity: 1;
        transform: scale(1.2)
    }
    to {
        opacity: 0;
        transform: scale(1)
    }
}

 /* 文字轮播 */
/* @keyframes move{ 
    0%{    
        left: 0;   
    }   
    0%,20%{
        transform:translateX(0%);    
    }  
    20%,40%{    
        transform:translateX(-50%);    
    }     
    40%,60%{    
        transform:translateX(-100%);    
    }    
    60%,80%{    
        left: -50%    
    }  
    80%,100%{    
        transform:translateX(20%);    
    }   
    100%{    
        transform:translateX(0%);     
    }   
}  */
 `

 export default StylePlaneUI