import styled from 'styled-components'
import IconBroadcast from 'assets/images/account/broadcast.png'

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`
export const MainWrap = styled.div`
    background-color: #f7f7f7;
    padding: 0.1rem;
    flex: 1;
`
export const ShadowWrap = styled.div`
    background-color: white;
    border-radius: 0.05rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px #B5AEAE;
    margin-bottom: 0.1rem;
`
export const Title = styled.div`
    display: flex;
    margin-bottom: 0.09rem;
    justify-content: space-between;
    .title {
        margin: 0 0.15rem;
        color: #333;
        font-size: 0.15rem;
        font-weight: bold;
        font-family: "PingFang-SC-Bold";
    }
    .broadcast {
        width: 1.7rem;
        height: 0.22rem;
        line-height: 0.22rem;
        font-size: 0.09rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border: 1px solid #91918E;
        border-radius: 0.1rem;
        padding-left: 0.24rem;
        background-repeat: no-repeat;
        background-size: 0.17rem 0.17rem;
        background-position: 0.03rem center;
        background-image: url(${IconBroadcast});
    }
`
export const  BalanceWrap = styled(ShadowWrap)`
    padding: 0.15rem 0.19rem 0.18rem 0.16rem;
    display: flex;
    justify-content: space-between;
    .img-wrap {
        width: 0.31rem;
        height: 0.31rem;
        margin-right: 0.08rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .balance {
        font-size: 0.32rem;
        line-height: 0.25rem;
        height: 0.25rem;
        color: #333;
        font-family: 'Adobe Heiti Std R';
        margin-right: 0.08rem;
    }
    .tunnel-bill {
        font-size: 0.12rem;
        color: #7B7B7B;
        height: 0.25rem;
        line-height: 0.38rem;
    }
    .tunnel-pay {
        background-color: rgba(87,225,226,0.3);
        color: #57E1E2;
        width: 0.78rem;
        height: 0.3rem;
        border-radius: 0.15rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const SignInWrap = styled(ShadowWrap)`
    padding: 0.1rem 0.14rem 0.14rem 0.16rem;
    .title {
        font-size: 0.12rem;
        height: 0.12rem;
        line-height: 0.12rem;
        margin-bottom: 0.15rem;
    }
    .wrap {
        display: flex;
        justify-content: space-between;
    }
    .sign-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .sign-text {
        color: #7B7B7B;
        font-size: 0.1rem;
    }
    .sign-btn {
        margin-bottom: 0.04rem;
        width: 0.31rem;
        height: 0.31rem;
        border: 1px solid #ccc;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }
    .sign-btn.done {
        border-color: #DDF9F9;
        background-color: #DDF9F9;
    }
`
export const GetSoulMoneyWrap = styled(ShadowWrap)`
    padding: 0.22rem 0.2rem 0.28rem;
    display: flex;
    justify-content: space-between;
    .img-wrap {
        width: 0.23rem;
        height: 0.23rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0.07rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .title {
        color: #333333;
        font-size: 0.15rem;
        line-height: 0.15rem;
        height: 0.15rem;
        margin-bottom: 0.16rem;
        font-weight: bold;
    }
    .tip {
        color: #909090;
        font-size: 0.11rem;
    }
    .get-btn {
        width: 0.78rem;
        height: 0.30rem;
        color: #E9FFEF;
        font-size: 0.12rem;
        border-radius: 0.15rem;
        background-color: #FD9826;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`