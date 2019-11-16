import styled from 'styled-components'

import border from 'components/style/border'

const HeaderStyle = styled.header`
    height: 0.44rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    >div{
        float: right
    }
`
const From = styled.div`
    margin-left: 0.1rem;
    flex: 1;
    height: .25rem;
    display: flex;
    align-items: center;
`
const FromB = styled.div`
    height: .25rem;
    display: flex;
    align-items: center;
    background: rgba(53,53,53,0.2);
    img{
        margin-left: 0.05rem;
        width: .23rem;
        height: .18rem;
        vertical-align: bottom;
    }
    p{
        font-size: 0.1rem;
        height: 100%;
        color: #fff;
        line-height: .27rem;
        padding-left: 0.06rem;
        padding-right: 0.06rem
    }
`
const Gold = styled.div`
    margin-left: 0.1rem;
    height: 0.25rem;
    display: flex;
    align-items: center;
    margin-right: 0.07rem;
    background: rgba(53,53,53,0.2);
    color: #fff;
    img{
        margin-left: 0.05rem;
        width: .17rem;
        height: .17rem;
        vertical-align: middle;
    }
    p{
        font-size: 0.15rem;
        line-height: .44rem;
        display: flex;
        align-items: center;
        margin-left: 0.06rem;
        margin-right: 0.06rem
    }
`
const Firends = styled.div`
    display: flex;
    height: 0.25rem;
    align-items: center;
    background: rgba(53,53,53,0.2);
    color: #fff;
    img{
        margin-left: 0.06rem;
        width: .15rem;
        height: .16rem;
    }
    p{
        font-size: 0.1rem;
        line-height: .44rem;
        margin-left: 0.01rem;
        white-space: nowrap;
        margin-right: 0.07rem;
    }
`
const Setting = styled.div`
    margin-right: 0.15rem;
    margin-left: 0.07rem;
    width: .25rem;
    height: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(53,53,53,0.2);
    img{
        width: .15rem;
        height: .15rem;
    }
`

const FromBorder = styled(border({
    component: FromB,
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    borderRadius: 13
}))``

const GoldBorder = styled(border({
    component: Gold,
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    borderRadius: 13
}))``

const FirendsBorder = styled(border({
    component: Firends,
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    borderRadius: 13
}))``

const SettingBorder = styled(border({
    component: Setting,
    borderWidth: '1px',
    borderColor: '#FFFFFF',
    borderRadius: 13
}))``

export {
    HeaderStyle,
    From,
    GoldBorder,
    FirendsBorder,
    SettingBorder,
    FromBorder
}