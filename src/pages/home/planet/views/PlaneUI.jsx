import React, { PureComponent } from 'react'

import StylePlaneUI from './StylePlaneUI'

import PeopleAndTabCart from './PeopleAndTabCart'


/**
 * 首页中星球界面的主要内容显示区组件
 * 
 * 2019-07-22
 */


export default class PlaneUI extends PureComponent {

    constructor(props){
        super(props)
        this.flag = 0
    }

    render() {
        return (
            <StylePlaneUI>
                <div className="tagBall">
                    {
                        this.props.options.data.map(value => ((
                            <li className="tag" key={value.id} onClick={this.handlClick.bind(this,value.id)}>
                                <div className='eleEvery'>
                                    <p>
                                        {value.userName}
                                    </p>
                                </div>
                                <span
                                    className={value.isTwinkle ? 'active' : ''}
                                    style={{ background: value.twinkleColor ? value.twinkleColor : "#D2B48C" }}
                                >
                                </span>
                            </li>
                        )))
                    }
                </div>
                {/* 在线人数和选项卡组件 */}
                <PeopleAndTabCart isClickCart={this.props.isClickCart}></PeopleAndTabCart>
            </StylePlaneUI>
        )
    }

    handlClick(id, e) {
        e.preventDefault()
        this.props.options.callback.call(this,id)
    }


    componentDidUpdate() {
                if(this.flag > 2){
                    return false
                }
                let sizeWidth = document.documentElement.clientWidth,
                    sizeHeight = document.documentElement.clientHeight;
                // tagEle 为每个转动元素的标签
                // paper  为整个球的大小
        
                let tagEle = "querySelectorAll" in document ? document.querySelectorAll(".tag") : getClass("tag"),
                    paper = "querySelectorAll" in document ? document.querySelector(".tagBall") : getClass("tagBall")[0],
                    RADIUS = 140,               // 整个球的大小
                    fallLength = 500,           // 球的3d呈现程度
                    tags = [],                  // 每个转动元素的实例对象集合
                    angleX = Math.PI / 2000,     //初始左右转动的速度
                    angleY = Math.PI / 2000,      //初始上下转动的速度
                    CX = paper.offsetWidth / 2,
                    CY = paper.offsetHeight / 2,
                    EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
                    EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;
        
                if (sizeWidth <= 320 && sizeHeight <= 568) {
                    RADIUS = 110;
                }
        
                function getClass(className) {
                    var ele = document.getElementsByTagName("*");
                    var classEle = [];
                    for (var i = 0; i < ele.length; i++) {
                        var cn = ele[i].className;
                        if (cn === className) {
                            classEle.push(ele[i]);
                        }
                    }
                    return classEle;
                }
                function innit() {
                    for (var i = 0; i < tagEle.length; i++) {
                        var a, b;
                        var k = -1 + (2 * (i + 1) - 1) / tagEle.length;
                        a = Math.acos(k);
                        b = a * Math.sqrt(tagEle.length * Math.PI);
                        var x = RADIUS * Math.sin(a) * Math.cos(b);
                        var y = RADIUS * Math.sin(a) * Math.sin(b);
                        var z = RADIUS * Math.cos(a);
                        var t = new tag(tagEle[i], x, y, z);
                        // tagEle[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
                        tagEle[i].style.color = "rgb(210,210,210)";
                        tags.push(t);
                        t.move();
                    }
                }
        
                // eslint-disable-next-line
                Array.prototype.forEach2 = function (callback) {
                    for (var i = 0; i < this.length; i++) {
                        callback.call(this[i]);
                    }
                }
        
                function animate() {
                    rotateX();
                    rotateY();
                    tags.forEach2(function () {
                        this.move();
                    });
                    requestAnimationFrame(animate);
                }
        
                // paper 为整个球的dom对象
                // 给球绑定滑动改变转动方向事件，并做了兼容IE浏览器操作
        
                if ("addEventListener" in window) {
                    paper.addEventListener("touchmove", function (event) {
                        event.preventDefault()
                        var x = event.touches[0].clientX - EX - CX;
                        var y = event.touches[0].clientY - EY - CY;
                        // 通过改变 x y 的正负值 改变触摸滑动的方向
                        angleY = -x * 0.0001;
                        angleX = -y * 0.0001;
                    });
                }
                else {
                    paper.attachEvent("onmousemove", function (event) {
                        event.preventDefault()
                        var x = event.clientX - EX - CX;
                        var y = event.clientY - EY - CY;
                        angleY = x * 0.0001;
                        angleX = y * 0.0001;
                    });
                }
        
        
                function rotateX() {
                    var cos = Math.cos(angleX);
                    var sin = Math.sin(angleX);
                    tags.forEach2(function () {
                        var y1 = this.y * cos - this.z * sin;
                        var z1 = this.z * cos + this.y * sin;
                        this.y = y1;
                        this.z = z1;
                    })
                }
        
        
                function rotateY() {
                    var cos = Math.cos(angleY);
                    var sin = Math.sin(angleY);
                    tags.forEach2(function () {
                        var x1 = this.x * cos - this.z * sin;
                        var z1 = this.z * cos + this.x * sin;
                        this.x = x1;
                        this.z = z1;
                    })
                }
        
        
                var tag = function (ele, x, y, z) {
                    this.ele = ele;
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
        
        
                tag.prototype = {
                    move: function () {
                        var scale = fallLength / (fallLength - this.z);
                        var alpha = (this.z + RADIUS) / (2 * RADIUS);
                        //改变   this.x  和  this.y  的正 负 可以调整方向
                        var left = this.x + CX - this.ele.offsetWidth / 2 + "px";
                        var top = this.y + CY - this.ele.offsetHeight / 2 + "px";
                        var transform = 'translate(' + left + ', ' + top + ') scale(' + scale + ')';
                        this.ele.style.opacity = alpha + 0.5;
                        this.ele.style.zIndex = parseInt(scale * 100);
                        this.ele.style.transform = transform;
                        this.ele.style.webkitTransform = transform;
                    }
                }
                innit();
                animate();
                this.flag ++
    }

}
