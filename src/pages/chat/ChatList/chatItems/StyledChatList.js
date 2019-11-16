import Styled from 'styled-components'
import more from 'assets/images/chat/更多@3x.png'
const StyledChatList=Styled.div`
    width:100%;
    .listHead{
        background:#F5F6F7;
        height:.25rem;
        line-height:.25rem;
        width:100%;
        padding:0 .1rem;
        position:relative;
        i{
            width:.19rem;
            height:.16rem;
            display:inline-block;
            background-image:url(${more});
            background-size:.16rem .15rem;
            position:absolute;
            top:.03rem;
            right:.1rem;
        }
    }

`
export default StyledChatList