import styled from 'styled-components'


const Emoji = styled.div`
    width:100%;
    section{
        width:100%!important;
        border:0;
        div:nth-of-type(1){
            display:none;
        }
        >section{
            display:none;
        }
        div:nth-of-type(2){
            padding: 0;
            height: 2.8rem;
            section:nth-of-type(2){
                display:none;
            }
            section{
                ul{
                    display:flex;
                    flex-wrap: wrap;
                    justify-content:space-between;
                    li{
                        button{
                            padding: 11px;
                            span{
                                width:26px!important;
                                height:26px!important;
                            }
                        }
                        button:hover::before{
                                background-color: #FFFFFF;
                        }
                    }
                }
            }
        }
    }
`

export {
    Emoji
}