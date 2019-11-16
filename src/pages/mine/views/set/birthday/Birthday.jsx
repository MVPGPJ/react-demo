import React, { Component } from 'react';

import { DatePickerView } from 'antd-mobile';
import { Toast, WingBlank } from 'antd-mobile';

import { Header } from '../../header/'
import { DateTime } from './BirthdayStyle'
import http from 'utils/http'
import Animate from 'components/high-order/Animate'

let mine = "/mine"

const nowTimeStamp = Date.now();
const now = new Date('1998-03-04');
let minDate = new Date('1950-01-01');
const maxDate = new Date(nowTimeStamp);

function showToastNoMask(msg) {
    Toast.info(msg, 2, null, false);
}

class Birthday extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            TopMsg: {
                // left: '222',
                center: '更改生日',
                right: '完成',
                Way: this.handleWay.bind(this)
            },
            value: '1998-03-04',
            time: now,
        }
    }
    
    render() {
        return (
            <>
                <Header TopMsg={this.state.TopMsg}></Header>
                <DateTime>
                    <div className="time">
                        <div className="hint">选择日期</div>
                        <DatePickerView
                            mode="date"
                            minDate={minDate}
                            maxDate={maxDate}
                            value={this.state.time}
                            onChange={time => this.setState({ time })}
                            onValueChange={this.onValueChange}
                        />
                        <div className="ht">
                            <img src={require('assets/images/mine/ben.png')} alt=""/>
                            <span>生日是重要信息，只能改一次哟。</span>
                        </div>
                    </div>
                    <WingBlank></WingBlank>
                </DateTime>
                
            </>
        );
    }
    onValueChange = (...args) => {
        let year = args[0][0]
        let month = args[0][1]*1 + 1
        let day = args[0][2]
        let birth = year+"-"+month+"-"+day
        this.setState({ 
            value: birth
        });
    };
    async handleWay() {
        if(this.state.value === '1998-03-04'){
            showToastNoMask('生日修改成功,即将返回')
            setTimeout(() => {
                    this.props.history.push(mine)
            }, 1200)
        }
        if(this.state.value !== '1998-03-04'){
            Toast.loading('Loading...');
            let result = await http.get('/modifyinfo', {
                birth: this.state.value
            })
            Toast.hide();
            if (result.code === 1) {
                showToastNoMask('生日修改失败,请稍后再试')
            }
            if (result.code === 0) {
                showToastNoMask('生日修改成功,即将返回')
                setTimeout(() => {
                    this.props.history.push(mine)
                }, 1200)
            }
        } 
        
    }
}

export default Animate(Birthday);




