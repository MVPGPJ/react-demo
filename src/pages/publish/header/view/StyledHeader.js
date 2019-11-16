import styled from 'styled-components'
import border from 'components/style/border'
import img from 'assets/images/publish/返回@3x.png'
var Head1 = styled.div`
    width:100% ;
    height:.44rem;
    background: #fff;
    flex-direction:column;
    .header_b {
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .header_goBack_icon {
            width:.15rem;
            height:.15rem;
            margin-left:.11rem;
            background: url(${img}) no-repeat;
            background-size:.15rem .15rem;

        }

        .issue {
            margin-right:.1rem;
            font-size:.15rem;
            font-weight:560;
            color:#333333;
            font-family:PingFangSC-Medium;
        }
    }
`
var Head = border({
    component:Head1,
    borderWidth:'0 0 1px 0',
    borderStyle:'solid',
    borderColor:'#ccc',
    borderRadius:0
})

export default Head