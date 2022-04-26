import React from 'react';

const Subcards = (props) => {

    return (
        <button>
            <a href={`https://www.reddit.com/${props.subreddit}`}>
                <h4>{props.subreddit.subreddit}</h4>
            </a>
        </button>
    )
};
export default Subcards;