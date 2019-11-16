import styled from 'styled-components'

import shareImg from 'assets/images/toTest/share@3x.png'

/**
 *   测一测界面测试的每个Item组件
 * 
 *   2019-08-08
 */

const StyleToTestItem = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    padding-top: .2rem;
    img{
        width: 3.55rem;
        height: 1.35rem;
    }
    .top-content{
        width: 2.95rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        position: absolute;
        top: 0.38rem;
        left: 0;
        right: 0;
        margin: auto;
        .test-title{
            width: 2.2rem;
            text-align: left;
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: .18rem;
                color: #fff;
            }
            span{
                font-size: .12rem;
                color: #fff;
            }
        }
        button{
            width: .55rem;
            height: .23rem;
            line-height: .23rem;
            padding-right: .1rem;
            background: url(${shareImg}) no-repeat .36rem center #000;
            background-size: .14rem .13rem;
            color: #fff;
            border: 0;
            border-radius: .1rem;
            border: .01rem #fff solid;
        }
        .isTest{
            width: 100%;
            text-align: right;
            padding-right: .1rem;
            padding-bottom: .15rem;
            span{
                color: #fff;
                font-size: .12rem;
            }
        }
    }
`

export default StyleToTestItem;