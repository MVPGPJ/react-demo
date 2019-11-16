import styled from 'styled-components'

var Textarea = styled.textarea`
    border: 0;
    flex:1;
    padding: .08rem .2rem;
    font-size: .12rem;
    font-family:PingFangSC-Medium,PingFang-SC-Bold;
    caret-color:#57e1e2;
    /* word-wrap:break-word;
    word-break:break-all; */
    resize:none;//去右下角灰点
    ::placeholder {
        /* placeholder颜色  */
       color: #B7B7B7;
       /* placeholder字体大小  */
       font-size: 12px;
       /* placeholder位置  */
       font-family:PingFangSC-Medium;
    }
`

export {
    Textarea
}