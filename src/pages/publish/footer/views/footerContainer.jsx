import React, { Component } from 'react'

import { connect } from 'react-redux'

import FooterUI from './footerUI'

import { voice, img, localid, address } from '../../actionCreator'

//解决fetch访问百度接口跨域问题
import fetchJsonp from 'fetch-jsonp'

const mapStateToprops = state => {
    return {
        voice: state.getIn(['publish', 'voice']),
        img: state.getIn(['publish', 'img']),
        localid: state.getIn(['publish', 'localid']),
        address: state.getIn(['publish', 'address']),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        amendVoice (data) {
            dispatch(voice(data))
        },

        amendImg (data) {
            dispatch(img(data))
        },
        amendLocalId (data) {
            dispatch(localid(data))
        },
        amendAddress (data) {
            dispatch(address(data))
        },
    }
}

class FooterContainer extends Component {
    constructor() {
        super()
        this.state = {
            setUp: 'active',
            // ceshi: ''
        }

        this.latitude = '38.76623'
        this.longitude = '116.43213'

        this.checkoutAddress = this.checkoutAddress.bind(this)
        this.setUpClick = this.setUpClick.bind(this)
        this.stopClick = this.stopClick.bind(this)
        this.labelClick = this.labelClick.bind(this)
        this.moreLabelClick = this.moreLabelClick.bind(this)
        this.cancelType = this.cancelType.bind(this)
        this.clickplay = this.clickplay.bind(this)
        this.ShfitSomePic = this.ShfitSomePic.bind(this)
    }
    render () {
        var setUp = this.state.setUp
        return (
            <FooterUI
                // ceshi = {this.state.ceshi}
                {...this.props}
                imgs={this.imgs}
                setUp={setUp}
                checkoutAddress={this.checkoutAddress}
                setUpClick={this.setUpClick}
                stopClick={this.stopClick}
                labelClick={this.labelClick}
                moreLabelClick={this.moreLabelClick}
                cancelType={this.cancelType}
                clickplay={this.clickplay}
                ShfitSomePic={this.ShfitSomePic}
            ></FooterUI>
        )
    }

    setUpClick (e) {
        this.setState({
            setUp: ('active' === e.currentTarget.dataset.id ? '' : 'active')
        })
    }

    //让事件只发生在该元素上，子元素不发生
    stopClick (e) {
        e.stopPropagation()
    }

    //单选按钮
    labelClick (e) {
        if (e.target.className === 'radio iconfont') {
            var a = document.querySelectorAll('.radio')
            a.forEach((item) => {
                item.setAttribute('class', 'radio iconfont')
            })
            e.target.className = 'radio iconfont icon-check-circle'
        } else {
            e.target.className = 'radio iconfont'
        }
    }

    //多选按钮
    moreLabelClick (e) {
        if (e.target.className === 'iconfont') {
            e.target.className = 'iconfont icon-check-circle'
        } else {
            e.target.className = 'iconfont'
        }
    }

    //取消录音
    cancelType () {
        this.props.amendVoice('')
    }

    //点击播放
    clickplay () {
        var that = this
        window.wx.ready(function () {

            //下载音频
            window.wx.downloadVoice({
                serverId: that.props.voice,
                isShowProgressTips: 1,
                success: function (res) {
                    that.localId = res.localId;
                }
            });

            //播放音频
            window.wx.playVoice({
                localId: that.localId
            });
        })
    }

    //点击选择地址
    checkoutAddress () {
        var that = this
        window.wx.openLocation({
            latitude: that.latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: that.longitude, // 经度，浮点数，范围为180 ~ -180。
            address: '', // 地址详情说明
            scale: 16, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
    }

    //取消某一个图片
    ShfitSomePic (index) {
        //修改本地图片
        var localid = this.props.localid
        localid.splice(index, 1)
        this.props.amendLocalId(localid)

        //修改服务器图片
        var imgLocal = this.props.img
        imgLocal.splice(index, 1)
        this.props.amendImg(imgLocal)

        //强制刷新页面
        this.forceUpdate()

        // var that = this
        // window.wx.downloadImage({
        //     serverId: this.props.img[0]||'', // 需要下载的图片的服务器端ID，由uploadImage接口获得
        //     isShowProgressTips: 1, // 默认为1，显示进度提示
        //     success: function (res) {
        //     var localId = res.localId; // 返回图片下载后的本地ID
        //     console.log(localId)
        //     that.setState({
        //         ceshi:localId
        //     } )
        //     }
        //     });
    }

    componentDidMount () {
        var that = this
        window.wx.ready(function(){
            window.wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    
                    that.latitude = res.latitude
                    that.longitude = res.longitude
                    
                    geocoder(latitude, longitude)
                }
            });

            // 将坐标转换为地址
            async function geocoder(latitude, longitude) {
                var baseurl = 'http://api.map.baidu.com/reverse_geocoding/v3/?'
                 
                var location = latitude + ',' + longitude 
                var ak =  'GLNBpKOcB1Nsl8Gs4XmeSpAe9O5OczSN'
                var coordtype =  'wgs84ll'
                var output =  'json'
                var extensions_town =  true
                
                var url = `${baseurl}location=${location}&ak=${ak}&coordtype=${coordtype}&output=${output}&extensions_town=${extensions_town}`
                
                fetchJsonp(url, {
                    headers:{ Accept: 'application/json',},
                    jsonCallbackFunction:'showLocation'
                })
                .then( response => response.json() )
                .then( data => {
                     that.props.amendAddress(data.result.formatted_address)
                })
            }

            
            
        });
       
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(FooterContainer)
// 40.22077,116.23128&key=6VQBZ-GRSKI-5AEGG-5FYLQ-QW2U5-KFBXX