import React, { Component } from 'react';
import { Emoji } from 'emoji-mart'
class OneEmoji extends Component {
    render() {
        return (
            <Emoji
                set={'apple'}
                //请在父组件数据中定义emoji字段
                emoji={this.props.emoji}
                size={26}
                fallback={(emoji, props) => {
                    return emoji ? `:${emoji.short_names[0]}:` : props.emoji
                }}
            />
        );
    }
}


export default OneEmoji;

