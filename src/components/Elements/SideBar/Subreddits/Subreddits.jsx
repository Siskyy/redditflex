import React from 'react';
import './Subreddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddit } from '../../../../store/hardRedditSlice';

const Subreddits = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const dispatch = useDispatch();

    return (
        <>
        <ul className="subreddit-list">
            <button 
                onClick={() => {dispatch(selectedSubreddit('programming'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <img />
                <p className="subreddit-title">programming</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('movies'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">movies</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('memes'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">memes</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('askreddit'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">askreddit</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('finance'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Finance</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('pics'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Pics</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('law'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Law</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('europe'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Europe</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('cars'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">cars</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('worldnews'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">World News</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('technology'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Technology</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('weird'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Weird</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('cats'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Cats</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('dogs'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p className="subreddit-title">Dogs</p>
            </button>
        </ul>
        </>
    )
};

export default Subreddits;