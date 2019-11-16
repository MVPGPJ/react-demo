import styled from 'styled-components'

/**
 *   自定义弹出框组件
 * 
 *   2019-08-08
 */

const StyleAlert = styled.div`
    width: 100%;
    height: 6.67rem;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom: ${props => props.isClickFilter ? '-6.67rem' : '0'};
    z-index: 9999;
    .full{
    position: absolute;
    width: 100%;
    height: 4.58rem;
    /* bottom: -4.58rem; */
    bottom: 0rem;
    background: #fff;
    color: #333;
    transition: .5s bottom ease;
    h3{
        padding-top: .25rem;
        text-align: center;
        font-size: .18rem;
    }
    .sexSelect{
        padding-top: .3rem;
        h4{
            padding-left: .25rem;
            font-size: .14rem;
        }
        ul{
            display: flex;
            width: 3.37rem;
            height: .39rem;
            margin: 0.2rem auto;
            border-radius: .5rem;
            background: rgb(237,237,237);
            text-align: center;
            overflow: hidden;
            li{
                width: 33.333%;
                height: 100%;
                line-height: .39rem;
                color: #333;
            }
            li:nth-child(2){
                border-left: #fff .02rem solid;
                border-right: #fff .02rem solid;
            }
            li.active{
                color: #fff;
                background: rgb(80,209,230);
            }
        }
    }

    .ageSelect{
        padding-top: .2rem;
        h4{
            padding-left: .25rem;
            font-size: .14rem;
        }
        ul{
            display: flex;
            width: 3.23rem;
            margin: 0.2rem auto;
            li{
                flex: none;
                height: .29rem;
                line-height: .29rem;
            }
            li:nth-child(1),li:nth-child(3){
                width: .29rem;
                font-size: .13rem;
                color: #333;
            }
            li:nth-child(2){
                width: 2.65rem;
                padding: 0 .1rem 0;
                .am-slider-wrapper{
                    width: 100%;
                    height: 100%;
                    .am-slider{
                        /* text-align: center; */
                        width: 98%;
                        height: 100%;
                        margin: 0!important;
                        padding-top: .1rem;
                        .am-slider-rail,.am-slider-track,.am-slider-step{
                            height: .11rem;
                        }
                        .am-slider-track{
                            background: rgb(87,225,226);
                        }
                        .am-slider-handle{
                            width: .29rem;
                            height: .29rem;
                            border: #fff .01rem solid;
                            background: rgb(87,225,226);
                        }
                    }
                }
            }
        }
    }

    .constellation{
        ul{
            display: flex;
            width: 3.2rem;
            height: .39rem;
            margin: 0 auto;
            border-radius: .4rem;
            overflow: hidden;
            text-align: center;
            li{
                width: 1.6rem;
                line-height: .39rem;
            }
            li:nth-child(1){
                margin-right: .01rem;
            }
            li:nth-child(2){
                margin-left: .01rem;
            }
            li.active{
                background: rgb(87,225,226);
                color: #fff;
            }
        }
    }
    .confirm{
        margin: 0.3rem auto;
        width: 3.2rem;
        height: .39rem;
        background: rgb(87,225,226);
        border-radius: .4rem;
        text-align: center;
        line-height: .39rem;
        color: #fff;
        font-size: .15rem;
    }
}
`

export default StyleAlert