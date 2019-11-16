import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './headerUI'

import { Toast } from 'antd-mobile';

import http from 'utils/http'
import moment from 'moment';

const mapStateToprops = state => {
  return {
    voice: state.getIn(['publish', 'voice']),
    img: state.getIn(['publish', 'img']),
    value: state.getIn(['publish', 'value']),
    address: state.getIn(['publish', 'address']),
  }
}

class HeaderContainer extends Component {

  constructor() {
    super()

    this.publish = this.publish.bind(this)
    this.goback = this.goback.bind(this)
  }

  render () {
    return (
      <Header
        goback={this.goback}
        publish={this.publish}
      />
    )
  }

  goback () {
    this.props.history.goBack()
  }

  async publish () {
    moment.locale('zh-cn');

    var url = '/senddynamic'
    var address = this.props.address
    var libname = ["快乐星球", "悲伤星球", "务实星球"]
    var randomNumber = Math.round( Math.random()*2 )
    var image = ''

    if(this.props.img.length > 0 && this.props.voice != '' ) {
      Toast.info('只能上传图片或音频的其中一种哦', 1, null, true)
    }

    if(this.props.img.length > 0) {
      this.props.img.forEach(item => {
        item = '&' + item
        image += item
      });
    }

    if(this.props.voice != '') {
      image = this.props.voice
    }

    var data = {
      note: this.props.value,
      libname: libname[randomNumber],
      time: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
      address,
      image
    }

    var res = await http.post(url, data)
    if (res.code == 0) {
      Toast.success('发布成功', 1, null, true)
      
      setTimeout(() => {
        this.props.history.push('/home/dynamic')
      },1000)
    } else {
      Toast.fail('发布失败TvT', 1, null, true)
    }
  }
}

export default connect(mapStateToprops)(HeaderContainer)


