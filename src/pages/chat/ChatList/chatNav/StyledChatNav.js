import Styled from 'styled-components'
const StyledChatNav = Styled.div`
    width:100%;
    background:#fff;
    display:flex;
    padding:.1rem;
    height:.6rem;
    .left{
        flex:1;
        display:flex;
        align-items:center;
        div{
            padding-left:.1rem;
            display:flex;
            flex-direction:column;
            h4{
                font-size:.16rem;
                color:#57E1E2;
                font-weight:normal;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
        }
    }
    .right{
        height:100%;
        line-height:.4rem;
        img{
            width:.42rem;
            height:.21rem;
            vertical-align:middle;
        }
    }
`
export default StyledChatNav