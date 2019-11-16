import styled from 'styled-components'

/** 
 * 首页导航界面的样式表
 * 
 * 2019-07-22
*/

const StyleHome = styled.div`
        position: relative;
        z-index: 500;
        height: 100%;
        display: flex;
        flex-direction: column;
        main{
            flex: 1;
            width: 100%;
            overflow: hidden;
        }
        nav{
            height: .55rem;
            width: 100%;
            background-color: #fff;
            ul{
                display: flex;
                li{
                    flex: 1;
                    .link{
                        line-height: .25rem;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding-top: .05rem;
                        img{
                            width: .24rem;
                            height: .24rem;
                            /* background: red; */
                        }
                        .planet-img{
                            width: .31rem;
                            height: .235rem;
                        }
                        span{
                                font-weight: bold;
                                color: #333;
                            }
                        .ball{
                            background-color: rgb(102,255,255);
                            width: .5rem;
                            height: .5rem;
                            border-radius: 50%;
                            text-align: center;
                            line-height: .5rem;
                            position: absolute;
                            top: -.08rem;
                            left: 0;
                            right: 0;
                            margin: auto;
                            z-index: 200;
                            span{
                                color: #fff;
                            }
                        }
                        .top-ball{
                                width: .6rem;
                                height: .6rem;
                                border-radius: 50%;
                                text-align: center;
                                line-height: .6rem;
                                background-color: #fff;
                                position: absolute;
                                top: -.15rem;
                                /* left: .065rem; */
                                right: 0;
                                left: 0;
                                margin: 0 auto;
                                /* z-index: 99; */
                            }
                    }
                }
            }
        }
`

export default StyleHome