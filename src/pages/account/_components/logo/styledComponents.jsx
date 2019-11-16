import styled from 'styled-components'
import logo from 'assets/images/account/logo.png'
import line from 'assets/images/account/line.png'


const LogoWrap = styled.div`
  padding-top: 0.44rem;
  padding-bottom: 0.22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-size: 100% 100%;
  background-image: url(${logo});
  margin-bottom: 0.18rem;
`
const LogoInfo = styled.div`
  display: flex;
  align-items: center;
  &:before{
    content: "";
    display: blcok;
    width: 0.34rem;
    height: 0.03rem;
    background-size: 0.34rem 0.03rem;
    background-repeat: no-repeat;
    background-image: url(${line})
  }
  .content{
    font-size: 0.15rem;
    color: #333;
    margin: 0 0.07rem;
  }
  &:after{
    content: "";
    display: block;
    width: 0.34rem;
    height: 0.03rem;
    background-size: 0.34rem 0.03rem;
    background-repeat: no-repeat;
    background-image: url(${line});
    transform: rotateZ(180deg);
  }
`
export {
  LogoWrap,
  Logo,
  LogoInfo
}