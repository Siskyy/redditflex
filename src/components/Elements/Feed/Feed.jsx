import React from 'react';
import './Feed.css';
import { useSelector, useDispatch } from 'react-redux';
import SubredditData from './SubredditData/SubredditData';
import SearchBar from '../SideBar/SearchBar/SearchBar';
import {BsClock} from '../../../../node_modules/react-icons/bs';
import {HiFire} from '../../../../node_modules/react-icons/hi';
import {IoIosPodium} from '../../../../node_modules/react-icons/io';
import { setSortBy } from '../../../store/hardRedditSlice';

const Feed = () => {

    const DarkMode = useSelector((state) => state.comment.darkMode);
    const sortBy = useSelector((state) => state.hardSubreddit.sortBy);
    const dispatch = useDispatch();

    return (
        <>
            
            <div className={DarkMode ? 'feed-darkmode' : 'feed-lightmode'}>
                <div className="filter-bar">
                    <form className={DarkMode ? 'searchform-dark' : 'searchform-light'}>
                        <SearchBar />
                    </form>
                    <div className="sortBy-buttons">
                    <button className={DarkMode && sortBy == "new" ? 'filter-button filter-dark selected-filter' : !DarkMode && sortBy == "new" ? 'filter-button filter-light selected-filter' : DarkMode ? 'filter-button filter-dark' : 'filter-button filter-light'}
                        onClick={() => {dispatch(setSortBy("new"))}}
                    ><BsClock />
                    </button>
                    <button className={DarkMode && sortBy == "hot" ? 'filter-button filter-dark selected-filter' : !DarkMode && sortBy == "hot" ? 'filter-button filter-light selected-filter' : DarkMode ? 'filter-button filter-dark' : 'filter-button filter-light'}
                        onClick={() => {dispatch(setSortBy("hot"))}}
                    ><HiFire />
                    </button>
                    <button className={DarkMode && sortBy == "top" ? 'filter-button filter-dark selected-filter' : !DarkMode && sortBy == "top" ? 'filter-button filter-light selected-filter' : DarkMode ? 'filter-button filter-dark' : 'filter-button filter-light'}
                        onClick={() => {dispatch(setSortBy("top"))}}
                    ><IoIosPodium />
                    </button>
                    </div>
                </div>
                
                <div className="posts">
                    <SubredditData />
                </div>
            </div>
        </>
    )
}

export default Feed;