import React from 'react';

const Posts = (props) => {

    return (
        <article>
            <a href={`https://www.reddit.com/${props.post.permalink}`}>
                <h3>{props.post.title}</h3>
            </a>
        </article>
    )
};
export default Posts;

