import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import './Comments.css';
import moment from 'moment';

const Comments = (props) => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const Comment = props.comment.body;

    return (
        <>
            <div className={DarkMode ? 'post-comment-darkmode' : 'post-comment-lightmode'}>
                <div className={DarkMode ? 'comment-data-darkmode' : 'comment-data-lightmode'}>
                    <p className={DarkMode ? 'comment-author-dark' : 'comment-author-light'}>{props.comment.author}</p>
                    <p className="time-created">{moment.unix(props.comment.created_utc).fromNow()}</p>
                </div>
                <ReactMarkdown>{Comment}</ReactMarkdown>
            </div>
        </>
    )
};

export default Comments;


