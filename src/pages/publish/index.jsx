import React, { Component } from 'react'
import Animate from 'components/high-order/Animate'

//组件


import Header from './header/'
import Main from './main/'
import Footer from './footer/'

class Publish extends Component {
  render () {
    return (
      <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
        <Header {...this.props}></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}

export default Animate(Publish)