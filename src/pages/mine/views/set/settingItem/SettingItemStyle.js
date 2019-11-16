import styled from 'styled-components'

const Item = styled.div`
    position: relative;
    z-index: 1000;
    height: 0.4rem;
    width: 100%;
    margin-top: 0.1rem;
    padding: 0 0.08rem 0 0.22rem;
    background-color: #ffffff;
    >div{
        position: relative;
        z-index: 1000;
        line-height: 0.4rem;
        display: inline-block;
    }
    .iconType{
        width: 0.18rem;
        height: 0.18rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .signature{
        margin-left: 0.12rem;
        font-size: 0.15rem;
        color: #333333;
        vertical-align:middle;
    }
    .jiantou{
        float: right;
        width: 0.08rem;
        height: 0.14rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
`
const Set = styled.div`
    height: 100%;
    background-color: #eee;
`

const Exit = styled.div`
    position: relative;
    z-index: 1000;
    height: 0.4rem;
    width: 100%;
    margin-top: 0.1rem;
    background-color: #ffffff;
    >div{
        line-height: 0.4rem;
        text-align: center;
        color: red;
        font-size: 0.15rem;
    }
`


export {
    Item,
    Set,
    Exit
}