import React from 'react';

import { RFlag } from './ItemStyle'

export default (props) => {
    return(
        <div className="item">
            <div className="progressBar">
                <div className="firstLine"></div>
                <RFlag hasBorder="true" className="mark">
                    <div className="rflag"></div>
                </RFlag>
                <div className="nextLine"></div>
            </div>
            <div className="dynamic">
                <div className="arrows"></div>
                <div className="info">
                    <div className="dateTime">
                        2019-07-20 23:50:01
                    </div>
                    <div className="msg">
                        <p>{props.data.note}</p>
                        <img src={require('assets/images/mine/test.png')} alt=""/>
                        {/* <img src={require('assets/images/mine/test.png')} alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}