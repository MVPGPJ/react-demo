import Styled from 'styled-components'
import border from 'components/style/border'
const StyledChatItem = Styled.div`
    width:100%;
    background:#fff;
    padding-left:.1rem;
    .item-container{
        border-bottom:1px solid #F5F6F7;
        width:100%;
        display:flex;
        padding:.1rem .1rem .1rem 0;
    }
    .left{
        flex:1;
        display:flex;
        align-items:center;
        div{
            padding-left:.1rem;
            display:flex;
            flex-direction:column;
            h4{
                font-size:.14rem;
                /* color:#57E1E2; */
            }
            span{
                color:#999999;
                font-size:.15rem;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
            border-radius:50%;
        }
    }
    .right{
        height:.4rem;
        line-height:.4rem;
        span{
            color:#999999;
            font-size:.12rem;
        }
    }
`
const ItemContainer = Styled.div`
    border-bottom:1px solid #F5F6F7;
    width:100%;
    display:flex;
    padding:.1rem .1rem .1rem 0;

`
const BorderedItem = border({
    component: ItemContainer,
    borderWidth: '0 0 1px 0'
})
export { StyledChatItem, BorderedItem } 