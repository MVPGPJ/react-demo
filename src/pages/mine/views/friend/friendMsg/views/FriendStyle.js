import styled from 'styled-components'

const FStyle = styled.div`
    height: 100%;
    overflow: hidden;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2000;
    >div{
        position: relative;
        z-index: 2000;
    }
    .friend{
        .buttom{
            display: flex;
            justify-content: center;
            align-items: center;
            >div{
                height: 0.3rem;
                width: 0.95rem;
                background-color: #57E1E2;
                text-align: center;
                color: #fff;
                border-radius: 0.05rem;
                line-height: 0.3rem;
                margin: 0.2rem 0.2rem;
            }
            .attention{
            
            }
            .chat{
                
            }
        }
    }
`
export {
    FStyle
}