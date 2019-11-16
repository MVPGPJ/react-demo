import React, { Component } from 'react'

import http from 'utils/http'

import SquareItemUI from './SquareItemUI'
import StyleSquareItemContainer from './StyleSquareItemContainer'

//搜索框组件导入
import SearchBar from 'components/search/SearchBar.jsx'
//文本箭头图片
import arrowUPic from 'assets/images/square/箭头@3x.png'
import arrowDPic from 'assets/images/square/arrowdown.png'

export class SquareItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            picNumber:1,
            list: [],
            str: 0,  //点赞数
        }
        this.showText = this.showText.bind(this)
        this.addLike = this.addLike.bind(this)
        this.text = false
    }
    
    static getDerivedStateFromProps (nextProps, preState) {
        return {
            str: nextProps.squareData.list
        }
    }

    // componentDidMount(){
    //     fetch('http://red-mi.xyz/jsapi')
    //     .then((response) => {
    //     //   console.log(response)
    //       return response.json()
    //     })
    //     .then((result) => {
    //         // console.log(result)
    //     })
    // }

    //显示
    showText(textEl, textId, tabNumber){
        let show  = false
        return function(){
            show = !show
            if(show){
                let textArrow = document.querySelector(".textArrow"+textId+tabNumber)
                textArrow.src = arrowDPic
                textEl.classList.remove('text-container')
                textEl.style.overFlow = "visible"
            }else{
                let textArrow = document.querySelector(".textArrow"+textId+tabNumber)
                textArrow.src = arrowUPic
                textEl.classList.add('text-container')
                textEl.style.overFlow = "hidden"
            }
        }
    }

    addLike(id,index){
        http.get('/star', {id})
        this.setState({
            str: this.state.str[index].star++
        })

    }

    render() {
        let list = this.props.squareData
        ? this.props.squareData.list.map((item,index)=>(
                <SquareItemUI str={this.state.str} index={index} key={item.id} arrowStatus={this.arrowStatus}  addLike={this.addLike} showText={this.showText} info={item} tabNumber = {this.props.tabNumber}></SquareItemUI>
          )) 
        : []
        return (
        <StyleSquareItemContainer  backgroundColor= {this.props.backgroundColor}>
            {this.props.tabNumber===1 ? <SearchBar /> : ''}
            {list}
        </StyleSquareItemContainer>
        )
    }
}

export default SquareItemContainer
