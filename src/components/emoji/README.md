此组件暂存缺陷！技术够了再回来维护！

高阶组件：增强返回单个表情组件：此项暂时不用！

！注意！ 
引用：EmojiMart.jsx,为表情组！
 <EmojiMart 
    style={this.state.style} 
    handle={this.handleOnChange.bind(this)}>
</EmojiMart>

this.state = {
    可以传样式下去！
    style: {
        position: 'absolute',
        bottom: '0px',
    },
    emoji: '',
}

handleOnChange= async(emoji)=>{
        
        
        await this.setState(() => {
            return {
                emoji: emoji,
            }
        })
        // console.log(this.state.emoji.native)

        注意！表情为this.state.emoji.native，请使用它！
        let text = document.getElementById('emoji').innerHTML
        document.getElementById('emoji').innerHTML = text + this.state.emoji.native
    }