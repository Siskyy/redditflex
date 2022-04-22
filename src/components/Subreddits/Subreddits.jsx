import React from 'react';
import './Subreddits.css';

import {BsSearch} from '../../../node_modules/react-icons/bs';

const Subreddits = () => {

    return (
        <div className="subreddit-sidebar">
            <div className="searchbar-container">
                <input placeholder='🔍  Search posts' className="searchbar" type="search"/>
            </div>
            <div className="subreddits">
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
                <a className="subreddit">Subreddit</a>
            </div>
        </div>
    )

}

export default Subreddits;