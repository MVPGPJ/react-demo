import styled from 'styled-components'

/**
 *  测试题每个item的样式组件
 * 
 *  2019-08-06
 */

const StyleTextItem = styled.div`
    padding-top: .1rem;
    position: relative;
    width: 100%;
    text-align: center;
    h3{
        color: #333;
        font-size: .16rem;
        font-weight: 400;
        padding-bottom: .01rem;
        text-align: left;
        padding-left: .2rem;
    }
    img{
        width: 3.62rem;
        height: 1.29rem;
    }
    .content-top{
        padding-left: .23rem;
        position: absolute;
        color: #fff;
        left: ${props => props.data.position ? '0' : ''};
        right: ${props => props.data.position ? '0' : 'none'};
        top: ${props => props.data.isTitle ? '.8rem' : '.5rem'};
        margin: auto;
        .title{
            span{
                padding-left: .1rem;
                font-size: .16rem;
            }
            .img-psd{
                width: .13rem;
                height: .15rem;
            }
        }
        p:last-child{
            padding-top: .05rem;
            font-size: .12rem;
        }
    }
    .isGOText{
        position: absolute;
        width: .7rem;
        height: .25rem;
        bottom: 0.2rem;
        right: 0.2rem;
        color: #fff;
        border: .01rem solid #fff;
        padding: .01rem;
        font-size: .12rem;
        text-align: center;
        line-height: .25rem;
        border-radius: .05rem;
    }
`

export default StyleTextItem