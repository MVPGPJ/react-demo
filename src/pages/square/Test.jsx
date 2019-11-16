import React,{Component} from 'react'
import { Tabs, Badge } from "antd-mobile"
//路由
import {Route, Switch } from "react-router-dom";


//列表组件
import SquareItemContainer from './square-list/SquareItemContainer'
//搜索组件
import SearchContainer from 'components/search/SearchContainer.jsx'
// import ThemeButton from './themeButton/ThemeButton'


//better-scroll
import Scroll from './square-list/Scroll.jsx'

//导入图片
import camerPic from '../../assets/images/square/照相机@3x.png'
import signInPic from '../../assets/images/square/签到@3x.png'

import './cover.css'

import { connect } from 'react-redux'
import { changeTheme } from './store/actionCreator'

const tabs = [
  { title: <Badge>关注</Badge> },
  { title: <Badge>推荐</Badge> },
  { title: <Badge>更新</Badge> },
]


const mapStates = (state) => {
  return {
    // title: state.square.background
    background: state.getIn(['square', 'background'])
  }
}

const mapDispatch = (dispatch) => ({
  changeTheme(title) {
    dispatch(changeTheme(title))
  }
})


// const TabExample = () => (
class TabExample extends Component{
  constructor(props){
    super(props)
    this.state={
      themeColor:'',
      recommend: '',
    }
  }

static getDerivedStateFromProps(nextProps, prevState) {
  const {background} = nextProps;
  // 当传入的type发生变化的时候，更新state
  if (background === 'black') {
      return {
        themeColor:'light',
      }
  }
  if (background === 'white') {
      return {
        themeColor:'dark',
      }
  }
  // 否则，对于state不进行任何操作
  return null;
}

  componentDidMount(){
  // this.ttt = document.querySelector('.am-tabs-tab-bar-wrap')
  
  }

  render(){
    return(
      <>
        {/* <p onClick={this.props.changeTheme.bind(null,this.state.themeColor)} style={themeButtonstyle}>{this.state.themeColor}</p> */}
        <Switch>  
        <Route path="/dynamic/search" render={(props)=>{
          return <SearchContainer/>
        }}></Route>
        <Route path="/dynamic" render={(props)=>{
          // let flag = true
          return (
            
            <div style={{height:'100%'}}>
            {/* <ThemeButton background={this.props.background} changeTheme={this.props.changeTheme}/> */}

              <Tabs tabs={tabs}
        initialPage={1}
        tabBarActiveTextColor="#333"
        prerenderingSiblingsNumber={0}
        onChange={
          (tab,index) => {
            let ttt = document.querySelector('.am-tabs-tab-bar-wrap')
            let mel = document.querySelectorAll('.am-badge')
            mel.forEach((val,index)=>{mel[index].style.fontWeight="400";mel[index].style.fontSize=".15rem";})
            if(mel[index]){mel[index].style.fontWeight = "600"}
            if(mel[index]){mel[index].style.fontSize = ".18rem"}
            // index !==1 ? this.ttt.classList.add('addone') : this.ttt.classList.remove('addone')
            index !==1 ? ttt.classList.add('addone') : ttt.classList.remove('addone')
        } }
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div className="recommend" style={{flex:1, backgroundColor: this.props.background }}>
          {/* <SquareItemContainer tabNumber={0}></SquareItemContainer>  */}
          {/* <Scroll tabNumber={0} fatherSe=".recommend" render={com => (<SquareItemContainer backgroundColor= {this.props.background} squareData={com} tabNumber={0}></SquareItemContainer>)}></Scroll> */}
          <Scroll tabNumber={0} fatherSe=".recommend" render={com => (<SquareItemContainer backgroundColor={this.props.background} squareData={com} tabNumber={0}></SquareItemContainer>)}></Scroll>
        </div>
        <div className="care" style={{flex:1, backgroundColor: this.props.background }}>
        <Scroll tabNumber={1} fatherSe=".care" render={com => (<SquareItemContainer backgroundColor={this.props.background} squareData={com} tabNumber={1}></SquareItemContainer>)}></Scroll>
        </div>
        <div className="update" style={{flex:1, backgroundColor: this.props.background }}>
          <Scroll tabNumber={2} fatherSe=".update" render={com => (<SquareItemContainer backgroundColor={this.props.background} squareData={com} tabNumber={2}></SquareItemContainer>)}></Scroll>
        </div>
      </Tabs> 

              <div className="extends">
                  <span className="square-camera"><img src={camerPic} alt="camera"/></span>
                  <span className="square-signin"><img src={signInPic} alt="sign in"/></span>
              </div>

            </div>)
        }} />
      </Switch> 
    </>
    )
  }
}
// )

export default connect(mapStates,mapDispatch)(TabExample) 
