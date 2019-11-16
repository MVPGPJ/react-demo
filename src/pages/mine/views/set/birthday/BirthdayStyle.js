import styled from 'styled-components'

const BirthStyle = styled.div`
    position: relative;
    z-index: 1000;
    background-color: #eee;
    height: 100%;
`

const DateTime = styled.div`
    padding: 0.12rem;
    height: 100%;
    background-color: #eee;
    .time{
        height: 4.4rem;
        background-color: #ffffff;
        border-radius: 0.25rem;
        padding: 0 0.35rem;
        .hint{
            width: 100%;
            padding-top: 0.4rem;
            text-align: center;
            font-weight: 500;
            font-size: 0.14rem;
        }
        .am-picker{
            margin-top: 0.3rem;
            .am-picker-col-item-selected {
                color: #57E1E2;
                font-size: 0.18rem!important;
            }
            .am-picker-col-item{
                font-size: 0.14rem;
                height: 34px;
                line-height: 34px;
            }
            .am-picker-col-indicator {

            }
        }
        .ht{
            margin-top: 0.3rem;
            padding-left: 0.2rem;
            img{
                width: 0.18rem;
                height: 0.17rem;   
                position: relative;
                top: -0.03rem;
            }
            span{
                padding-left: 0.2rem;
                color: #999999;
                font-size: 0.13rem;
            }
        }
    }
`

export {
    BirthStyle,
    DateTime
}