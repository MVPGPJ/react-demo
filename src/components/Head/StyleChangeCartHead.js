import styled from 'styled-components'


/**
 *   可以进行切换的头部选项卡样式组件
 * 
 *   2019-08-07
 */

const StyleChangeCartHead = styled.div`
    width: 100%;
    height: 44px;
    background-color: #fff;
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 44px;
            text-align: center;
            span{
                font-size: .15rem;
            }
            .left{
                width: .09rem;
                height: .16rem;
            }
        }
        li:nth-child(1){
            position: absolute;
            padding-left: .1rem;
            z-index: 100;
        }
        li:nth-child(2){
            span{
                /* display: inline-block; */
                margin: 0 .1rem;
                padding: .02rem; 
            }
            span.active{
                border-bottom: .02rem solid rgb(87,225,226)
            }
        }
        .share{
            position: absolute;
            right: 0;
            padding-right: .15rem;
            img{
                width: .21rem;
                height: .19rem;
            }
        }
    }
`

export default StyleChangeCartHead