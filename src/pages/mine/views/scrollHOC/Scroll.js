import React, { Component } from 'react';
import styled from 'styled-components';
import BScroll from 'better-scroll';

const Scroll = styled.div`
    height: 100%;
    overflow: hidden;
    background-color: #eee;
    display: flex;
    flex-direction: column;
`
export default (Comp) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                scaleHegiht: 0
            }
        }

        render() {
            return (
                
                <Scroll className="bScroll">
                    <Comp scaleHegiht={this.state.scaleHegiht}/>
                </Scroll>
            );
        }
        componentDidMount() {
            let bs = new BScroll('.bScroll', {
                scrollY: true,
                click: true,
                probeType: 3
            })
            bs.on('scroll', (e) => this.onScroll(e))
            console.log(1)
        }

        onScroll(e) {
            this.setState({
                scaleHegiht: this.scaleHegiht = e.y
            })
        }
    }

}