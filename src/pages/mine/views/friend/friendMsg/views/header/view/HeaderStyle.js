import styled from 'styled-components'

const HeaderStyle = styled.div`
    height: 0.44rem;
    width: 100%;
    padding: 0 0.12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back{
        img{
            width: 0.1rem;
            height: 0.18rem;
        }
    }
    .more{
        img{
            width: 0.24rem;
            height: 0.06rem;
        }
    }
`
export {
    HeaderStyle
}