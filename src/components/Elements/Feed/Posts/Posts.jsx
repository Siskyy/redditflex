import React, { useState, useEffect} from 'react';
import './Posts.css';
import Comments from './Comments';

import { useSelector, useDispatch } from 'react-redux';
import { setCommentsForPost, setToggleComments } from '../../../../store/commentSlice';

const Posts = (props) => {

    const commentToggle = useSelector((state) => state.comment.toggleComments)
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
        
        <article className="reddit-post">
            <a 
                href={`https://www.reddit.com/${props.post.permalink}`}
            >
                <h3 className="post-title">{props.post.title}</h3>
            </a>
            <p>{props.post.author}</p>
            <p>{`Comments: ${props.post.num_comments}`}</p>
            <p>{`post id: ${props.post.id}`}</p>
            <p>{}</p>
            <button 
                className="toggleComments"
                onClick={changeToggle}
            >{`Comments ${commentsOn}`}</button>
            <div className="comment-section">
                {
                    (comments != null && commentsOn === true) ? comments.map((comment, index) => 
                    <Comments key={index} comment={comment.data}/>) : ''
                }
            </div>
        </article>
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
