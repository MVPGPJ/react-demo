import styled from 'styled-components'

/**
 *  含有返回键和标题的样式组件
 * 
 *  2018-08-06
 */

const StyleBackTitle = styled.div`
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
    }
`

export default StyleBackTitle