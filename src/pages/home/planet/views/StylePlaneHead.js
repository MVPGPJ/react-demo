import styled from 'styled-components'


/** 
 * 首页中星球界面的头部导航样式组件
 * 
 * 2019-07-22
*/


const StylePlaneHead = styled.div`
    width: 100%;
    height: 44px;
    background: #000;
    color: #fff;
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
            line-height: 44px;
            .text, .filtration{
                font-size: .12rem;
                font-weight: 600;
                
            }
            .logo{
                font-size: .18rem;
                font-weight: 500;
                img{
                    width: .45rem;
                    height: .26rem;
                }
            }
        }
        .filtration{
            padding-left: .06rem;
        }
        .filtrate-img{
            width: .12rem;
            height: .12rem;
        }
    }
`

export default StylePlaneHead