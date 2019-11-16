import styled from 'styled-components'

import fudaileft3x from 'assets/images/home/fudaileft3x.png'
import fudairight3x from 'assets/images/home/fudairight3x.png'

// import leftImg from 'assets/images/home/'
/**
 *  福袋样式组件
 * 
 *  2019-08-05
 */



const StyleLuckyBagUI = styled.div`
    width: 100%;
    height: .34rem;
    margin-top: .27rem;
    margin-bottom: .25rem;
    ul{
        display: flex;
        justify-content: center;
        text-align: center;
        li{
            position: relative;
            width: .68rem;
            height: .34rem;
            line-height: .34rem;
            background: linear-gradient(#483FA7, #6147CB);
            border-radius: .08rem;
            span{
                display: inline-block;
                padding-left: .1rem;
                width: 100%;
                height: 100%;
                color: #eee;
                font-size: .13rem;
                font-weight: 100;
                background: url(${fudaileft3x}) no-repeat 0.1rem center;
                background-size: .15rem .16rem;
            }
        }
        li::after{
            position: absolute;
            content: '';
            border-width: .08rem;
            border-style: solid;
            left: 50%;
            transform: translateX(-.06rem);
            bottom: -.15rem;
            border-color: rgb(69,72,183) transparent transparent transparent;
        }
        li:nth-child(2){
            background: linear-gradient(#2C4FA9, #3D73C9);
            margin-left: .15rem;
        }
        li:nth-child(2)::after{
            position: absolute;
            content: '';
            border-width: .08rem;
            border-style: solid;
            left: 50%;
            transform: translateX(-.06rem);
            bottom: -.15rem;
            border-color: rgb(50,101,195) transparent transparent transparent;
            span{
                background: url(${fudairight3x}) no-repeat 0.1rem center;
                background-size: .15rem .16rem;
            }
        }
    }
`

export default StyleLuckyBagUI