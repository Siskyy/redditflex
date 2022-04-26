import React, { useEffect, useState } from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const SubsHard = () => {

    const [selectedSubreddit, setSelectedSubreddit] = useState('r/askreddit');

    const selectSubreddit = (e) => {
        setSelectedSubreddit(e.target.value);
    }

    useEffect(() => {
        setSelectedSubreddit(selectSubreddit)
    }, [selectSubreddit]);

    return (
        <div>
            <div className='sub-link-box first-link'>
                <span onClick={selectSubreddit} className='sub-link' value='r/askreddit'>
                    r/askReddit
                </span>
            </div>
            <div className='sub-link-box first-link'>
                <span onClick={selectSubreddit} className='sub-link' value='r/movies'>
                    r/Movies
                </span>
            </div>
            <div className='sub-link-box first-link'>
                <span onClick={selectSubreddit} className='sub-link' value='r/programming'>
                    r/Programming
                </span>
            </div>
            <div className='sub-link-box first-link'>
                <span onClick={selectSubreddit} className='sub-link' value='r/finance'>
                    r/Finance
                </span>
            </div>
        </div>
        
    )
}




export const SubsHardOld = createSlice({
    name: 'subreddits',
    initialState: {
        FixedSubs: [
            {
                subreddit: 'askreddit'
            },
            {
                subreddit: 'movies'
            },
            {
                subreddit: 'programming'
            },
            {
                subreddit: 'javascript'
            },
            {
                subreddit: 'finance'
            },
            {
                subreddit: 'netflix'
            },
            {
                subreddit: 'apple'
            },

        ]
    }
})

export const selectFixedSubs = state => state.subreddits.FixedSubs;