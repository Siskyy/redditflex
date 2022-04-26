import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const SearchBar = () => {

    const selectedSubreddit = useSelector((state) => state.hardSubreddit.selectedSubreddit);
    const dispatch = useDispatch();

    return (
        <input 
            placeholder={selectedSubreddit} 
            className="searchbar" 
            type="text"
            value={selectedSubreddit}
            onChange=''
        />
    )
};

export default SearchBar;