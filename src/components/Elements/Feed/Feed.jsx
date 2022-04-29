import React from 'react';
import './Feed.css';
import { useSelector } from 'react-redux';
import SubredditData from './SubredditData/SubredditData';

const Feed = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);

    return (
        <div className={DarkMode ? 'feed-darkmode' : 'feed-lightmode'}>
            <div className="posts">
                <SubredditData />
            </div>
        </div>
    )
}

export default Feed;