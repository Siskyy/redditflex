import React from 'react';
import './Subreddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit } from '../../../../store/hardRedditSlice';

const Subreddits = () => {

    const selection = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const dispatch = useDispatch();

    return (
        <>
        <ul className="subreddit-list">
            <button 
                onClick={() => {dispatch(selectedSubreddit('programming'))}}
                className="subreddit-card"
            >
                <p>programming</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('movies'))}}
                className="subreddit-card"
            >
                <p>movies</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('memes'))}}
                className="subreddit-card"
            >
                <p>memes</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('askreddit'))}}
                className="subreddit-card"
            >
                <p>askreddit</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('finance'))}}
                className="subreddit-card"
            >
                <p>Finance</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('europe'))}}
                className="subreddit-card"
            >
                <p>Europe</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('law'))}}
                className="subreddit-card"
            >
                <p>Law</p>
            </button>
        </ul>
        </>
    )
};

export default Subreddits;