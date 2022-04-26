import React, { useState, useEffect } from 'react';
import './SubredditPanel.css';

/* react-icon imports */
import {BsSearch} from '../../../../node_modules/react-icons/bs';
import Subcards from './SubCards/Subcards';

const SubredditPanel = () => {

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
            <form className="search-form">
                <input 
                    placeholder='Search posts' 
                    className="searchbar" 
                    type="text"
                    value={subreddit}
                    onChange={(e) => setSubreddit(e.target.value)}
                />
                <button type="submit"><BsSearch /></button>
            </form>
            <ul className="subreddits">
                {
                    (posts != null) ? posts.map((subreddit, index) => 
                    <Subcards key={index} subreddit={subreddit.data}/>) : ''
                }
            </ul>
        </div>
    )
};

export default SubredditPanel;