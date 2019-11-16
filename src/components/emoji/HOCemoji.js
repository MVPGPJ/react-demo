import  React , { Component } from 'react';

export default (Emoji,emoji) => {
    return class extends Component {
        constructor(props){
            super(props)
            this.state = {
                x : 0,
            }
        }
        render() {
            return (
                <>
                    <Emoji emoji={emoji}></Emoji>
                </>
            )
        }
    }
}