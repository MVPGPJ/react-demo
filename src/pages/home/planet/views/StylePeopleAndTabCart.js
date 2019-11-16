import styled from 'styled-components'

/**
 * 在线人数和选项卡样式组件
 *  
 * 2019-07-25
 */

const StylePeopleAndTabCart = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .people-live{
        text-align: center;
        color: #fff;
        font-size: .18rem;
        padding-top: .1rem;
        span{
            color: rgb(102,255,255);
            font-size: .16rem;
        }
    }
    .tab-carts{
        /* padding-top: .5rem; */
        ul{
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            li{
                padding: .1rem 0 0 0rem;
                text-align: left;
                border-radius: .04rem;
                width: .77rem;
                height: .98rem;
                background: linear-gradient(to right, rgb(252,166,138) , rgb(252,177,122));
                position: relative;
                img{
                    width: .33rem;
                    height: .33rem;
                    margin-left: .06rem;
                    /* border-radius: 50%; */
                }
                .img-div{
                    /* border: 0; */
                    height: .33rem;
                    display: flex;
                    /* justify-content: flex-start; */
                    align-items: center;
                    .img-overlap{
                        width: .37rem;
                        height: .37rem;
                        position: absolute;
                    }
                    .img-overlap:nth-child(2){
                        width: .33rem;
                        height: .33rem;
                        left: .15rem;
                        z-index: 100;
                    }
                    .img-overlap:nth-child(3){
                        width: .33rem;
                        height: .33rem;
                        left: .3rem;
                    }
                }
                p:nth-child(2){
                    padding-top: .1rem;
                    padding-left: .05rem;
                    color: #fff;
                    font-size: .13rem;
                }
                p:nth-child(3){
                    /* margi */
                    position: absolute;
                    width: 200%;
                    color: #fff;
                    font-size: .14rem;
                    transform: scale(0.6);
                    left: -.26rem;
                    bottom: 0.05rem;
                }
            }
            li:nth-child(2){
                background: linear-gradient(to right, rgb(144,117,212) , rgb(133,120,225));
            }
            li:nth-child(3){
                background: linear-gradient(to right, rgb(66,117,213) , rgb(97,167,213));
            }
            li:nth-child(4){
                background: linear-gradient(to right, rgb(222,142,163) , rgb(222,142,150));
            }
        }
    }
`

export default StylePeopleAndTabCart