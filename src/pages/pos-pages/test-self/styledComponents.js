import styled from 'styled-components'
import TestBg from 'assets/images/account/test.jpg'

export const SoulTestWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Container = styled.div`
    background-color: '#FAFAFA'; 
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${TestBg});
    flex: 1; 
    overflow:'auto';
`
export const Wrap = styled.div`
    width: 2.66rem;
    margin: 0.4rem auto 0;
    padding-top: 0.35rem;
    min-height: 2.66rem;
    border-radius: 0.1rem;
    overflow: hidden;
    background-color: white;
    position: relative;
    border: 0.1rem double #57E1E2;
`
export const Ques = styled.div`
    min-height: 0.67rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #333;
    font-size: 0.16rem;
    
`
export const AnswerWrap = styled.div`
    padding: 0rem 0.20rem 0;
`
export const AnswerItem = styled.div`
    background-color: #90B1C2;
    color: white;
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
    text-align: right;
    position: absolute;
    width: 100%;
    top: 0;
    padding-right: 0.1rem;
`