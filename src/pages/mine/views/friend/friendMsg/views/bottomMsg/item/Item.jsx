import React, { Component } from 'react';
import { ItemStyle } from './ItemStyle'
import ItemUI from './ItemUI'


let _data = [
    {
        note: '北京的春天还是刮着寒风，北京的夏天闷热潮湿，北京的秋天黄沙飘扬，北京的冬天依旧寒冷',
        id: 1
    },
    {
        note: '那一碗板面，那一碗魔鬼豆浆，那一碗欢乐的酒，都已过去',
        id: 2
    },
    {
        note: '别翻了，你也有故事，只是你没说',
        id: 3
    }
]
// for (let i = 0; i <= 2; i++) {
//     _data.push({
//         note: '北京的春天还是刮着寒风，北京的夏天闷热潮湿，北京的秋天黄沙飘扬，北京的冬天依旧寒冷',
//         id: i
//     })
// }
class Item extends Component {

    state = {
        data: _data
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.friendData && nextProps.friendData.dynamicEnds){
    //        return {
    //         data : nextProps.friendData.dynamicEnds
    //        }
    //     }
    //     return null;
    // }



    render () {
        // console.log(this.state.data,1)
        return (
            <ItemStyle>
                {
                    this.state.data.map(item => {
                        return <ItemUI data={item} key={item.id}></ItemUI>
                    })
                }
            </ItemStyle>
        );
    }
}

export default Item;