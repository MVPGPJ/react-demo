import React from 'react'
import {
    CommentItem
} from './styledComponents'

const CommentItemUI = (props) => {
   let {
      note,
      time,
      head,
      username,
      index
   } = props
   return (
     <CommentItem>
       <div className="userInfo">
           <div className="head">
               <img src={head} alt=""/>
           </div>
           <div className="floor">{index}楼</div>
       </div>
       <div className="commentInfo">
           <div className="commentTitle">
                <div>
                    <div>{username}</div>
                    <div>{time}</div>
                </div>
           </div>
            <div className='commentContent'>
                {note}
            </div>
       </div>
     </CommentItem>
   )
}

export default CommentItemUI