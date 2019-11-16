import React, { Component } from 'react'

import { Textarea } from './StyleMain'
function MainUI(props) {
    return(
        <Textarea  
            placeholder = "记录这一刻，晒给懂你的人......" 
            value={ props.value } id="ASD"  
            onChange = { props.valueChange }
            ref = { props.focus }
            onClick = { props.Click }
            onBlur = { props.Blur }
        ></Textarea>
    )
}

export default MainUI
