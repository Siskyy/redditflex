import React, { useState, useEffect } from 'react';
import './SideBar.css';
import { useSelector, useDispatch } from 'react-redux';
/* actions */
import { setFilteredPosts } from '../../../store/filterSlice';
/* react-icon imports */
import {BsSearch} from '../../../../node_modules/react-icons/bs';
import Subcards from './SubCards/Subcards';
import SearchBar from './SearchBar/SearchBar';
import Subreddits from './Subreddits/Subreddits';

const SideBar = () => {

    const post = useSelector((state) => state.filter.unfilteredPosts);
    const searchTerm = useSelector((state) => state.hardSubreddit.searchTerm);
    const dispatch = useDispatch();
    /*
        Cycle through posts and put all titles into an array
    */
    let postTitles = [];
    let filteredPostTitles = [];
    for (let i=0; i < post.length; i++) {
        postTitles.push(post[i].data.title);
    }
    
    useEffect(() => {
        console.log("we printin")
        console.log(post.length)
        console.log(postTitles)
    }, [post])

    useEffect(() => {
        if (searchTerm !== '' && post !== '') {
            filteredPostTitles = post.filter((post) => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()))
            console.log(`There are ${filteredPostTitles.length} matches for your search: ${searchTerm}`)
            console.log(filteredPostTitles);
            dispatch(setFilteredPosts(filteredPostTitles));
        }
        else {
            console.log("No text in field!");
            dispatch(setFilteredPosts(''))
        }
    }, [searchTerm])

    return (
        <div>
            <form className="search-form">
                <SearchBar />
                {/* <button type="submit"><BsSearch /></button> */}
            </form>
            <div className="subreddits">
            <Subreddits />
            </div>
            
        </div>
    )
};

export default SideBar;