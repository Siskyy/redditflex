import React from 'react';
import './Subreddits.css';

import {BsSearch} from '../../../node_modules/react-icons/bs';

const Subreddits = () => {

    return (
        <div className="subreddit-sidebar">
            <form className="search-form">
                <input placeholder='Search posts' className="searchbar" type="search"/>
                <button type="submit"><BsSearch /></button>
            </form>
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