import styled from 'styled-components'
import radioBox from 'assets/images/account/radio-box.png'
import radioDisBox from 'assets/images/account/radio-box-disabled.png'
import loading from 'assets/images/account/loading.png'

import './button.css'

const StyledButton = styled.div`
  width: 1.04rem;
  height: 0.51rem;
  line-height: 0.15rem;
  font-size: 0.15rem;
  padding-top: 0.16rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  background-image: url(${(props)=>(props.type==='normal'?radioBox:radioDisBox)});
  background-size: 1.04rem 0.51rem;
  background-repeat: no-repeat;
`
const Loading = styled.div`
  width: 0.23rem;
  height: 0.23rem;
  background-image: url(${loading});
  margin-top: -0.04rem;
  background-size: 0.23rem;
  background-repeat: no-repeat;
  transform: rotate(0deg);
  animation: rolling 3s 0s linear infinite;
`


export {
  StyledButton,
  Loading
}