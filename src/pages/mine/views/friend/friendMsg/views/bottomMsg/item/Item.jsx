import React, { Component } from 'react';
import { ItemStyle } from './ItemStyle'
import ItemUI from './ItemUI'

class Item extends Component {
    state = {
        data: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.friendData && nextProps.friendData.dynamicEnds){
           return {
            data : nextProps.friendData.dynamicEnds
           }
        }
        return null;
    }
    
    

    render() {
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