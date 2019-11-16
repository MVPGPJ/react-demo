import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Interaction extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let info = this.props.props.info
        let addLike = this.props.props.addLike
        let index = this.props.props.index
        return (
            <div className="Interaction">
                <i className="like" onClick={addLike.bind(null,info.id,index)}></i><span>{info.star}</span>
                <i className="comment" onClick={()=>{this.props.history.push(`/comment/${info.id}`)}}></i><span>{info.comments}</span>
                <i className="collection"></i>
            </div>
        )
    }
}

export default withRouter(Interaction) 


