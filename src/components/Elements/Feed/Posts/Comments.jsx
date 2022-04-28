import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import './Comments.css';

const Comments = (props) => {

    const Comment = props.comment.body;

    return (
        <>
            <div className="post-comment">
                <div className="comment-data">
                    <p className="comment-author">{props.comment.author}</p>
                    <p className="time-created">{props.comment.created_utc}</p>
                </div>
                <ReactMarkdown>{Comment}</ReactMarkdown>
            </div>
        </>
    )
};

export default Comments;