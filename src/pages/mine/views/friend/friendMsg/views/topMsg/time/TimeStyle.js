import styled from 'styled-components'

import border from 'components/style/border'

const TimeStyle = styled.div`
    margin-top: 0.32rem;
    text-align: center;
    color: #000;
    font-size: 0.1rem;  
`

const Border = styled.div`
    font-size: 0.1rem;  
    display: inline-block;
    height: 0.25rem;
    padding: 0 0.09rem 0 0.08rem;
    line-height: 0.25rem;
    background: rgba(53,53,53,0.2);
`
let TimeBorder = styled(border({
    component: Border,
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    borderRadius: 13
}))``
export {
    TimeStyle,
    TimeBorder
}
