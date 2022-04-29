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
                <p>programming</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('movies'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>movies</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('memes'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>memes</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('askreddit'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>askreddit</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('finance'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Finance</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('pics'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Pics</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('law'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Law</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('europe'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Europe</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('cars'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>cars</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('worldnews'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>World News</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('technology'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Technology</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('weird'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Weird</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('cats'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Cats</p>
            </button>
            <button 
                onClick={() => {dispatch(selectedSubreddit('dogs'))}}
                className={DarkMode ? 'subredditcard-dark' : 'subredditcard-light'}
            >
                <p>Dogs</p>
            </button>
        </ul>
        </>
    )
};

export default Subreddits;