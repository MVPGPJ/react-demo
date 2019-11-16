import React, { Component } from 'react'
import styled from 'styled-components'
// import voicePic from 'assets/images/square/voice.gif'
import voicePic from 'assets/images/square/voice2.png'
import voiceactive from 'assets/images/square/voiceactive.gif'

const VoiceStyle = styled.div`
background: #57E1E2;
width: 1.36rem;
height: .25rem;
border-radius: .2rem;
    img{
    width: 1.36rem;
    }
`
export default class Voice extends Component {
    constructor(props){
        super(props)
        this.state = {
            voiceStatus: false
        }
        this.clickplay = this.clickplay.bind(this)
    }

//===============================================================================
    // componentDidMount () {
    //     fetch('http://red-mi.xyz/jsapi')
    //     .then((response) => {
    //       console.log(response)
    //       return response.json()
    //     })
    //     .then((result) => {
    //       window.wx.config({
    //         // debug: true,                  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: result.appId,          // 必填，公众号的唯一标识
    //         timestamp: result.timestamp,  // 必填，生成签名的时间戳
    //         nonceStr: result.nonceStr,    // 必填，生成签名的随机串
    //         signature: result.signature,  // 必填，签名
    //         jsApiList: [
    //           "scanQRCode",               //扫一扫接口
    //           "chooseImage",              //拍照或从手机相册中选图接口
    //           'startRecord',              //开始录音接口
    //           'stopRecord',               //停止录音接口
    //           'onVoiceRecordEnd',         //监听录音自动停止接口
    //           'playVoice',                //播放语音接口
    //           'stopVoice',                //停止播放接口
    //           'uploadVoice',              //上传语音接口
    //           'downloadVoice',            //下载语音接口
    //         ]
    //       })
    //     })
    // }
//=========================================================================


//==================================================================================
//  点击播放
clickplay () {
    this.setState((prestate)=>{
        return {voiceStatus: !prestate.voiceStatus}
    })
    console.log(this.props.voiceId)
    var that = this

//     window.wx.ready(function () {
//     //下载语音组件
//         window.wx.downloadVoice({
//             serverId: that.props.voice, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
//             isShowProgressTips: 1, // 默认为1，显示进度提示
//             success: function (res) {
//                 that.localId = res.localId; // 返回音频的本地ID
//             }
//         });
//     //播放语音组件
//         window.wx.playVoice({
//             localId: that.localId // 需要播放的音频的本地ID，由stopRecord接口获得
//         });
//     }) 
}
//====================================================================================

    render() {
        return (
            <VoiceStyle onClick={this.clickplay}>
                <img style={{height: this.state.voiceStatus ? ".3rem" : ".25rem"}} src={this.state.voiceStatus ? voiceactive : voicePic } alt=""/>
            </VoiceStyle>
        )
    }
}
