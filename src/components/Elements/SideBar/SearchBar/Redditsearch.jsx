import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../../../store/hardRedditSlice';
import { setFilter, filterPosts } from '../../../../store/filterSlice';

const Redditsearch = () => {
    
    const selectedSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);

    return (
        <>
            <input 
                placeholder='r/ subreddit'
                className="searchbar"
                type="text"
            />   
        </>
    )
}

export default Redditsearch;