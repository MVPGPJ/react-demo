import styled from 'styled-components';
import arrowPic from 'assets/images/chat/箭头@3x.png'
import focusPic from 'assets/images/chat/矢量智能对象@3x.png'
import border from 'components/style/border'
const StyledChatHeader=styled.div`
    width:100%;
    height:.44rem;
    position:relative;
    font-weight:700;
    display:flex;
    padding: 0 .1rem;
    div{
        flex:1;
        height:100%;
        line-height:.44rem;
        color:#333333;
        font-size:.14rem;
    }
    .match{
        i{
            width:.11rem;
            height:.07rem;
            display:inline-block;
            background-image:url(${arrowPic});
            background-size:.11rem .07rem;
            margin-left:.08rem;
        }
    }
    .chat{
        text-align:center;
    }
    .focus{
        text-align:right;
        position: relative;
        i{
            width:.16rem;
            height:.15rem;
            display:inline-block;
            background-image:url(${focusPic});
            background-size:.16rem .15rem;
            position:absolute;
            top:.14rem;
            right:.41rem;
        }
    }
`
const BorderedHeader=border({
    component:StyledChatHeader,
    borderWidth: '0 0 1px 0'
})
export default BorderedHeader