import React from 'react'

import { iconLabel } from './styledComponents'

const TitleGroupUI = (props) => {
   let Comp = props.type==='phone'
            ? iconLabel('phone')
            : props.type==='password'
            ? iconLabel('password')
            : props.type==='code'
            ? iconLabel('code')
            : ''
   return (
     <Comp>{props.title}</Comp>
   )
}

export default TitleGroupUI