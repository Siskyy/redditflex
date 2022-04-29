import React, { useState, useEffect} from 'react';
import './BetterPost.css';
import Comments from './Comments';
import {TiMessage} from '../../../../../node_modules/react-icons/ti';
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux';
import { setCommentsForPost, setToggleComments } from '../../../../store/commentSlice';

const Posts = (props) => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [commentsOn, setCommentsOn] = useState(false);


    useEffect(() => {
        if (commentsOn) {
        fetch(`https://www.reddit.com/${props.post.permalink}.json`)
        .then(response => {
            if (response.status != 200) {
                console.log("error");
                return;
            }
            response.json().then(data => {
                if (data != null) {
                    setComments(data[1].data.children);
                }
            })
        })
    }
    }, [commentsOn]) // change this so that useEffect only renders when show comment is on

    // if show comment is on => fetch the comments for that id

    useEffect(() => {
        dispatch(setCommentsForPost(comments))
        console.log("printing comments!")
        console.log(comments)

        for (let i=0; i < comments.length; i++) {
            console.log(comments[i].data.body);
            console.log("Next Comments");
        }

    }, [commentsOn])

    const changeToggle = () => {
        if (commentsOn === false) {
            setCommentsOn(true);
        }
        else {
            setCommentsOn(false);
        }
    }

    return (
        <div className="large-container">
            <article className={DarkMode ? 'redditpost-darkmode' : 'redditpost-lightmode'}>
                <div className="post-container">
                    <h3 className={DarkMode ? 'posttitle-darkmode' : 'posttitle-lightmode'}>{props.post.title}</h3>
                    <div className="post-image-container">
                        <img src={props.post.url} alt="" className="post-image"/>
                    </div>
                    
                    <div className={DarkMode ? 'postdetails-darkmode' : 'postdetails-lightmode'}>
                        <span className="author-data">
                            <span className={DarkMode ? 'author-darkmode' : 'author-lightmode'}>{props.post.author}</span>
                        </span>
                        <span>{moment.unix(props.post.created_utc).fromNow()}</span>
                    
                        <span className="post-comment-data">
                            <button className="toggleComments" onClick={changeToggle}>
                                <TiMessage className="toggle-comments-icon" />
                            </button>
                            <p>{`Comments: ${props.post.num_comments}`}</p>
                        </span>
                    </div>
                    <div className="comment-section">
                        {
                            (comments != null && commentsOn === true) ? comments.map((comment, index) => 
                            <Comments key={index} comment={comment.data}/>) : ''
                        }
                    </div>
                </div>
            </article>
        </div>
    )
};
export default Posts;

// parent_id: "t3_udyx84"

// the id of the post will be: udyx84

/*
    so if show comments is clicked {
        
        set the showingCommentsFor = [post id] that it was clicked on


    }
*/
