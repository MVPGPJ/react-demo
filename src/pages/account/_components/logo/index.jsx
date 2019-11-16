import React from 'react'
import {
  LogoWrap,
  Logo,
  LogoInfo
} from './styledComponents.jsx'

const LogoContainer = () => {
  return (
    <LogoWrap>
      <Logo></Logo>
      <LogoInfo>
        <div className="content">跟随灵魂找到你</div>
      </LogoInfo>
    </LogoWrap>
  )
}

export default LogoContainer