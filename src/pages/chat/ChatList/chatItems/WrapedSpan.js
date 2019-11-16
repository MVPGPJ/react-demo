import Styled from 'styled-components'
import ellipsis from 'components/style/ellipsis.js'
const WrapedSpan = Styled.span`
    color:#999999;
    font-size:.15rem;
`
const EllipsisSpan=ellipsis({
    component: WrapedSpan,
    width:'2rem'
})

export default EllipsisSpan