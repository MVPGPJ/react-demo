import styled from 'styled-components'

import border from 'components/style/border'

const ItemStyle = styled.div`
    .item{
        margin-left: 0.20rem;
        display: flex;
        width: 2.7rem;
        justify-content: space-between;
        .progressBar{
            width: 0.13rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .firstLine{
                height: 0.4rem;
                width: 0.03rem;
                background-color: #cccccc;
            }
            .mark{
                height: 0.13rem;
                width: 0.13rem;
            }
            .nextLine{
                flex: 1;
                width: 0.03rem;
                background-color: #cccccc;
                text-align: center;
            }
        }
        .dynamic{
            margin-top: 0.2rem;
            min-height: 0.57rem;
            width: 2.5rem;
            display: flex;
            .arrows{
                margin-top: 0.16rem;
                width: 0;
                height: 0;
                border: 0.1rem solid;
                border-color: transparent #fff transparent transparent;
            }
            .info{
                flex: 1;
                width: 100%;
                height: 100%;
                background: #fff;
                border-radius: 0.1rem;
                padding: 0 0.1rem 0 0.1rem;
                .dateTime{
                    margin-top: 0.1rem;
                    font-size: 0.1rem;
                    color: #ccc;
                }
                .msg{
                    margin-top: 0.12rem;
                    margin-bottom: 0.10rem;
                    img{
                        width: 1.9rem;
                        height: 1.05rem;
                        margin-top: 0.06rem;
                    }
                    p{
                        color: #333333;
                        font-size: 0.13rem;
                    }
                }
            }
        }
    }
`

const rflag = styled.div`
    height: 0.13rem;
    width: 0.13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .rflag{
        width: 0.07rem;
        height: 0.07rem;
        background-color: #2CF9E3;
        border-radius: 50%;
    }
`

const RFlag = styled(border({
    component: rflag,
    borderWidth: '1px',
    borderColor: '#2CF9E3',
    borderRadius: 13
}))``

export {
    ItemStyle,
    RFlag
}