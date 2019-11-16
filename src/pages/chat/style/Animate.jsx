// 引入依赖
import React from 'react'
import { CSSTransition } from 'react-transition-group'
// 动画引入
import './Animate.css'

const Animate = (Comp) => (props) => {
  
  return (
    <CSSTransition
      in={!!props.match}
      timeout={300}
      classNames={props.animate || 'page'}
      mountOnEnter
      unmountOnExit
    >
      <div className={props.animate || 'page'}>
        <Comp { ...props }></Comp>
      </div>
    </CSSTransition>
  )
}

export default Animate