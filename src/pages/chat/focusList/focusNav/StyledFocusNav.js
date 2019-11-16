import styled from 'styled-components'
const StyledFocusNav = styled.div`
    width:100%;
    height:.46rem;
    /* line-height:.64rem; */
    display:flex;
    div{
        flex:1;
        text-align:center;
        background-color:#fff;
        justify-content:space-between;
        display:flex;
        flex-direction:column;
        
        strong{
            height:.14rem;
            line-height:.14rem;
        }
        i{
            span{
                flex:1;
                width:auto;
                display:inline-block;
                height:.32rem;
                line-height:.32rem;
                font-size:.10rem;
                &.active{
                    color:#57E1E2;
                    border-bottom: 1px solid #57E1E2;
                }
            }
        }
        
    }
`
export default StyledFocusNav