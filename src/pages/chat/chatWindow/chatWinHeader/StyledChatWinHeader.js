import styled from 'styled-components';
import arrowPic from 'assets/images/chat/箭头@3x.png'
import focusPic from 'assets/images/chat/矢量智能对象@3x.png'
const StyledChatWinHeader=styled.div`
    width:100%;
    height:.44rem;
    position:relative;
    font-weight:700;
    font-size:.15rem;
    color:#333333;
    i{
        width:.11rem;
        height:.07rem;
        position: absolute;
        text-align:center;
        top:.16rem;
        left:.1rem;
        display:inline-block;
        background-image:url(${arrowPic});
        background-size:.11rem .07rem;
        transform:rotate(90deg);
    }
    div{
        width:100%;
        line-height:.44rem;
        text-align:center
    }
`
export default StyledChatWinHeader