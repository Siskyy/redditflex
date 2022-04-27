import React, { useState, useEffect } from 'react';

import Posts from '../../Feed/Posts/Posts';

import { useSelector, useDispatch } from 'react-redux';

const SubredditData = () => {

    const [posts, setPosts] = useState([]);
    const [subreddit, setSubreddit] = useState('');

    const searchTerm = useSelector((state) => state.hardSubreddit.searchTerm);
    const currentSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${currentSubreddit}.json`)
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
    }, [currentSubreddit])

    return (
        <div>
            
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