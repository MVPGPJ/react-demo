import styled from 'styled-components'
import Animate from 'components/high-order/Animate'
const AllHeadWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.3);
`
const HeadWrap = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    width: 40%;
    background-color: white;
    overflow: auto;
    padding: 0.1rem 0;
    .img-wrap {
        width: 80%;
        margin: 0.1rem auto;
        padding-top: 80%;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`
const AniHeadWrap = Animate(HeadWrap)

export {
    AllHeadWrap,
    HeadWrap,
    AniHeadWrap
}