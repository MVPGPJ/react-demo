import React, { Component } from 'react'
import StyleThemeButton from './StyleThemeButton'

export default class ThemeButton extends Component {
    constructor(props){
        super(props)
        this.state={
            themeColor: ''
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        const {background} = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (background === 'black') {
            return {
              themeColor:'light',
            }
        }
        if (background === 'white') {
            return {
              themeColor:'dark',
            }
        }
        // 否则，对于state不进行任何操作
        return null;
    }

    hover(){
        console.log(this.refs)
        this.refs.themebutton.right = "-0.1rem"
    }

    render() {
        return (
            <StyleThemeButton
                ref="themebutton"
                className="theme-button" 
                background={this.props.background} 
                onMouseOver={this.hover.bind(this)} 
                onClick={this.props.changeTheme.bind(null,this.state.themeColor)}
            >
            {this.state.themeColor}
            </StyleThemeButton>
        )
    }
}
