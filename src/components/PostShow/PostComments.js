import React from 'react';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs'
import Avatar from '@mui/material/Avatar';

export default function PostComments (props) {
  const { commentInfo, dbUser, deleteComment } = props;

  return (
    <div className="comment">
      {commentInfo.map((obj, i) => (
        <ul key={i}>
          <div className="avatar-username">
            <Avatar src={obj.user.social_img} className="postShow__avatar" sx={{ width: 36, height: 36 }}/>
            <Link to={`/profile/${obj.user.id}`} className="postShow__username"> {obj.user.username}</Link>
          </div>
          <div className="comment-delete">
          <span>{obj.comment.content}&nbsp;&nbsp;
          {(obj.comment.user_id === dbUser.id) && 
            < BsTrash type="deleteComment" onClick={() => {deleteComment(obj.comment.id)}}/>
          }</span>
          </div>
        </ul>
      ))}
    </div>
  )
}