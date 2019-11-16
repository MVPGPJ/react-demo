import Styled from 'styled-components'
import border from 'components/style/border'
const StyledChatWinContent = Styled.div`
    height:100%;
    width:100%;
    background:#F5F6F7;
    flex:1;
    flex-direction:column;
    display:flex;
    .scroll-container{
        height: 100%;
        width: 100%; 
        overflow: hidden;
        padding-right:.1rem;
        flex: 1;
        div.bscroll-vertical-scrollbar{
            top:.44rem !important;
            bottom:.9rem !important;
        }
    }
    ul{
        flex:1;
        p{
            text-align:center;
            margin-top:.15rem;
        }
    }
`
const input = Styled.div`
    width:100%;
    height:.4rem
    textarea{
        width:100%;
        height:.4rem;
        line-height:.4rem;
        border:none;
        font-size:.13rem;
        padding:0 .26rem;
        &::placeholder{
            color:#ccc
        }
    }
`
const BorderedInput = border({
    component: input,
    borderWidth: '0 0 1px 0'
})
export { StyledChatWinContent, BorderedInput } 