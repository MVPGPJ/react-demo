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
            height: 0.65rem;
            width: 0.64rem;
            border-radius: 50%;
            opacity: 0.8;
        }
        p{
            margin-top: 0.08rem;
            font-size: 0.12rem;
            color: #FFF;
        }
    }
    .signature{
        margin-top: 0.2rem;
        text-align: center;
        color: #FFF;
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
        color: #FFF;
    }
`
export {
    TopMsgContainer
}