import React, { Component } from 'react';
import { ItemStyle } from './ItemStyle'
import ItemUI from './ItemUI'

let _data = []


class Item extends Component {
    state = {
        data: [
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
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.myselfData && nextProps.myselfData.dynamicEnds){
    //        return {
    //         data : nextProps.myselfData.dynamicEnds
    //        }
    //     }
    //     return null;
    // }
    render() {
        // console.log(this.props)
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