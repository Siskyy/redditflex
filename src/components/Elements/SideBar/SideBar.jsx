import React, { useState, useEffect } from 'react';
import './SideBar.css';
import { useSelector, useDispatch } from 'react-redux';

/* react-icon imports */
import {BsSearch} from '../../../../node_modules/react-icons/bs';
import Subcards from './SubCards/Subcards';
import SearchBar from './SearchBar/SearchBar';
import Subreddits from './Subreddits/Subreddits';

const SideBar = () => {

    const post = useSelector((state) => state.filter.unfilteredPosts);
    const firstPost = post[0].data.title;

    /*
        Cycle through posts and put all titles into an array
    */
    let postTitles = [];
    for (let i=0; i < post.length; i++) {
        postTitles.push(post[i].data.title);
    }
    
    useEffect(() => {
        console.log("we printin")
        console.log(post.length)
        console.log(postTitles)
    }, [post])

    return (
        <div>
            <form className="search-form">
                <SearchBar />
                <button type="submit"><BsSearch /></button>
            </form>
            <div>
                <h4>{firstPost}</h4>
            </div>
            <div className="subreddits">
            <Subreddits />
            </div>
            
        </div>
    )
};

export default SideBar;