import React, { useState, useEffect} from 'react';
import './Posts.css';

import { useSelector } from 'react-redux';

const Posts = (props) => {

    const [filter, setFilter] = useState('');
    const searchTerm = useSelector((state) => state.hardSubreddit.searchTerm);

    useEffect(() => {
        setFilter(searchTerm)
    }, [searchTerm])

    return (
        
        <article className="reddit-post">
            <a 
                href={`https://www.reddit.com/${props.post.permalink}`}
            >
                <h3 className="post-title">{props.post.title}</h3>
            </a>
        </article>
    )
};
export default Posts;

