import React, { Component } from 'react';
import { ItemStyle } from './ItemStyle'
import ItemUI from './ItemUI'

class Item extends Component {
    state = {
        data: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.myselfData && nextProps.myselfData.dynamicEnds){
           return {
            data : nextProps.myselfData.dynamicEnds
           }
        }
        return null;
    }
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