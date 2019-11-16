import React, {Component} from 'react'
import BScroll from 'better-scroll'
import http from 'utils/http'
import { Toast } from 'antd-mobile';
// import { promises } from 'dns';

class Scroll extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.flage = true  //判断是否还有数据
    }

    //-------------------------------------------------------------------
    //获取图片
    getImgs(serverId){
        return new Promise((resolve, reject)=>{
            window.wx.downloadImage({
                serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var localId = res.localId; // 返回图片下载后的本地ID
                    resolve(localId)
                }
            });
        })
    }

    getLocalImg(localId){
        return new Promise((resolve,reject)=>{
            window.wx.getLocalImgData({
                localId, // 图片的localID
                success: function (res) {
                var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                resolve(localData)
                }
            });
        })
    }

    //获取语音
    // getVoice(serverId){
    //     return new Promise((resolve,reject)=>{
    //         window.wx.downloadVoice({
    //             serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
    //             isShowProgressTips: 1, // 默认为1，显示进度提示
    //             success: function (res) { 
    //             var localId = res.localId; // 返回音频的本地ID
    //             resolve(localId)
    //             }
    //         });
    //     })
    // }


    
    //---------------------------------------------------------------------

    async getSquareDate(pagenum,pagesize){
        let focus = '',
            time = ''
        switch(this.props.tabNumber){
            case 0 :
                focus = 'focus'
                time = 'desc'
                break
            case 1 :
                focus = ''
                time = ''
                break
            case 2 :
                focus = ''
                time = 'desc'
                break
        }
        let result = await http.post('/alldynamic',{
            "focus": focus,
            "time": time,
            "pagenum":pagenum,
            "pagesize":pagesize
        })
        //---------------------------------------------
        result instanceof Array && result !==[] && await result.map(async (item,index)=>{
            if(item.image && item.image.split('&').length>1){
                let imgArr = item.image.split('&').slice(1)
                item.image = []
                imgArr.forEach(async (value, index) => {
                    let img = await this.getImgs(value)
                    img = await this.getLocalImg(img)
                    //将从微信或取得图片替换掉原请求数据中的字符串
                    item.image.push(img) 
                });

            }else if(item.image){
                // console.log(2)
            }
        })
        return result
    }
    async componentDidMount(){
        Toast.loading('Loading...',3,'',false)
        let pagenum = 1
        let result = await this.getSquareDate(pagenum,5)
        if(this.unmount) {
            return;
        }
        Toast.hide()
        let _tem = !result.error&&result instanceof Array  ? this.setState({list: [...this.state.list,...result]}) : ''
        this.timer = setTimeout(()=>{
            let bScroll = new BScroll(this.props.fatherSe,{
                scrollY: true,
                click: true,
                pullUpLoad: true,
            })
    
            bScroll.on('pullingUp',async ()=>{
                pagenum++
                Toast.loading('Loading...',30)
                let result = this.flage && await this.getSquareDate(pagenum,5)
                if(!result.length){
                    this.flage = false
                    Toast.offline('没有更多内容了',2)
                    bScroll.finishPullUp()
                    return 0
                }
                this.setState({list: [...this.state.list,...result]})
                Toast.hide()
                bScroll.finishPullUp()
                bScroll.refresh()
            })
        },100)

    }

    render(){
        return(
            <>
                {this.props.render(this.state)}
            </>
        )
    }

    componentWillUnmount(){
        Toast.hide()
        clearTimeout(this.timer)
        this.unmount = true
    }
}



export default Scroll
