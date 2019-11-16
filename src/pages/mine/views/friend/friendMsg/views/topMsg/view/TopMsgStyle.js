import styled from 'styled-components'

const TopMsgContainer = styled.div`
    width: 100%;
    height: 3rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 100;
    overflow: hidden;
    >img{
        position: absolute;
        z-index: -100;
        width: 100%;
        height: 3rem;
    }
    .avatar{
        margin-top: 0.3rem;
        text-align: center;
        img{
            border-radius: 50%;
            height: 0.65rem;
            width: 0.64rem;
            opacity: 0.7;        }
        p{
            margin-top: 0.08rem;
            font-size: 0.12rem;
            color: #000;
        }
    }
    .signature{
        margin-top: 0.2rem;
        text-align: center;
        color: #000;
        p{
            display: inline-block;
        }
        span{
            display: inline-block;
            width: 0.12rem;
            height: 0.11rem;
            background-image: url(${require('assets/images/mine/change.png')});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-left: 0.06rem;
        }
    }
    .time{
        text-align: center;
        color: #000;
    }
`
export {
    TopMsgContainer
}