import React, { Component } from 'react'
import SearchFunction from './SearchFunction.jsx'

import StyleSquareSearch from "./StyleSquareSearch"

//图片
import searchPic from 'assets/images/search/button.png'
import textIco from 'assets/images/square/文字@3x.png'
import picIco from 'assets/images/square/图片@3x.png'
import audioIco from 'assets/images/square/音频@3x.png'
import vedioIco from 'assets/images/square/视频@3x.png'
import comIco from 'assets/images/square/蒙层-共创@3x.png'


const parameter = {
    height: '.20rem',
    width: '2.97rem',
    searchPic: searchPic,
    placeHolder: '太空旅客',
    cancelButton: '取消',
    paddingTop: '.49rem',
    justifyContent: 'space-between'
  }


export default class SearchContainer extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.Alert = this.Alert.bind(this);
    }

    Alert(data){
        alert(data)
    }

    render() {
        return (
            <StyleSquareSearch>
                <SearchFunction searchStyle={parameter} methods={this.Alert}></SearchFunction>
                <div className="classify">
                    <strong>内容分类</strong>
                    <ul>
                        <li>
                            <img style={{width:'.14rem',height:'.11rem'}} src={textIco} alt=""/>
                            <span>文字</span>
                        </li>
                        <li>
                            <img style={{width:'.14rem',height:'.14rem'}} src={picIco} alt=""/>
                            <span>图片</span>
                        </li>
                        <li>
                            <img style={{width:'.17rem',height:'.17rem'}} src={audioIco} alt=""/>
                            <span>音频</span>
                        </li>
                        <li>
                            <img style={{width:'.16rem',height:'.14rem'}} src={vedioIco} alt=""/>
                            <span>视频</span>
                        </li>
                        <li>
                            <img style={{width:'.09rem',height:'.14rem'}} src={comIco} alt=""/>
                            <span>共创</span>
                        </li>
                    </ul>
                </div>
                <div className="topic">
                    <strong>热门话题</strong>
                    <ul>
                        <li>
                            <span>#如何度过一个有意义的暑假</span>
                        </li>
                        <li>
                            <span>#热到爆炸的天气</span>
                        </li>
                        <li>
                            <span>#一起看电影</span>
                        </li>
                        <li>
                            <span>#无滤镜晚霞</span>
                        </li>
                        <li>
                            <span>#七夕单身夜</span>
                        </li>
                        <li>
                            <span>#旅行与摄影</span>
                        </li>
                        <li>
                            <span>#一个只能在soul说的秘密</span>
                        </li>
                        <li>
                            <span>#元气满满的一天</span>
                        </li>
                        <li>
                            <span>#失恋</span>
                        </li>
                        <li>
                            <span>#脱单</span>
                        </li>
                        <li>
                            <span>#海滩</span>
                        </li>
                        <li>
                            <span>#可盐可甜得人儿</span>
                        </li>
                        <li>
                            <span>#撸猫撸猫撸猫撸猫撸猫撸猫</span>
                        </li>
                    </ul>
                </div>

            </StyleSquareSearch>
        )
    }
}
