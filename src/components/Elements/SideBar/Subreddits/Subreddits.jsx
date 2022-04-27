import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit } from '../../../../store/hardRedditSlice';

const Subreddits = () => {

    const selection = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const dispatch = useDispatch();

    return (
        <>
        <ul className="subreddits">
            <button onClick={() => {dispatch(selectedSubreddit('programming'))}}>
                programming
            </button>
            <button onClick={() => {dispatch(selectedSubreddit('movies'))}}>
                movies
            </button>
            <button onClick={() => {dispatch(selectedSubreddit('memes'))}}>
                memes
            </button>
            <button onClick={() => {dispatch(selectedSubreddit('askreddit'))}}>
                askreddit
            </button>
            <button onClick={() => {dispatch(selectedSubreddit('programming'))}}>
                Finance
            </button>
        </ul>
        </>
    )
};

export default Subreddits;