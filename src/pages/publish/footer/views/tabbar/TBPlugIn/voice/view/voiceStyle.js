import styled from 'styled-components'

import maikefeng from 'assets/images/publish/椭圆 2@3x.png'
import luyin from 'assets/images/publish/组 1@3x.png'

const VoiceST = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    background: #fff;
    position:relative;
    .huatong {
        width:.53rem;
        height:.53rem;
        border-radius:50%;
        margin-left:.48rem;
        background: url("${maikefeng}");
        background-size: .53rem .53rem;
    }
    .luyin {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
        width:.88rem;
        height:.88rem;
        border-radius:50%;
        vertical-align:center;
        background: url("${luyin}");
        background-size: .88rem .88rem;
    }
    .clickluyin {
        color: #333;
        font-size: .12rem;
        font-family: PingFangSC-Medium;
        position:absolute;
        bottom:.2rem;
        text-align:center;
        width:100%;
    }
    .time {
        color: #333;
        font-size: .15rem;
        font-family: PingFangSC-Heavy;
        position:absolute;
        top:.2rem;
        text-align:center;
        width:100%;
    }
    .luyinzhong {
        width: .87rem;
        height: .87rem;
        margin:0 auto;
    }
    .quxiao {
        margin:.74rem;
        width: .3rem;
        height:.24rem;
    }
    .bofang {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
        width:.87rem;
        height:.87rem;
    }

    .zanting {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
        width:.87rem;
        height:.87rem;
    }

    .queren {
        position:absolute;
        top:0;
        right:.74rem;
        bottom:0;
        margin:auto;
        width: .3rem;
        height:.24rem;
    }
    

`
export {
    VoiceST
}