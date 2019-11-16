import styled from 'styled-components'

const H = styled.header`
    height: 0.44rem;
    width: 100%;
    background-color: #FFF;
    padding: 0 0.1rem;
    position: relative;
    >div{
        display: inline-block;
    }
    .left{
        height: 100%;
        width: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 666;
        img{
            height: 0.18rem;
            width: 0.1rem;
        }
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        font-size: 0.16rem;
        color: #333333;
        font-weight: 400;
    }
    .right{
        position: absolute;
        z-index: 666;
        right: 0.1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: 0.14rem;
            color: #333333;
        }
    }
`

export {
    H
}