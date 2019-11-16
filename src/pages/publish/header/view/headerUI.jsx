import React, { Component } from 'react'

import Head from './StyledHeader.js'

function Header(props){
  return (
    <Head hasBorder="true">
        <div className="header_top"></div>
        <div className="header_b">
          <div className="header_goBack_icon" 
            onClick={ props.goback }
          ></div>
          <div className="issue" onClick = { props.publish }>发布</div>
        </div>
    </Head>
 )
}

export default Header