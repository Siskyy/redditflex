import React, { useState, useEffect} from 'react';
import './Posts.css';

import { useSelector } from 'react-redux';

const Posts = (props) => {

    const PermaObj = `https://www.reddit.com/${props.post.permalink}.json`;
    const [comments, setComments] = useState('');

    useEffect(() => {
        fetch(`https://www.reddit.com/${props.post.permalink}.json`)
        .then(response => {
            if (response.status != 200) {
                console.log("error");
                return;
            }
            response.json().then(data => {
                if (data != null) {
                    setComments(data.children);
                }
            })
        })
    }, [props.post.id]) // change this so that useEffect only renders when show comment is on

    // if show comment is on => fetch the comments for that id

    useEffect(() => {
        // set comment list (use actions)
        
    }, [comments])

    return (
        
        <article className="reddit-post">
            <a 
                href={`https://www.reddit.com/${props.post.permalink}`}
            >
                <h3 className="post-title">{props.post.title}</h3>
            </a>
            <p>{props.post.author}</p>
            <p>{`Comments: ${props.post.num_comments}`}</p>
            <details>
                <summary>
                    {}
                </summary>
            </details>
        </article>
    )
};
export default Posts;

/* Notes for tmrw

reddit.com/{permalink} => Comments

which will most likely be an object

object.data.id (which is a number)

reddit.com/permalink

*/

