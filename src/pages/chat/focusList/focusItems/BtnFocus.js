import Styled from 'styled-components'
const BtnSpan=Styled.span`
    background-color:#FE2C55;
    vertical-align:middle;
    border-radius:.05rem;
    line-height:.35rem;
    height:.35rem;
    border:1px solid blue;
    text-align:center;
    color:#fff;
    font-size:.1rem;
    padding:${(props)=>{return props.type==0?'.04rem .05rem .04rem .06rem;':'.04rem .1rem .04rem .11rem;'}}
`
export default BtnSpan
