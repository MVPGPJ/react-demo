import React from 'react'
import {withRouter} from 'react-router-dom'

import styled from 'styled-components'

const StyleSearchBar = styled.div`
    .search-container{
        width: 3.55rem;
        height: .20rem;
        background: #F5F6F7;
        border-radius: .1rem;
        padding-left: .15rem;
        input{
            border: none;
            background: transparent;
            padding-left: .12rem;
        }
        input::placeholder{
            font-size: .15rem;
            color: #333;
        }
        i{
            display: inline-block;
            width: .11rem;
            height: .11rem;
            background: url( ${require("assets/images/search/button.png")} ) no-repeat;
            background-size: 100%;
        }
    }
`

export default withRouter((props)=>{
    return(
        <StyleSearchBar>
            <div onClick={()=>{props.history.push('/dynamic/search')}} className="search-container">
                <i></i><input type="text" placeholder="美食"/>
            </div>
        </StyleSearchBar>
    )
})
