import styled from 'styled-components'

const StyleThemeButton = styled.div`
line-height:.5rem;
font-weight:600;
text-align:center;
width:.5rem;
height:.5rem;
border-radius:.25rem;
color: ${ props => (props.background)}; 
background:${props => (props.background==='black'?'white':'black')};
position: fixed;
z-index:999; 
top:100px; 
right:20px;
opacity: .5;
`

export default StyleThemeButton