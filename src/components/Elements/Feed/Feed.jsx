import React from 'react';
import './Feed.css';

import SubredditData from './SubredditData/SubredditData';

const Feed = () => {

    return (
        <div className="feed">
            <div className="posts">
                <SubredditData />
            </div>
        </div>
    )
}

export default Feed;