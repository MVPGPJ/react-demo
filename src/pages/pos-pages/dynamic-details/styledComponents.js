import styled from 'styled-components'
import border from 'components/style/border'
import IconBack from 'assets/images/account/back.png'
import IconMore from 'assets/images/account/more.png'
import IconAddress from 'assets/images/account/address.png'
import IconCancle from 'assets/images/account/cancle.png'
import IconStar from 'assets/images/account/star.png'
import IconComment from 'assets/images/account/comment.png'
import IconCollect from 'assets/images/account/collect.png'
import IconWatch from 'assets/images/account/watch.png'
import likeActive from 'assets/images/square/like-active.png'

export const LineTbar = border({
    component: styled.div`
        padding: 0 0.1rem;
        height: 0.44rem;
    `,
    borderWidth: '0 0 1px'
})

export const Icon = styled.div`
    width: 0.08rem;
    height: 0.14rem;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${(props)=>(props.className==='back'? IconBack:props.className === 'more' ? IconMore : '')});
`
export const Container = styled.div`
    margin-right: 0.09rem;
    overflow: scroll;
    flex: 1;
    /* background-color: red; */
`
export const ContentBox = styled.div`
    padding: 0.09rem 0.22rem 0.15rem 0.11rem;
`
export const ContentUser = styled.div`
    display: flex;
    margin-bottom: 0.11rem;
    .head {
        width: 0.35rem;
        height: 0.35rem;
        margin-right: 0.1rem;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .user-name {
        font-size: 0.15rem;
        color: #2DEBD7;
        line-height: 0.15rem;
    }
    .time {
        font-size: 0.13rem;
        color: #CCCCCC;
    }
`
export const ContentWrap = styled.div`
    padding-left: 0.35rem;
    img {
        border-radius: 0.04rem;
        overflow: hidden;
        margin-right: 0.04rem;
        margin-bottom: 0.04rem;
    }
    .img-wrap {
        display: flex;
        margin-bottom: 0.19rem;
    }
    .text-wrap {
        line-height: 0.24rem;
        color: #333;
        font-size: 0.13rem;
        font-family: "PingFang-SC-Regular";
        margin-bottom: 0.2rem;
    }
    .audio-wrap {
        margin-bottom: 0.1rem;
    }
    .video-wrap {
        width: 2.09rem;
        height: 1.17rem;
        border-radius: 0.04rem;
        overflow: hidden;
        margin-bottom: 0.1rem;
    }
    
`
export const Address = styled.div`
    height: 0.2rem;
    padding-left: 0.32rem;
    color: #2CF9E3;
    font-size: 0.13rem;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    background-image:url(${IconAddress});
`
export const IconOpt = styled.div`
    display: inline-block;
    height: 0.2rem;
    width: 0.2rem;
    margin: 0 0.1rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${(props)=>(props.type==='star'? IconStar : props.type==='comment' ? IconComment : props.type==='collect' ? IconCollect : props.type==='watch' ? IconWatch : props.type==='redstart' ? likeActive : IconCancle )});
`
export const OptWrap = styled.div`
    display: flex;
    align-items: center;
`
export const OptText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #A3A3A3;
`
export const CommentItem = styled.div`
    padding: 0.1rem 0.12rem 0.1rem 0.32rem;
    display: flex;
    .userInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        .head {
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 0.07rem;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .floor {
            color: #CCCCCC;
            text-align: center;
        }
    }
    .commentInfo {
        margin-left: 0.1rem;
        .commentTitle{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #CCCCCC;
            font-size: 0.11rem;
        }
        .commentContent{
            font-size: 0.12rem;
            color: #333;
            max-width:2.73rem;
        }
    }
`
const Input = styled.div`
    background-color: white;
    padding: 0 0.2rem;
    height: 0.35rem;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    line-height: 0.36rem;
    display: flex;
    div{
        flex: 1;
        line-height: 0;
        margin: 0.1rem 0;
        input {
            font-size: 0.14rem;
            line-height: 0.16rem;
            color: #999999;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
        }
    }
`
export const CommentInput = border({
    component: Input,
    borderWidth: '1px 0 0 0'
})