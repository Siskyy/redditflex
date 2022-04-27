import React, { useState, useEffect } from 'react';
import './SideBar.css';

/* react-icon imports */
import {BsSearch} from '../../../../node_modules/react-icons/bs';
import Subcards from './SubCards/Subcards';
import SearchBar from './SearchBar/SearchBar';
import Subreddits from './Subreddits/Subreddits';

const SideBar = () => {

    
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