import Styled from 'styled-components'
import rect_blue from 'assets/images/chat/rectangle_3x_blue.png'
import rect_white from 'assets/images/chat/rectangle_3x_white.png'

const StyledTalk = Styled.li`
    width:100%;
    display:flex;
    justify-content:${(props) => { return props.direction == 'right' ? 'flex-end' : 'flex-start' }};
    .left{
        left:0;
        max-width:3.05rem;
        margin:.17rem 0 .08rem;
        flex:1;
        position:relative;
        img{
            width:.3rem;
            height:.3rem;
            border-radius:50%;
            position:absolute;
            left:.11rem;
            vertical-align:middle;
        }
        
        div{
            min-height:.3rem
            line-height:.3rem;
            margin-left:.43rem;
            background:url(${rect_white}) no-repeat;
            background-size:100% 100%;
            padding:.05rem .09rem .05rem .14rem;
           
                display:inline-block;
                /* border:1px solid yellow; */
                span{
                    font-size:.14rem;
                    word-break: break-all;
                    /* background:red; */
                    /* padding:.06rem .1rem .05rem 0.15rem; */
                }

            
        }
    }
    .right{
        max-width:3.05rem;
        margin:.17rem 0 .08rem;
        text-align:left;
        position:relative;
        img{
            width:.3rem;
            height:.3rem;
            border-radius:50%;
            position:absolute;
            right:.11rem;
            vertical-align:middle;
        }
        div{
            min-height:.3rem
            line-height:.3rem;
            margin-right:.43rem;
            flex:1;
            background:url(${rect_blue}) no-repeat;
            background-size:100% 100%;
            padding:.05rem .14rem .05rem .09rem;
            span{
                font-size:.13rem;
                word-break: break-all;
                /* padding:.06rem .14rem .05rem 0.15rem; */
            }
        }
    }
`
export default StyledTalk