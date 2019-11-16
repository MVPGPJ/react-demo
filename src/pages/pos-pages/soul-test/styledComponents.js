import styled from 'styled-components'

export const SoulTestWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Wrap = styled.div`
    width: 3.13rem;
    margin: 0.4rem auto 0;
    padding-bottom: 0.45rem;
    min-height: 3.13rem;
    border-radius: 0.1rem;
    overflow: hidden;
    background-color: white;
    position: relative;
`
export const Ques = styled.div`
    min-height: 0.67rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #57E1E2;
    text-align: center;
    color: white;
    font-size: 0.16rem;
`
export const AnswerWrap = styled.div`
    padding: 0.37rem 0.20rem 0;
`
export const AnswerItem = styled.div`
    background-color: #CCCCCC;
    color: #333;
    margin-bottom: 0.05rem;
    font-size: 0.14rem;
    line-height: 0.32rem;
    padding: 0 0.1rem;
    border-radius: 0.03rem;
`
export const Count = styled.div`
    font-size: 0.14rem;
    line-height: 0.45rem;
    color: #CCCCCC;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
`