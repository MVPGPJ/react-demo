import React from 'react'
import {
    Input,
    Text,
    LineInput
} from './styledComponents'

/**
 * @param title {是否是行内title}
 * @param hasBorder {是否带有下边框}
 * @param value {输入框的值}
 * @param type {输入框的类型}
 * @function getValue {获取输入框的值}
 */
const InputGroupUI = (props) => {
   return (
    <LineInput hasBorder={props.hasBorder} padding={props.padding}>
        { 
            props.title
            ? <Text>{props.title}</Text> 
            : props.children
        }
        <Input 
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e)=>{
            props.getValue(e.target.value)
          }}
          type={props.type}
        />
    </LineInput>
   )
}

export default InputGroupUI