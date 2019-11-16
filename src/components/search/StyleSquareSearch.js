import styled from "styled-components"

const StyleSquareSerach = styled.div`
    padding-left: .2rem;
    padding-right: .2rem;
    .classify{
        margin-top: .25rem;
        strong{
            color: #333;
        }
        ul{
            display: flex;
            margin-top: .17rem;
            justify-content: space-between;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: .12rem;
                justify-content: space-between;
                height: .36rem;
                span{
                    line-height: .12rem;
                }
            }
        }
    }
    .topic{
        margin-top: .20rem;
        strong{
            color: #D33737;
            font-size: .12rem;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            margin-top: .22rem;
            li{
                background: #ccc;
                border-radius: .08rem;
                padding-left: .1rem;
                padding-right: .1rem;
                margin-right: .1rem;
                opacity: .3;
                margin-bottom: .12rem;
            }
        }
    }
`

export default StyleSquareSerach