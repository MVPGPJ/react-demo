import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VoiceST } from './voiceStyle'

import tuoyan from 'assets/images/publish/椭圆 3@3x.png'
import bofang from 'assets/images/publish/椭圆 1 拷贝 2@3x.png'
import quxiao from 'assets/images/publish/矩形 10@3x.png'
import queren from 'assets/images/publish/矩形 10 拷贝@3x.png'

import { voice } from '../../../../../../actionCreator'

const mapStateToprops = state => {
  return {
    voice: state.getIn(['publish', 'voice'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetVoivc (data) {
      dispatch(voice(data))
    }
  }
}

class Voice extends Component {
  constructor() {
    super()

    this.state = {
      isluyin: false,
      time: 0,
      endluyin: false,
      stopPlay: false,
    }

    this.localVoiceId = ''
    this.serverId = ''

    this.startRecord = this.startRecord.bind(this)
    this.endRecord = this.endRecord.bind(this)
    this.giveUpRecord = this.giveUpRecord.bind(this)
    this.playRecord = this.playRecord.bind(this)
    this.playPause = this.playPause.bind(this)
    this.clickConfirm = this.clickConfirm.bind(this)
  }

  render () {
    return (
      <VoiceST id='VoiceST'>
        {
          !this.state.endluyin ?
            (
              !this.state.isluyin ?
                (<>
                  <div className='huatong'></div>
                  <div className='luyin' onClick={this.startRecord}></div>
                  <div className='clickluyin' >点击录音</div>
                  <div className='time'>0S</div>
                </>)
                :
                (<>
                  <div className='time'>{this.state.time}S</div>
                  <img className='luyinzhong'
                    src={tuoyan}
                    onClick={this.endRecord}
                  />
                  <div className='clickluyin'>录音中</div>
                </>)
            )
            :
            (<>
              <div className='time'>{this.state.time}S</div>
              <img className='quxiao'
                src={quxiao}
                onClick={this.giveUpRecord}
              />
              <img className={this.state.stopPlay ? 'zanting' : 'bofang'}
                src={bofang}
                onClick={this.state.stopPlay ? this.playPause : this.playRecord}
              />
              <img className='queren' 
                src={queren}
                onClick = { this.clickConfirm }
              />
              <div className='clickluyin' >{this.state.stopPlay ? '点击停止' : '点击播放'}</div>
            </>)
        }
      </VoiceST>
    )
  }

  //点击录音切换界面
  startRecord () {
    this.setState({
      isluyin: true
    })

    this.timer = setInterval(() => {
      this.setState((state, props) => ({
        time: state.time + 1
      }))
    }, 1000)
  }

  //点击录音中，结束录音，到播放界面
  endRecord () {
    this.setState({
      endluyin: true,
      isluyin: false,
    })

    clearInterval(this.timer)
  }

  //点击播放按钮
  playRecord () {
    this.timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((state, props) => ({
          time: state.time - 1
        }))
      }
    }, 1000)

    this.setState({
      stopPlay: true
    })
  }

  //点击暂停
  playPause () {
    this.setState({
      stopPlay: false
    })

    clearInterval(this.timer)
  }

  //点击垃圾箱，放弃录音并初始化页面
  giveUpRecord () {
    this.setState({
      isluyin: false,
      time: 0,
      endluyin: false,
      stopPlay: false,
    })

    this.localVoiceId = ''
    this.serverId = ''

    clearInterval(this.timer)
  }

  //点击确认
  clickConfirm () {
    this.setState({
      isluyin: false,
      time: 0,
      endluyin: false,
      stopPlay: false,
    })

    this.localVoiceId = ''
    this.serverId = ''

    clearInterval(this.timer)
  }



  componentDidMount () {
    var that = this
        window.wx.ready( function () {

          document.querySelector('#VoiceST').addEventListener('click',async (e) => {

            //监听播放完毕调用事件
            window.wx.onVoicePlayEnd({
              success: function (res) {
                var localId = res.localId; // 返回音频的本地ID
                console.log('播放完毕')
                clearInterval(that.timer)
              }
            });

            //开始录音
            if (e.target.classList[0] === 'luyin') {
              window.wx.startRecord();
            }

            //停止录音
            if (e.target.classList[0] === 'luyinzhong') {
              window.wx.stopRecord({
                success: function (res) {
                  that.localVoiceId = res.localId;
                }
              });
            }

            //播放超过60s自动停止
            window.wx.onVoiceRecordEnd({
              complete: function (res) {
                that.localVoiceId = res.localId;
                that.endluyin()
              }
            });

            //播放
            if (e.target.classList[0] === 'bofang') {
              window.wx.playVoice({
                localId: that.localVoiceId // 需要播放的音频的本地ID，由stopRecord接口获得
              });
            }

            //停止播放
            if (e.target.classList[0] === 'zanting') {
              window.wx.stopVoice({
                localId: that.localVoiceId // 需要停止的音频的本地ID，由stopRecord接口获得
              });
            }
            //上传到微信服务器
            if (e.target.classList[0] === 'queren') {
              console.log(that.localVoiceId)
              window.wx.uploadVoice({
                localId: that.localVoiceId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                  that.serverId = res.serverId; // 返回音频的服务器
                  that.props.GetVoivc(that.serverId)
                }
              });

            }
          })
        })
      // })
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(Voice)

