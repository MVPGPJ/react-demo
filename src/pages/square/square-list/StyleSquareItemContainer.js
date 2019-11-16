import styled from 'styled-components'

const StyleSquareItemContainer = styled.div`
    background: ${props=>( props.backgroundColor )} !important;
    h6,i,b{
        font-weight: normal;
        font-style: normal;
    }
    padding:.1rem;
    padding-top: 0;
    flex: 1;
`
export default StyleSquareItemContainer