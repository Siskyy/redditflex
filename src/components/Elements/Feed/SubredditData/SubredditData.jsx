import React, { useState, useEffect } from 'react';

import Posts from '../../Feed/Posts/Posts';

const SubredditData = () => {

    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState('askreddit');

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => {
            if (response.status != 200) {
                console.log("error");
                return;
            }
            response.json().then(data => {
                if (data != null) {
                    setPosts(data.data.children);
                }
            })
        })
    })

    return (
        <div>
            <input 
                placeholder='Search posts' 
                className="searchbar" 
                type="text" 
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
            />
            <div className="feed">
            {
                (posts != null) ? posts.map((post, index) => 
                <Posts key={index} post={post.data}/>) : ''
            }
            </div>
        </div>
    )

};

export default SubredditData;