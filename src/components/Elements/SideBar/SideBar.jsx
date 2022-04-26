import React, { useState, useEffect } from 'react';
import './SideBar.css';

/* react-icon imports */
import {BsSearch} from '../../../../node_modules/react-icons/bs';
import Subcards from './SubCards/Subcards';
import SearchBar from './SearchBar/SearchBar';
import Subreddits from './Subreddits/Subreddits';

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
                <SearchBar />
                <button type="submit"><BsSearch /></button>
            </form>
            <Subreddits />
        </div>
    )
};

export default SubredditPanel;