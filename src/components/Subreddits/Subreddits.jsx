import React, { useEffect } from 'react';
import './Subreddits.css';
import Wrapper from '../Wrapper/Wrapper';
import { useDispatch, useSelector } from 'react-redux';

import { selectSubreddit, getSubreddits } from '../../store/subredditSlice';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditPostSlice';

/* react-icon imports */

import {BsSearch} from '../../../node_modules/react-icons/bs';

const Subreddits = () => {

    const dispatch = useDispatch();

    const subreddits = useSelector(selectSubreddit);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(getSubreddits());    
    }, [dispatch]);

    return (
        <Wrapper className="subreddit-sidebar">
            <form className="search-form">
                <input placeholder='Search posts' className="searchbar" type="search"/>
                <button type="submit"><BsSearch /></button>
            </form>
            <ul className="subreddits">
                {
                    subreddits.map((subreddit) => (
                        <li key={subreddit.id} className={`${selectedSubreddit === subreddit.url && `selected-subreddit`}`}>
                            <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                                {subreddit.display_name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </Wrapper>
    )

}

export default Subreddits;