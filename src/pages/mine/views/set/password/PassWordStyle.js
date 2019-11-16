import styled from 'styled-components'

const Pass = styled.div`
    position: relative;
    z-index: 1000;
    padding: 0.3rem 0.1rem 0 0.1rem;
    height: 100%;
    background-color: #eee;
    .hint{
        margin-top: 0.1rem;
        width: 100%;
        height: 0.4rem;
        border-radius: 0.06rem;
        text-align: center;
        line-height: 0.4rem;
        color: #999999;
        background-color: #ffffff;
        font-size: 0.14rem;
    }
    .pwd{
        margin-top: 0.1rem;
        width: 100%;
        height: 0.32rem;
        border: 0;
        border-radius: 0.06rem;
        color: #999999;
        background-color: #ffffff;
        padding-left: 0.09rem;
        font-size: 0.13rem;
    }
`

export {
    Pass
}