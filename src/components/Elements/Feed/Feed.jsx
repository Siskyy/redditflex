import React from 'react';
import './Feed.css';
import { useSelector } from 'react-redux';
import SubredditData from './SubredditData/SubredditData';
import SearchBar from '../SideBar/SearchBar/SearchBar';
import {BsSortDown} from '../../../../node_modules/react-icons/bs';

const Feed = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);

    return (
        <>
            
            <div className={DarkMode ? 'feed-darkmode' : 'feed-lightmode'}>
                <div className="filter-bar">
                    <form className={DarkMode ? 'searchform-dark' : 'searchform-light'}>
                        <SearchBar />
                    </form>
                    <button className="filter-button">
                        <BsSortDown />
                    </button>  
                </div>
                
                <div className="posts">
                    <SubredditData />
                </div>
            </div>
        </>
    )
}

export default Feed;