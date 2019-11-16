import styled from 'styled-components'
import border from 'components/style/border'
import phone from 'assets/images/account/phone.png'
import code from 'assets/images/account/code.png'
import pwd from 'assets/images/account/pwd.png'


// 图标处理
const Label = styled.div`
  padding-left: 0.26rem;
  height: 0.25rem;
  font-size: 0.12rem;
  margin-bottom: 0.15rem;
  display: flex;
  align-items: center;
`;
const iconLabel = (iconName)=>{
  let icon = {}
  if( iconName==='phone' ) {
    icon.width = '0.16rem'
    icon.height = '0.25rem'
    icon.img = phone
  }
  if( iconName==='code' ) {
    icon.width = '0.19rem'
    icon.height = '0.15rem'
    icon.img = code
  }
  if( iconName==='password' ) {
    icon.width = '0.15rem'
    icon.height = '0.19rem'
    icon.img = pwd
  }
  return styled(Label)`
    background-size: ${icon.width} ${icon.height};
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url(${icon.img});
  `
}

const Input = styled.input`
    border: none;
    font-size: 0.14rem;
    line-height: 0.16rem;
    height: 0.16rem;
    color: #999;
    margin: 0;
    margin-left: 0.15rem;
    padding: 0;
`

const Text = styled.div`
    font-size: 0.12rem;
    color: #333;
`

const Arrow = styled.div`
    margin-right: 0.1rem;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    line-height: 0.12rem;
    &::after {
      content: "";
      margin-left: 0.08rem;
      display: block;
      width: 0rem;
      height: 0rem;
      border-top: 0.07rem solid #000;
      border-left: 0.045rem solid transparent;
      border-right: 0.045rem solid transparent;
    }
`

const LineInput = border({
  component: styled.div`
    padding: ${(props)=>(props.padding || '0 0 0.16rem')};
    display: flex;
    align-items: center;
  `,
  borderWidth: '0 0 1px 0'
})

// 输入框外层contaienr
const FormContainer = styled.div`
  padding-top: 0.27rem;
`

export {
  iconLabel,
  Input,
  Text,
  Arrow,
  LineInput,
  FormContainer
}